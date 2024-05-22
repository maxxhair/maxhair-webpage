"use client";

import React, { useEffect, useState } from "react";
import { firaSans } from "../util/fonts";
import ProductCard from "../Components/ProductCard";
import filtericon from "/public/filter.svg";
import Image from "next/image";
import {
  CategorySelect,
  ColorsSelect,
  ProductSelect,
  SizesSelect,
  TextureSelect,
} from "../Components/SelectInputs";
import Link from "next/link";
import { getProducts } from "../util/serverSideProps";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mt-52 w-4/5 mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <p className="label-medium lg:label-large cursor-pointer font-bold">
          <Link href="/">Home</Link>
        </p>
        <span>-</span>
        <p className="label-medium lg:label-large">Shop</p>
      </div>
      <h1 className={`${firaSans.className} headline-medium`}>All Products</h1>
      <p className="label-medium lg:label-large w-full lg:w-3/4">
        Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
        tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis rhoncus
        bibendum aliquam montes magna blandit lobortis quis. Eget nam quis non
        at bibendum nulla nulla.
      </p>
      <div className="w-full flex flex-col lg:flex-row justify-between my-7 relative">
        <div className="w-full lg:w-[25%] static lg:sticky top-28 h-[50vh] lg:h-[80vh] 2xl:h-[70vh]">
          <div className="flex items-center gap-2 my-4">
            <Image src={filtericon} alt="filter" />
            <p className="label-medium font-bold">Filter</p>
          </div>
          <div className="bg-slate-200 h-[50vh] 2xl:h-[50vh] w-full flex flex-col gap-1 2xl:gap-6 justify-center">
            <CategorySelect />
            <ProductSelect />
            <TextureSelect />
            <ColorsSelect />
            <SizesSelect />
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <div className="w-full hidden lg:flex items-center justify-end gap-3 my-4">
            <p className="label-small">512 items</p>
            <p className="label-small">Sort by</p>
            <select className="h-auto bg-transparent focus:outline-none active:outline-none">
              <option value="Bestseller">Best Seller</option>
              <option value="Newest">Newest</option>
            </select>
          </div>
          <div className="w-full mt-40 lg:mt-0 grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-y-12">
            {products?.map((product: any) => (
              <ProductCard key={product._id} item={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
