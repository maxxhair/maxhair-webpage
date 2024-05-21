import Image from "next/image";
import React from "react";
import { productImage } from "../util/images";

const CartItem = () => {
  return (
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
  );
};

export default CartItem;
