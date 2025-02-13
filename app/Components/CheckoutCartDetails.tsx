import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import CartItem from "./CartItem";
import { addCouponCode, addDiscount } from "../store/redux/cartSlice";
import axios from "axios";
import { baseUrl } from "../util/axiosInstance";
import { isEmpty } from "lodash";
import { CouponValidation } from "../util/helpers";

const CheckoutCartDetails = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.cartItems);
  const couponCode = useSelector((state: RootState) => state.cart.couponCode);
  const discountPercentage = useSelector(
    (state: RootState) => state.cart.discountPercentage
  );
  const dispatch = useDispatch<AppDispatch>();

  const [couponcodemsg, setCouponCodeMsg] = useState("");
  const [couponCodeApplied, setCouponCodeApplied] = useState<boolean>(false);

  const VerifyCouponCode = async () => {
    try {
      if (!couponCode) {
        dispatch(addDiscount(0));
        setCouponCodeMsg("");
        return;
      }
      const response = await axios.get(`${baseUrl}coupons/${couponCode}`);

      if (!isEmpty(response.data)) {
        const validateCoupon = CouponValidation(response.data[0], priceTotal);

        if (!validateCoupon.errors.discount) {
          dispatch(addDiscount(Number(validateCoupon.couponAmount)));
          setCouponCodeMsg(
            response.data[0].type === "percentage"
              ? `${response.data[0].discount}% discount is applied`
              : `Flat $${response.data[0].discount} discount is applied`
          );
          setCouponCodeApplied(true);
        } else {
          setCouponCodeMsg(validateCoupon.errors.discount);
          dispatch(addDiscount(0));
          setCouponCodeApplied(false);
        }
      } else {
        setCouponCodeMsg("Invalid coupon code");
        dispatch(addDiscount(0));
        setCouponCodeApplied(false);
      }
    } catch (error) {
      if (error?.response?.status === 404) {
        setCouponCodeMsg("Coupon does not exist");
        dispatch(addDiscount(0));
        setCouponCodeApplied(false);
      } else {
        console.error("Error verifying coupon code:", error);
        setCouponCodeMsg("An error occurred. Please try again.");
      }
    }
  };

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems?.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }
    return totalPrice;
  });

  useEffect(() => {
    if (couponCodeApplied && couponCode.length > 0) {
      VerifyCouponCode();
    }
  }, [couponCodeApplied, couponCode, priceTotal]);

  const handleUpdateCouponCode = (e: any) => {
    dispatch(addCouponCode(e.target.value.toUpperCase()));
  };

  const today = new Date();
  const EstimatedDeliveryDate = new Date(
    today.getTime() + 4 * 24 * 60 * 60 * 1000
  ).toDateString();

  return (
    <div className="w-full lg:w-1/2 bg-[#F2ECE2] p-6 lg:p-8">
      <h2 className="text-2xl font-medium mb-6 text-[#242424]">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-8">
        {cartProducts.map((item: any) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>

      {/* Coupon Code Section */}
      <div className="mb-8">
        <div className="flex gap-3">
          <input
            placeholder="Coupon Code"
            type="text"
            className="flex-1 bg-white outline-none py-3 px-4 rounded"
            value={couponCode}
            onChange={handleUpdateCouponCode}
          />
          <button
            className="px-6 py-3 border border-black rounded"
            onClick={VerifyCouponCode}
          >
            Apply
          </button>
        </div>
        {couponcodemsg !== "" && (
          <p className={`mt-2 text-sm ${couponCodeApplied ? 'text-green-600' : 'text-red-600'}`}>
            {couponcodemsg}
          </p>
        )}
      </div>

      {/* Order Summary */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Order Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Price</span>
            <span>${priceTotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Discount</span>
            <span>${discountPercentage}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 space-y-3">
          <div className="flex justify-between font-medium">
            <span>TOTAL</span>
            <span>${(priceTotal - discountPercentage).toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated Delivery by</span>
            <span>
              {cartProducts.length > 0 ? EstimatedDeliveryDate : "Un Estimated"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartDetails;
