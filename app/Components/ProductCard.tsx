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
  product: {
    title: string;
    images: [];
    category: {
      _id: string;
      title: string;
    };
  };
  type: {
    _id: string;
    title: string;
  };
  texture: {
    _id: string;
    title: string;
  };
  color: {
    _id: string;
    color: string;
  };
  size: {
    _id: string;
    size: number;
  };
}

interface Props {
  item: Product;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  const imageUrl =
    item.product.images && item.product.images.length > 0
      ? item.product.images[0]
      : prodimg;

  return (
    <Link href={`/${item._id}/product`}>
      <div
        className="prodcard pt-8 h-auto transition-colors duration-300 hover:bg-[#e3d6c5] relative"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <Image
          src={imageUrl}
          alt="img-err"
          className="m-auto"
          width={120}
          height={160}
        />
        <p className="text-center text-zinc-500 text-sm">{item.color.color}</p>
        <p
          className={`${firaSans.className} align-middle justify-center flex text-xl font-semibold`}
        >
          {item.product.title}
        </p>
        <p className="align-middle justify-center flex font-semibold ">
          ${item.price}
        </p>

        <div className="flex justify-between  text-sm px-3">
          <p>{item.product.category.title}</p>
          <p>{item.type.title}</p>
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
