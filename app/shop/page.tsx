import React from "react";
import { firaSans } from "../util/fonts";
import ProductCard from "../Components/ProductCard";
import Link from "next/link";
import { getProducts } from "../util/serverSideProps";

const Shop = async () => {
  const prods = await getProducts();

  return (
    <section className="mt-28 lg:mt-52 w-full p-5 lg:p-0 lg:w-4/5 mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <p className="label-medium lg:label-large cursor-pointer font-bold">
          <Link href="/">Home</Link>
        </p>
        <span>-</span>
        <p className="label-medium lg:label-large">Shop</p>
      </div>
      <h1 className={`${firaSans.className} headline-medium`}>Products</h1>
      <p className="label-medium lg:label-large w-full lg:w-3/4 text-justify mt-5">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Maxx
        hair extensions, where we cater to a diverse range of needs with our
        extensive selection of high-quality virgin remy human hair products.
        Whether you’re looking for a quick DIY product or a long-term hair
        bundle that you want a stylist to install, we have something for
        everyone. Each product reflects our unwavering commitment to quality and
        value, ensuring you get the best-in-class functionality and style.
        Thereby enhancing your lifestyle and boosting your confidence. All our
        products are made with <b>100% virgin remy cuticle hair</b>. You can
        wash them, color them, style them to your liking. Explore our wide
        variety of offerings and experience the difference today!
      </p>
      <p className="font-semibold text-3xl mt-7">
        Once again, Quality is our priority!
      </p>
      <div className="w-full flex flex-col lg:flex-row justify-between my-7 relative">
        <div className="w-full ">
          <div className="w-full lg:mt-0 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 2xl:gap-16 md:gap-4 lg:gap-y-12 gap-5">
            {prods?.map((product: any) => (
              <ProductCard key={product._id} item={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
