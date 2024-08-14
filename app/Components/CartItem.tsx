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
    remark: string;
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
        remark: product?.remark,
      })
    );
  };

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl = `${baseUrl}/${product?.image}`;

  return (
    <div className="my-3 w-full h-auto bg-white lg:p-6 md:p-4 p-1 flex lg:flex-row flex-col md:items-center justify-between">
      <div className="flex gap-4 p-4 w-full">
        <Image src={productImage} alt="cartProduct" width={100} height={150} />
        <div className="flex flex-col gap-0.5 w-full items-start">
          <p className="lg:headline-small md:title-small label-medium flex items-start md:flex-row justify-center text-center flex-col flex-wrap">
            <span>{product?.name}</span>
            <span className="lg:block hidden">-</span>
            <span>{product?.texture}</span>
          </p>
          {product?.remark?.length > 0 && (
            <p className="label-small">({product.remark})</p>
          )}
          <p className="lg:label-medium md:body-medium body-small">
            {product?.type}
          </p>
          <div className="flex flex-col items-start md:flex-row md:items-center gap-2 md:gap-5">
            <p className="lg:label-small md:body-medium body-small text-gray-500">
              Size: {product?.size}
            </p>
            <p className="lg:label-small md:body-medium body-small text-gray-500">
              Color: {product?.color}
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-5 lg:gap-6">
            <div
              className="grid place-items-center w-8 md:w-10 aspect-square border border-gray-500 cursor-pointer text-lg md:text-3xl"
              onClick={() => setProductCount(product?.count - 1)}
            >
              -
            </div>
            <p className="label-medium">{product?.count}</p>
            <div
              className="grid place-items-center w-8 md:w-10 aspect-square border border-gray-500 cursor-pointer text-lg md:text-3xl"
              onClick={() => setProductCount(product?.count + 1)}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-col lg:gap-16 lg:w-auto w-full items-center h-full justify-between lg:border-t-0 border-t-2 p-2">
        <p className="label-medium md:label-large">
          ${(product?.price * product?.count).toFixed(2)}
        </p>
        <p
          className="label-small md:label-medium underline cursor-pointer"
          onClick={() => removeFromCart()}
        >
          Remove
        </p>
      </div>
    </div>
  );
};

export default CartItem;
