import React from "react";
import { productImage } from "../util/images";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartItem from "./CartItem";

const CheckoutCartDetails = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.cartItems);

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  });

  const discount = parseInt(((40 / 100) * priceTotal).toFixed(2));

  return (
    <div className="w-full lg:w-1/2 bg-[#F2ECE2] pt-16 px-8">
      {cartProducts.map((item: any) => (
        <CartItem key={item.id} product={item} />
      ))}
      <div className="w-full flex items-center gap-6 justify-between">
        <input
          placeholder="Discount code or gift card"
          type="text"
          className="w-full bg-white outline-none py-3 px-2 rounded-lg"
          value={cartProducts.length > 0 ? "MAXX40" : ""}
        />
        <button
          className={
            cartProducts.length > 0
              ? "border px-6 py-3 border-green-400 text-green-400"
              : "bg-transparent px-6 py-3 border border-black rounded-lg"
          }
        >
          {cartProducts.length > 0 ? "Applied" : "Apply"}
        </button>
      </div>
      <div className="">
        <p className="headline-small pt-5">
          <div className="py-5 border-b border-gray-500 flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">Amount</p>
              <p className="label-medium font-medium">${priceTotal}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">Discount</p>
              <p className="label-medium font-medium">${discount}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">Shipping</p>
              <p className="label-medium font-medium">Free</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">
                Coupon Applied
              </p>
              <p className="label-medium font-medium">$0.00</p>
            </div>
          </div>
          <div className="py-5 flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">TOTAL</p>
              <p className="label-medium font-medium">
                ${priceTotal - discount}
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">
                Estimated Delivery by
              </p>
              <p className="label-medium font-medium">01 Feb, 2023</p>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default CheckoutCartDetails;
