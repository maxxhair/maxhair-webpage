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
      <div className="px-3 py-5 h-auto transition-all duration-300 bg-white hover:bg-[#e3d6c5] relative">
        <div className="relative xl:w-full aspect-[3/4]">
          <Image
            src={imageUrl}
            alt="img-err"
            className="m-auto border-1 border-black"
            layout="fill"
          />
        </div>
        <p
          className={`${firaSans.className} text-center text-xl font-semibold py-4`}
        >
          {item?.title}
        </p>
      </div>
    </Link>
  );
};
export default ProductCard;
