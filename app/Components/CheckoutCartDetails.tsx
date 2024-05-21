import React from "react";
import { productImage } from "../util/images";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const CheckoutCartDetails = () => {
  const cartProducts = useSelector((state: RootState) => state.cart);
  return (
    <div className="w-1/2 bg-[#F2ECE2] pt-16 px-8">
      <div className="my-5 w-full h-48 bg-white p-6 flex justify-between">
        <div className="flex gap-4">
          <Image src={productImage} alt="cartProduct" width={115} />
          <div className="flex flex-col gap-2">
            <p className="headline-small">Machine Weft - Curly</p>
            <p className="label-medium">Single drawn</p>
            <div className="flex items-center gap-5">
              <p className="label-small text-gray-500">Size: 32</p>
              <p className="label-small text-gray-500">Color: Natural</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="grid place-items-center w-10 aspect-square border border-gray-500 cursor-pointer text-3xl">
                -
              </div>
              <p className="label-medium">1</p>
              <div className="grid place-items-center w-10 aspect-square border border-gray-500 cursor-pointer text-3xl">
                +
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between">
          <p className="label-large">$440</p>
          <p className="label-medium underline cursor-pointer">Remove</p>
        </div>
      </div>
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
    </div>
  );
};

export default CheckoutCartDetails;
