import Image from "next/image";
import React from "react";
import { productImage } from "../util/images";

interface Props {
  product: {
    name: string;
    price: number;
    count: number;
    size: number;
    texture: string;
    type: string;
    image: string;
    color: string;
  };
}

const CartItem: React.FC<Props> = ({ product }) => {
  return (
    <div className="my-5 w-full h-48 bg-white p-6 flex justify-between">
      <div className="flex gap-4">
        <Image src={product.image} alt="cartProduct" width={115} height={180} />
        <div className="flex flex-col gap-2">
          <p className="headline-small">
            {product.name} - {product.texture}
          </p>
          <p className="label-medium">{product.type}</p>
          <div className="flex items-center gap-5">
            <p className="label-small text-gray-500">Size: {product.size}</p>
            <p className="label-small text-gray-500">Color: {product.color}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="grid place-items-center w-10 aspect-square border border-gray-500 cursor-pointer text-3xl">
              -
            </div>
            <p className="label-medium">{product.count}</p>
            <div className="grid place-items-center w-10 aspect-square border border-gray-500 cursor-pointer text-3xl">
              +
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <p className="label-large">${product.price * product.count}</p>
        <p className="label-medium underline cursor-pointer">Remove</p>
      </div>
    </div>
  );
};

export default CartItem;
