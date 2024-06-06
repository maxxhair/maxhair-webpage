"use client";

import React, { useEffect, useState } from "react";
import { firaSans } from "../util/fonts";
import ProductCard from "../Components/ProductCard";
import Link from "next/link";
import { getProducts } from "../util/serverSideProps";
import { Spinner } from "flowbite-react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen grid place-items-center">
        <div className="">
          <Spinner aria-label="Default status example" />
        </div>
      </div>
    );
  }

  return (
    <section className="mt-28 lg:mt-52 w-full p-5 lg:p-0 lg:w-4/5 mx-auto">
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
        <div className="w-full ">
          <div className="w-full hidden lg:flex items-center justify-end gap-3 my-4">
            <p className="label-small">{products?.length} items</p>
            <p className="label-small">Sort by</p>
            <select className="h-auto bg-transparent focus:outline-none active:outline-none">
              <option value="Bestseller">Best Seller</option>
              <option value="Newest">Newest</option>
            </select>
          </div>
          <div className="w-full lg:mt-0 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 md:gap-4 lg:gap-y-12 gap-5">
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
