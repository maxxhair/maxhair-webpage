import Image from "next/image";
import { Fira_Sans, Prompt } from "next/font/google";
import ReviewCard from "../Components/ReviewCard";
import ProductCard from "../Components/ProductCard";
import { plus, deliveryImg, productImage, logo } from "../util/images";
import React from "react";

const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"]
});

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export default function Page() {
  return (
    <div className={`${prompt.className} bg-white text-black `}>
      <div className="flex flex-row">
        <div className=" w-6/12 p-8">
          <Image src={productImage} alt="img-error" />
        </div>
        <div className="w-6/12 p-8">
          <p className="text-sm font-semibold">HomeBulk Hair</p>
          <p className="text-sm font-semibold mt-5">Select Size</p>
          <div className=" space-x-4 flex mt-3">
            <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              16
            </button>
            <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              18
            </button>
            <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              20
            </button>
            <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              22
            </button>
            <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              24
            </button>
            <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              26
            </button>
            <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              28
            </button>
            <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              30
            </button>
            <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              32
            </button>
          </div>
          <p className="text-sm font-semibold mt-4">Color</p>
          <div className="space-x-4 flex mt-3">
            <button className=" w-32 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              Natural
            </button>
            <button className=" w-32 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              #P4/22
            </button>
            <button className=" w-32 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              #613
            </button>
            <button className=" w-32 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              #24
            </button>
          </div>
          <p className="text-sm font-semibold mt-4">Type</p>
          <div className="space-x-4 flex mt-3">
            <button className=" w-32 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              Single Drawn
            </button>
          </div>
          <p className="text-sm font-semibold mt-4">Texture</p>
          <div className="space-x-4 flex mt-3">
            <button className=" w-40 h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              Straight/Wavy
            </button>
            <button className=" pl-8 pr-8 w-auto h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              Straight
            </button>
            <button className=" pl-8 pr-8 w-auto h-10 bg-neutral-100 text-center p-2.5 text-sm border border-neutral-200 rounded">
              Jackson
            </button>
          </div>
          <div className="flex space-x-3 mt-4">
            <Image src={deliveryImg} alt="img-err" />
            <p>Free Delivery & Easy Returns</p>
          </div>
          <button
            type="submit"
            className=" w-11/12 text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-800 focus:ring-4 mt-8 "
          >
            ADD TO CART ( $258 )
          </button>
          <div className="flex mt-4 border  border-neutral-200 rounded w-11/12">
            <Image src={logo} alt="img-err" className="m-3 w-16" />
            <p className="text-sm p-5 font-semibold">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>
          </div>
          <p className=" text-lg font-semibold mt-4">Description</p>
          <div className="mt-3 w-11/12 text-sm">
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
      <div className="flex mt-10">
        <div className=" w-5/12 p-8 pr-32 font-semibold ">
          <p>
            Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
            tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
            rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
            nam quis non at bibendum nulla nulla
          </p>
        </div>
        <div className="w-7/12 h-auto ">
          <div className="flex ml-12 border-b-2 mr-10 h-9">
            <p>Features</p>
            <Image
              src={plus}
              alt="img-err"
              className=" w-3 right-0 absolute mr-12"
            />
          </div>
          <div className="flex ml-12 border-b-2 mr-10 h-9 mt-4">
            <p>Benefits</p>
            <Image
              src={plus}
              alt="img-err"
              className=" w-3 right-0 absolute mr-12"
            />
          </div>
          <div className="flex ml-12 border-b-2 mr-10 h-9 mt-4">
            <p>Materials & Technology</p>
            <Image
              src={plus}
              alt="img-err"
              className=" w-3 right-0 absolute mr-12"
            />
          </div>
          <div className="flex ml-12 border-b-2 mr-10 h-9 mt-4">
            <p>Delivery & Returns</p>
            <Image
              src={plus}
              alt="img-err"
              className=" w-3 right-0 absolute mr-12"
            />
          </div>
          <div className="flex ml-12 border-b-2 mr-10 h-9 mt-4">
            <p>Maxx Hair Performance Guarantee</p>
            <Image
              src={plus}
              alt="img-err"
              className=" w-3 right-0 absolute mr-12"
            />
          </div>
        </div>
      </div>
      <div>
        <p className={`${firaSans.className} text-3xl mt-20 ml-8 font-bold`}>
          Most Popular
        </p>
        <div className="flex space-x-3  ml-10 mt-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div>
        <p className={`${firaSans.className} text-3xl mt-16 ml-8 font-bold`}>
          Repeat Orders
        </p>
        <div className="flex space-x-3  ml-10 mt-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="mt-16 ml-8 mr-8">
        <p className={`${firaSans.className} text-3xl  font-bold`}>
          Customer Reviews
        </p>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
