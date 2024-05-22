import Image from "next/image";
import React from "react";
import { productImage } from "../util/images";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { removeProduct, setCount } from "../store/redux/cartSlice";

interface Props {
  product: {
    id: string;
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
  const dispatch = useDispatch<AppDispatch>();

  const setProductCount = (count: number) => {
    if (count <= 0) {
      return;
    }
    const payload = {
      product: {
        id: product?.id,
        name: product?.name,
        image: product?.image,
        price: product?.price,
        count: product?.count,
        color: product?.color,
        size: product?.size,
        type: product?.type,
        texture: product?.texture,
      },
      count: count,
    };
    dispatch(setCount(payload as any));
  };

  const removeFromCart = () => {
    dispatch(
      removeProduct({
        id: product?.id,
        name: product?.name,
        image: product?.image,
        price: product?.price,
        count: product?.count,
        color: product?.color,
        size: product?.size as any,
        type: product?.type,
        texture: product?.texture,
      })
    );
  };

  return (
    <div className="my-5 w-full h-48 bg-white p-6 flex justify-between">
      <div className="flex gap-4">
        <Image
          src={product?.image}
          alt="cartProduct"
          width={115}
          height={180}
        />
        <div className="flex flex-col gap-2">
          <p className="headline-small">
            {product?.name} - {product?.texture}
          </p>
          <p className="label-medium">{product?.type}</p>
          <div className="flex items-center gap-5">
            <p className="label-small text-gray-500">Size: {product?.size}</p>
            <p className="label-small text-gray-500">Color: {product?.color}</p>
          </div>
          <div className="flex items-center gap-6">
            <div
              className="grid place-items-center w-10 aspect-square border border-gray-500 cursor-pointer text-3xl"
              onClick={() => setProductCount(product?.count - 1)}
            >
              -
            </div>
            <p className="label-medium">{product?.count}</p>
            <div
              className="grid place-items-center w-10 aspect-square border border-gray-500 cursor-pointer text-3xl"
              onClick={() => setProductCount(product?.count + 1)}
            >
              +
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between">
          <p className="label-large">${product?.price * product?.count}</p>
          <p className="label-medium underline cursor-pointer">Remove</p>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <p className="label-large">${product?.price * product?.count}</p>
        <p
          className="label-medium underline cursor-pointer"
          onClick={() => removeFromCart()}
        >
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartItem;
