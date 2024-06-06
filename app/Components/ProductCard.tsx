"use client";

import Image from "next/image";
import { prodimg } from "../util/images";
import React, { useState } from "react";
import { firaSans } from "../util/fonts";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  category: {
    _id: string;
    title: string;
  };
  cheapestVariant: {
    _id: string;
    price: number;
  };
  images: string[];
}

interface Props {
  item: Product;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl =
    item?.images && item?.images.length > 0
      ? `${baseUrl}/${item?.images[0]}`
      : prodimg;

  return (
    <Link href={`/${item._id}`} title={item?.title}>
      <div
        className="p-2 h-auto transition-all duration-300 bg-white hover:bg-[#e3d6c5] relative"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <Image
          src={imageUrl}
          alt="img-err"
          className="m-auto border-1 border-black"
          width={140}
          height={200}
        />
        <p
          className={`${firaSans.className} text-center text-xl font-semibold pb-1 truncate`}
        >
          {item?.title}
        </p>
        <p className="align-middle justify-center flex font-semibold pb-1">
          ${item?.cheapestVariant?.price}
        </p>

        <p className="flex justify-center text-center w-full text-sm px-3">
          {item.category?.title}
        </p>
        <button
          className={`w-full h-10 bg-[#242424] grid place-items-center text-white ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          VIEW PRODUCT
        </button>
      </div>
    </Link>
  );
};
export default ProductCard;
