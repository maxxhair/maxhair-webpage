import React from "react";
import { firaSans } from "../util/fonts";
import ProductCard from "../Components/ProductCard";
import filtericon from "/public/filter.svg";
import Image from "next/image";
import {
  CategorySelect,
  ProductSelect,
  TextureSelect
} from "../Components/SelectInputs";

const Shop = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <section className="mt-52 w-4/5 mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <p className="label-medium lg:label-large cursor-pointer font-bold">
          Home
        </p>
        <span>-</span>
        <p className="label-medium lg:label-large">Shop</p>
      </div>
      <h1 className={`${firaSans.className} headline-medium`}>All Products</h1>
      <p className="label-large w-3/4">
        Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
        tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis rhoncus
        bibendum aliquam montes magna blandit lobortis quis. Eget nam quis non
        at bibendum nulla nulla.
      </p>
      <div className="w-full flex justify-between my-7 relative">
        <div className="w-[35%] sticky top-28 h-[50vh]">
          <div className="flex items-center gap-2 my-4">
            <Image src={filtericon} alt="filter" />
            <p className="label-medium font-bold">Filter</p>
          </div>
          <div className="bg-slate-200 h-[40vh] w-full flex flex-col gap-6 justify-center">
            <CategorySelect />
            <ProductSelect />
            <TextureSelect />
          </div>
        </div>
        <div className="w-[60%]">
          <div className="w-full flex items-center justify-end gap-3 my-4">
            <p className="label-small">512 items</p>
            <p className="label-small">Sort by</p>
            <select className="h-auto bg-transparent focus:outline-none active:outline-none">
              <option value="Bestseller">Best Seller</option>
              <option value="Newest">Newest</option>
            </select>
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-y-12">
            {arr.map((index: number) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
