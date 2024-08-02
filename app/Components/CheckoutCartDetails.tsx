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
        console.log("Coupon Validation:", validateCoupon);

        if (!validateCoupon.errors.discount) {
          dispatch(addDiscount(Number(validateCoupon.couponAmount)));
          setCouponCodeMsg(`${response.data[0].discount}% discount is applied`);
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
    dispatch(addCouponCode(e.target.value));
  };

  const discount = parseInt(
    ((discountPercentage / 100) * priceTotal).toFixed(2)
  );

  const today = new Date();
  const EstimatedDeliveryDate = new Date(
    today.getTime() + 4 * 24 * 60 * 60 * 1000
  ).toDateString();

  return (
    <div className="w-full lg:w-1/2 bg-[#F2ECE2] p-4 h-[85vh] overflow-y-scroll lg:pt-8 lg:px-8 flex-1">
      <span className="lg:title-large title-medium ">
        {`Cart items (${cartProducts.length})`}
      </span>
      {cartProducts.map((item: any) => (
        <CartItem key={item.id} product={item} />
      ))}

      <div className="w-full flex items-center gap-6 justify-between">
        <input
          placeholder="Discount code or gift card"
          type="text"
          className="w-full bg-white outline-none py-3 px-2 rounded-lg"
          value={couponCode.toUpperCase()}
          onChange={handleUpdateCouponCode}
        />
        <button
          className="bg-transparent px-6 py-3 border border-black rounded-lg"
          onClick={VerifyCouponCode}
        >
          Apply
        </button>
      </div>
      {couponcodemsg !== "" && (
        <p
          className={
            couponCodeApplied
              ? `text-sm text-green-500`
              : `text-sm text-red-500`
          }
        >
          {couponcodemsg}
        </p>
      )}
      <div className="">
        <div className="headline-small pt-5">
          <div className="py-5 border-b border-gray-500 flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">Amount</p>
              <p className="label-medium font-medium">
                ${priceTotal.toFixed(2)}
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">Discount</p>
              <p className="label-medium font-medium">${discountPercentage}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">Shipping</p>
              <p className="label-medium font-medium">Free</p>
            </div>
          </div>
          <div className="py-5 flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">TOTAL</p>
              <p className="label-medium font-medium">
                ${(priceTotal - discountPercentage).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">
                Estimated Delivery by
              </p>
              <p className="label-medium font-medium">
                {cartProducts.length > 0
                  ? EstimatedDeliveryDate
                  : "Un Estimated"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartDetails;
