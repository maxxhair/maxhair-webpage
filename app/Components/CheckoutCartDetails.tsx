import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import CartItem from "./CartItem";
import { addCouponCode, addDiscount } from "../store/redux/cartSlice";

const CheckoutCartDetails = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.cartItems);
  const couponCode = useSelector((state: RootState) => state.cart.couponCode);
  const discountPercentage = useSelector(
    (state: RootState) => state.cart.discountPercentage
  );
  const dispatch = useDispatch<AppDispatch>();

  const [couponcodemsg, setCouponCodeMsg] = useState("");

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }
    return totalPrice;
  });

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
    <div className="w-full lg:w-1/2 bg-[#F2ECE2] p-4 h-[85vh] overflow-y-scroll lg:pt-8 lg:px-8">
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
        />
        <button
          className={
            couponCode !== ""
              ? "bg-transparent px-6 py-3 border border-green-400 rounded-lg text-green-400"
              : "border border-black  px-6 py-3 rounded-lg"
          }
        >
          {couponCode !== "" ? "Applied" : "Apply"}
        </button>
      </div>
      {couponcodemsg !== "" && <p className="text-sm">{couponcodemsg}</p>}
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
              <p className="label-medium font-medium">${discount}</p>
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
                ${(priceTotal - discount).toFixed(2)}
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
