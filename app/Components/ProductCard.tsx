"use client";

import Image from "next/image";
import { prodimg } from "../util/images";
import React, { useState } from "react";
import { firaSans } from "../util/fonts";
import Link from "next/link";
import { Modal } from "flowbite-react";
import { useRouter } from "next/navigation";

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
  subProducts?: Product[];
}

interface Props {
  item: Product;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [openSubProducts, setOpenSubProducts] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl =
    item?.images && item?.images.length > 0
      ? `${baseUrl}/${item?.images[0]}`
      : prodimg;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (item.subProducts && item.subProducts.length > 1) {
      setOpenSubProducts(true);
    } else {
      router.push(`/${item._id}`);
    }
  };

  return (
    <>
      <div
        className="px-3 py-5 h-auto transition-all duration-300 bg-white  relative shadow-lg rounded-md cursor-pointer"
        onClick={handleClick}
      >
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
      <Modal
        show={openSubProducts}
        onClose={() => setOpenSubProducts(false)}
        dismissible
        size="md"
      >
        <Modal.Header>Sub Products</Modal.Header>
        <Modal.Body>
          <div className="relative w-full object-cover aspect-[3/4]">
            <Image
              src={imageUrl}
              alt="img-err"
              className="m-auto border-1 border-black"
              layout="fill"
            />
          </div>
          <div className="flex flex-col gap-4">
            {" "}
            <p
              className={`${firaSans.className} text-center text-xl font-semibold py-2`}
            >
              {item?.title}
            </p>
            <p>Select the Type</p>
            <div className="grid grid-cols-3 gap-3">
              {item?.subProducts?.map((subProduct: Product) => (
                <Link
                  href={`/${subProduct?._id}`}
                  key={subProduct._id}
                  className="py-2 px-4 border border-black hover:bg-[#a47252] transition-all duration-300"
                >
                  <p className="text-sm font-medium">{subProduct?.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ProductCard;
