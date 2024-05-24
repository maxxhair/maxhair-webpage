import Image from "next/image";
import React from "react";
import { closeIcon, prodimg } from "../util/images";

const Wishlist = () => {
  return (
    <div className="w-full p-5 flex items-center justify-between border-2 border-pink-200 mb-10">
      <Image src={prodimg} alt="cartProduct" width={115} height={180} />
      <div className="flex flex-col gap-2 items-start">
        <p className="lg:headline-small md:title-medium title-small flex lg:flex-row justify-center text-center gap-2 flex-col flex-wrap">
          <span>Machine Weft - Curly</span>
        </p>
        <p className="lg:label-medium md:body-medium body-small">
          Single drawn
        </p>
        <div className="flex items-center gap-5">
          <p className="lg:label-small md:body-medium body-small text-gray-500">
            Size: 32
          </p>
          <p className="lg:label-small md:body-medium body-small text-gray-500">
            Color: Natural
          </p>
        </div>
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
      <p className="lg:label-medium md:body-medium body-small">$440</p>
      <button className="bg-black py-2 px-7 text-lg text-white">
        ADD TO CART
      </button>
      <Image src={closeIcon} alt="close" className="cursor-pointer" />
    </div>
  );
};

export default Wishlist;
