"use client";

import Image from "next/image";
import React, { useState } from "react";
import { closeIcon, prodimg } from "../util/images";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { removeFromWishList } from "../store/redux/wishlistSlice";
import { ProductStoreType } from "../types";
import { addProduct, setOpenCart } from "../store/redux/cartSlice";

interface Props {
  wishListItem: {
    id: string;
    name: string;
    price: number;
    image: string;
    color: string;
    type: string;
    texture: string;
    size: number;
  };
}

const Wishlist: React.FC<Props> = ({ wishListItem }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [count, setCount] = useState<number>(1);

  const RemoveItemFromWishList = () => {
    dispatch(removeFromWishList(wishListItem.id));
  };

  const AddItemToCart = () => {
    const productToSave: ProductStoreType = {
      id: wishListItem.id,
      name: wishListItem.name,
      image: wishListItem.image,
      price: wishListItem.price,
      count: count,
      color: wishListItem.color,
      size: wishListItem.size as any,
      type: wishListItem.type,
      texture: wishListItem.texture
    };
    const productStore = {
      count: count,
      product: productToSave
    };
    dispatch(addProduct(productStore));
    dispatch(setOpenCart());
  };

  return (
    <div className="w-full p-3 xl:p-5 flex items-center  border-2 border-pink-200 mb-10">
      <Image
        src={wishListItem.image || prodimg}
        alt="cartProduct"
        width={115}
        height={180}
      />
      <div className="flex flex-col gap-10 xl:flex-row items-start xl:items-center justify-between pl-4">
        <div className="flex flex-row xl:flex-col gap-2 items-center ">
          <p className="xl:headline-small md:title-medium label-small xl:title-small flex xl:flex-row justify-center xl:text-center gap-2 flex-col flex-wrap">
            <span>
              {wishListItem.name} - {wishListItem.texture}
            </span>
          </p>
          <p className="xl:label-medium md:body-medium body-small">
            {wishListItem.type}
          </p>
          <div className="flex flex-row items-start xl:items-center gap-1 xl:gap-5">
            <p className="xl:label-small md:body-medium body-small text-gray-500">
              Size: {wishListItem.size}
            </p>
            <p className="xl:label-small md:body-medium body-small text-gray-500">
              Color: {wishListItem.color}
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3 xl:gap-6">
            <div
              className="grid place-items-center w-8 xl:w-10 aspect-square border border-gray-500 cursor-pointer text-3xl"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </div>
            <p className="label-medium">{count}</p>
            <div
              className="grid place-items-center w-8 xl:w-10 aspect-square border border-gray-500 cursor-pointer text-3xl"
              onClick={() => setCount(count + 1)}
            >
              +
            </div>
          </div>
          <p className="xl:label-medium md:body-medium body-small">
            ${(wishListItem.price * count).toFixed(2)}
          </p>
          <button
            className="bg-black py-3 px-4 xl:py-2 xl:px-7 text-sm xl:text-lg text-white"
            onClick={AddItemToCart}
          >
            ADD TO CART
          </button>
          <Image
            src={closeIcon}
            alt="close"
            className="cursor-pointer"
            onClick={RemoveItemFromWishList}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
