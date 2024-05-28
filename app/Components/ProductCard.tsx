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
    <Link href={`/${item._id}`}>
      <div
        className=" pt-8 h-auto transition-colors duration-300 hover:bg-[#e3d6c5] relative"
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
          className={`${firaSans.className} align-middle justify-center flex text-xl font-semibold pb-1`}
        >
          {item?.title}
        </p>
        <p className="align-middle justify-center flex font-semibold pb-1">
          ${item?.cheapestVariant?.price}
        </p>

        <div className="flex justify-between  text-sm px-3">
          <p>{item.category?.title}</p>
        </div>
        {hovered && (
          <button className="w-full h-10 bg-[#242424] grid place-items-center text-white mt-4 absolute left-0 -bottom-10 pb-1">
            VIEW PRODUCT
          </button>
        )}
      </div>
    </Link>
  );
};
export default ProductCard;
