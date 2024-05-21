"use client";

import Image from "next/image";
import { prodimg } from "../util/images";
import React, { useState } from "react";
import { firaSans } from "../util/fonts";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  images: [];
  category: {
    _id: string;
    title: string;
  };
}

interface Props {
  item: Product;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="product" key={item._id}>
      <div
        className="prodcard pt-8 h-auto transition-colors duration-300 hover:bg-[#e3d6c5] relative"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <Image src={prodimg} alt="img-err" className=" m-auto" />
        <p className="text-center text-zinc-500 text-sm">Natural</p>
        <p
          className={`${firaSans.className} align-middle justify-center flex text-xl font-semibold`}
        >
          {item.title} | Curly
        </p>
        <p className="align-middle justify-center flex font-semibold ">$ 440</p>
        <div className="flex justify-between border-b-2 text-sm px-3">
          <p>{item.category.title}</p>
          <p>Double Drawn</p>
        </div>
        {hovered && (
          <button className="w-full h-10 bg-[#242424] grid place-items-center text-white mt-4 absolute left-0 -bottom-10">
            ADD TO CART
          </button>
        )}
      </div>
    </Link>
  );
};
export default ProductCard;
