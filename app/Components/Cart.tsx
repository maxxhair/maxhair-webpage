import Image from "next/image";
import React from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  handleClose: () => void;
}

const Cart: React.FC<Props> = ({ handleClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <div className="w-full">
      <CartItem />
      <div className="w-full flex items-center gap-6 justify-between">
        <input
          placeholder="Discount code or gift card"
          type="text"
          className="w-full bg-white outline-none py-3 px-2 rounded-lg"
        />
        <button className="bg-transparent px-6 py-3 border border-black rounded-lg">
          Apply
        </button>
      </div>
      <div className="">
        <p className="headline-small pt-5">
          <div className="py-5 border-b border-gray-500 flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">Amount</p>
              <p className="label-medium font-medium">$319.98</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="label-medium text-gray-500 font-medium">Discount</p>
              <p className="label-medium font-medium">$31.98</p>
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
              <p className="label-medium font-medium">$288.08</p>
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
      <Link href="/checkout">
        <button
          className="w-full my-5 bg-black text-white py-4 uppercase title-small tracking-widest font-semibold"
          onClick={handleClose}
        >
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default Cart;
