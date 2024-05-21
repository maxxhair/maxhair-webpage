"use client";

import Image from "next/image";
import { Fira_Sans, Prompt } from "next/font/google";
import ReviewCard from "../Components/ReviewCard";
import ProductCard from "../Components/ProductCard";
import {
  plus,
  deliveryImg,
  productImage,
  logo,
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  productImage5,
} from "../util/images";
import SizeButton from "../Components/SizeButton";
import ChooseButton from "../Components/ChooseButton";
import React, { useState } from "react";
import ExtraInfoSection from "../Components/ExtraInfoSection";
import {
  colorOpts,
  list1,
  sizeOpts,
  textureOpts,
  typeOpts,
} from "../util/staticData";
import Rating from "../Components/Rating";

const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Page() {
  const [selectedSize, setSize] = useState(null);
  const [selectedColor, setColor] = useState(null);
  const [selectedType, setType] = useState(null);
  const [selectedTexture, setTexture] = useState(null);

  return (
    <div
      className={`${prompt.className}  bg-white text-black mt-20 2xl:w-4/5 2xl:m-auto 2xl:mt-20`}
    >
      <div className="md:flex flex-row inline">
        <div className=" md:w-6/12 p-8 sm:m-auto xl:m-0 sm:w-3/5 ">
          <Image src={productImage} alt="product-image-error" />
          <div className="w-full flex">
            <Image
              src={productImage1}
              alt="product-image-error"
              className=" w-1/2"
            />
            <Image
              src={productImage2}
              alt="product-image-error"
              className=" w-1/2"
            />
          </div>
          <Image src={productImage3} alt="product-image-error" />
          <Image src={productImage4} alt="product-image-error" />
          <Image src={productImage5} alt="product-image-error" />
        </div>
        <div className="md:w-1/2 p-16 pl-8 sm:m-auto sm:text-xs xl:text-sm xl:m-0 sticky top-10 h-[180vh]">
          <p className="text-sm font-semibold ">Home - Bulk Hair</p>
          <p className="text-sm font-semibold mt-5">Select Size</p>
          <div className=" mt-2">
            {sizeOpts?.map((size) => (
              <button
                onClick={() => setSize(size)}
                className={` w-10 h-10 m-1.5 bg-neutral-100 text-center p-2.5 xl:text-sm border border-neutral-200 rounded max-md:w-6 max-md:h-6 max-md:p-0.5 sm:text-xs ${
                  selectedSize === size
                    ? "bg-[#E3D6C5] text-[#A47252]"
                    : "bg-neutral-100"
                }`}
                key={size}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-sm font-semibold mt-4">Color</p>
          <div className="mt-2">
            {colorOpts?.map((color) => (
              <button
                onClick={() => setColor(color)}
                className={`m-1.5 xl:pl-6 xl:pr-6 xl:h-10 text-center xl:p-2.5 xl:text-sm border border-neutral-200 rounded sm:pl-2.5 sm:pr-2.5 sm:text-xs sm:h-6 ${
                  selectedColor === color
                    ? "bg-[#E3D6C5] text-[#A47252]"
                    : "bg-neutral-100"
                }`}
                key={color}
              >
                {color}
              </button>
            ))}
          </div>
          <p className="text-sm font-semibold mt-4 ">Type</p>
          <div className=" mt-2">
            {typeOpts?.map((type) => (
              <button
                onClick={() => setType(type)}
                className={`m-1.5 xl:pl-6 xl:pr-6 xl:h-10 text-center xl:p-2.5 xl:text-sm border border-neutral-200 rounded sm:pl-2.5 sm:pr-2.5 sm:text-xs sm:h-6 ${
                  selectedType === type
                    ? "bg-[#E3D6C5] text-[#A47252]"
                    : "bg-neutral-100"
                }`}
                key={type}
              >
                {type}
              </button>
            ))}
          </div>
          <p className="text-sm font-semibold mt-4">Texture</p>
          <div className="mt-2">
            {textureOpts?.map((texture) => (
              <button
                onClick={() => setTexture(texture)}
                className={`m-1.5 xl:pl-6 xl:pr-6 xl:h-10 text-center xl:p-2.5 xl:text-sm border border-neutral-200 rounded sm:pl-2.5 sm:pr-2.5 sm:text-xs sm:h-6 ${
                  selectedTexture === texture
                    ? "bg-[#E3D6C5] text-[#A47252]"
                    : "bg-neutral-100"
                }`}
                key={texture}
              >
                {texture}
              </button>
            ))}
          </div>
          <div className="flex space-x-3 mt-4">
            <Image src={deliveryImg} alt="img-err" />
            <p className=" sm:mt-1 ">Free Delivery & Easy Returns</p>
          </div>
          <div className="sm:review-card mt-8">
            {(selectedSize === null ||
              selectedColor === null ||
              selectedTexture === null ||
              selectedType === null) && (
              <div className="text-[#f00a]">
                Please select your required variant to add to cart
              </div>
            )}
            <button
              type="submit"
              className=" w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-800 focus:ring-4 mt-2 "
            >
              ADD TO CART ( $258 )
            </button>
          </div>
          <div className="flex mt-4 border  border-neutral-200 rounded">
            <Image src={logo} alt="img-err" className="m-3 w-16" />
            <p className="text-sm p-5 font-semibold">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>
          </div>
          <p className=" text-lg font-semibold mt-4">Description</p>
          <div className="mt-3 text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>

            <p className="mt-1.5">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>

            <p className="mt-1.5">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>

            <p className="mt-1.5">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex mt-10 sm:inline">
        <div className=" lg:w-5/12 lg:p-8 lg:pr-32 font-semibold sm:w-screen sm:p-12 mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
            tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
            rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
            nam quis non at bibendum nulla nulla
          </p>
        </div>
        <div className="w-7/12 p-6 h-auto sm:text-xs xl:text-sm">
          {list1.map((obj, index) => {
            return (
              <ExtraInfoSection
                key={index}
                title={obj.title}
                body={obj.body}
                isOpen={index === 0}
              />
            );
          })}
        </div>
      </div>
      <div className="m-8">
        <p className={`${firaSans.className} text-3xl mt-10 font-bold`}>
          Most Popular
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="m-8">
        <p className={`${firaSans.className} text-3xl mt-8 font-bold`}>
          Repeat Orders
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="m-8 text-sm">
        <p className={`${firaSans.className} text-3xl mt-16 font-bold`}>
          Customer Reviews
        </p>
        <div className="flex justify-between">
          <div className="flex mt-8 ">
            <p className={`${firaSans.className} text-5xl font-bold mt-2`}>
              4.9
            </p>
            <Rating count={5} value={5} className="m-2 mt-auto" />
            <p className="m-2 mt-auto">Based on 1611 3 reviews</p>
          </div>

          <button
            type="submit"
            className="  h-10 text-white font-medium px-5  text-center bg-neutral-800 focus:ring-4 mt-auto "
          >
            Write A Review
          </button>
        </div>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
