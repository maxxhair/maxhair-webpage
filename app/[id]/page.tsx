"use client";

import Image from "next/image";
import {
  deliveryImg,
  logo,
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  productImage5,
  prodimg
} from "../util/images";
import React, { useEffect, useState } from "react";
import ExtraInfoSection from "../Components/ExtraInfoSection";
import { colorOpts, list1, textureOpts, typeOpts } from "../util/staticData";
import { getVariantsByProductId } from "../util/serverSideProps";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, setOpenCart } from "../store/redux/cartSlice";
import { useParams } from "next/navigation";
import { ProductStoreType } from "../types";
import { AppDispatch, RootState } from "../store";
import axiosInstance from "../util/axiosInstance";
import StockCard from "../Components/StockCard";
import {
  addToWishList,
  removeFromWishList
} from "../store/redux/wishlistSlice";
import MostPopular from "../Components/MostPopular";
import RepeatOrders from "../Components/RepeatOrders";
import CustomerReviews from "../Components/CustomerReviews";
import ProductImageSwiper from "../Components/ProductImageSwiper";
import { Spinner, TextInput } from "flowbite-react";
import axios from "axios";

export default function Page() {
  const { id } = useParams();
  const wishList = useSelector(
    (state: RootState) => state.wishlist.wishListItems
  );
  const dispatch = useDispatch<AppDispatch>();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [variants, setVariants] = useState([]);
  const [filteredVariant, setFilteredVariant] = useState(null);
  const [selectedQuantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}products`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (id) {
      const fetchProductVariants = async () => {
        try {
          setLoading(true);
          const data = await getVariantsByProductId(id as string);
          setVariants(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProductVariants();
    }
  }, [id]);

  useEffect(() => {
    if (variants) {
      setSize(variants[0]?.size?.size);
      setColor(variants[0]?.color?.color);
      setType(variants[0]?.type ? variants[0]?.type?.title : "Single drawn");
      setTexture(variants[0]?.texture?.title ?? "straight");
    }
  }, [id, variants]);

  const [selectedSize, setSize] = useState(variants[0]?.size?.size || null);
  const [selectedColor, setColor] = useState(variants[0]?.color?.color || null);
  const [selectedType, setType] = useState(
    variants[0]?.type ? variants[0]?.type?.title : "Single drawn"
  );
  const [selectedTexture, setTexture] = useState(
    variants[0]?.texture?.title || null
  );

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const productImage =
    variants[0]?.product?.images && variants[0].product?.images.length > 0
      ? `${baseUrl}/${variants[0].product?.images[0]}`
      : prodimg;

  const add = () => {
    const productToSave: ProductStoreType = {
      id: filteredVariant && filteredVariant[0]._id,
      name: variants[0].product.title,
      image: productImage as string,
      price:
        filteredVariant && filteredVariant[0]?.price
          ? filteredVariant[0].price
          : variants[0].price,
      count: selectedQuantity,
      color: selectedColor,
      size: selectedSize as any,
      type: selectedType,
      texture: selectedTexture,
      remark: dualTexture
    };
    const productStore = {
      count: selectedQuantity,
      product: productToSave
    };
    dispatch(addProduct(productStore));
    dispatch(setOpenCart());
  };

  const getFilteredVariant = () => {
    if (
      selectedSize !== null &&
      selectedColor !== null &&
      selectedTexture !== null &&
      selectedType !== null &&
      variants.length > 0
    ) {
      return variants.filter(
        (variant) =>
          variant.size.size === selectedSize &&
          variant.color.color ===
            (selectedColor === "Natural" ? "Natural" : "CustomColor") &&
          (variant.texture.title as string).toLowerCase().trim() ===
            (selectedTexture as string).toLowerCase().trim()
      );
    } else {
      return null;
    }
  };

  const [stockCount, setStockCount] = useState(0);
  const [dualTexture, setDualTexture] = useState<string>("");
  const [openTextBox, setOpenTextBox] = useState(false);

  useEffect(() => {
    if (filteredVariant && filteredVariant.length > 0) {
      const variant = filteredVariant[0];
      if (variant.color.color.toLowerCase().trim() === "customcolor") {
        const stock = variant.colorVariants.filter(
          (colorVariant: any) => colorVariant.title === selectedColor
        );
        setStockCount(
          stock.length > 0
            ? selectedType === "Single drawn"
              ? stock[0].stockSingleDrawn
              : stock[0].stockDoubleDrawn
            : undefined
        );
      } else {
        setStockCount(
          selectedType === "Single drawn"
            ? variant.stockSingleDrawn
            : variant.stockDoubleDrawn
        );
      }
    } else {
      setStockCount(undefined);
    }
  }, [filteredVariant, selectedColor]);

  useEffect(() => {
    const newFilteredVariant = getFilteredVariant();
    setFilteredVariant(newFilteredVariant);
  }, [selectedSize, selectedColor, selectedType, selectedTexture]);

  const isItemInWishList = (id: string) => {
    return wishList.some((item) => item.id === id);
  };

  const handleWishlistToggle = () => {
    const productToAdd: ProductStoreType = {
      id: filteredVariant && filteredVariant[0]._id,
      name: variants[0].product.title,
      image: productImage as string,
      price:
        filteredVariant && filteredVariant[0]?.price
          ? filteredVariant[0].price
          : variants[0].price,
      count: selectedQuantity,
      color: selectedColor,
      size: selectedSize as any,
      type: selectedType,
      texture: selectedTexture,
      remark: dualTexture
    };

    if (isItemInWishList(filteredVariant && filteredVariant[0]?._id)) {
      dispatch(removeFromWishList(filteredVariant && filteredVariant[0]?._id));
    } else {
      dispatch(addToWishList(productToAdd));
    }
  };

  useEffect(() => {
    if (selectedTexture === "Dual Texture") {
      setOpenTextBox(true);
    } else {
      setOpenTextBox(false);
      setDualTexture("");
    }
  }, [textureOpts, selectedTexture]);

  if (loading) {
    return (
      <div className="w-full h-screen grid place-items-center">
        <Spinner />
      </div>
    );
  }

  return (
    variants && (
      <div
        className={` bg-white text-black mt-20 2xl:w-4/5 2xl:m-auto 2xl:mt-20`}
      >
        <div className="md:flex flex-row inline">
          <div className=" block md:hidden m-4  w-3/5 mx-auto">
            <ProductImageSwiper mainImage={productImage1} />
          </div>
          <div className="hidden md:block md:w-1/2 p-8 sm:m-auto xl:m-0 sm:w-3/5">
            <Image
              src={productImage}
              alt="product-image-error-0"
              width={500}
              height={500}
            />
            <div className="w-full flex">
              <Image
                src={productImage1}
                alt="product-image-error-1"
                className="w-1/2"
              />
              <Image
                src={productImage2}
                alt="product-image-error-2"
                className="w-1/2"
              />
            </div>
            <Image src={productImage3} alt="product-image-error-3" />
            <Image src={productImage4} alt="product-image-error-4" />
            <Image src={productImage5} alt="product-image-error-5" />
          </div>

          <div className="md:w-1/2 m-4 lg:p-16 lg:pl-8 text-xs xl:text-sm xl:m-0">
            <StockCard
              image={productImage}
              name={variants[0]?.product?.title}
              stock={stockCount}
            />
            <p className="text-sm font-semibold mt-5">Select Size</p>
            <div className="mt-2">
              {[
                ...new Set(
                  variants.map((variant) => parseInt(variant.size.size, 10))
                )
              ]
                .sort(function (a, b) {
                  return a - b;
                })
                .map((size) => (
                  <button
                    onClick={() => setSize(size)}
                    className={`m-1.5  xl:h-10 text-center xl:p-2.5 xl:text-sm border border-neutral-200 rounded  p-1 ${
                      selectedSize === size
                        ? "!bg-[#E3D6C5] text-[#A47252]"
                        : "bg-neutral-100"
                    }`}
                    key={size}
                  >
                    {size}
                  </button>
                ))}
            </div>
            <p className="text-sm font-semibold mt-4">Color</p>
            <div className="mt-2">
              {colorOpts?.map((color) => (
                <button
                  onClick={() => setColor(color)}
                  className={`m-1.5 xl:pl-6 xl:pr-6 xl:h-10 text-center xl:p-2.5 xl:text-sm border border-neutral-200 rounded pl-2.5 pr-2.5 p-1  ${
                    selectedColor === color
                      ? "bg-[#E3D6C5] text-[#A47252]"
                      : "bg-neutral-100"
                  }`}
                  key={color}
                >
                  {color}
                </button>
              ))}
            </div>
            <p className="text-sm font-semibold mt-4">Type</p>
            <div className="mt-2">
              {typeOpts?.map((type) => (
                <button
                  onClick={() => setType(type)}
                  className={`m-1.5 xl:pl-6 xl:pr-6 xl:h-10 text-center xl:p-2.5 xl:text-sm border border-neutral-200 rounded pl-2.5 pr-2.5 p-1 ${
                    selectedType === type
                      ? "bg-[#E3D6C5] text-[#A47252]"
                      : "bg-neutral-100"
                  }`}
                  key={type}
                >
                  {type}
                </button>
              ))}
            </div>
            <p className="text-sm font-semibold mt-4">Texture</p>
            <div className="mt-2">
              {textureOpts?.map((texture) => (
                <button
                  onClick={() => setTexture(texture)}
                  className={`m-1.5 xl:pl-6 xl:pr-6 xl:h-10 text-center xl:p-2.5 xl:text-sm border border-neutral-200 rounded pl-2.5 pr-2.5 p-1 ${
                    selectedTexture === texture
                      ? "bg-[#E3D6C5] text-[#A47252]"
                      : "bg-neutral-100"
                  }`}
                  key={texture}
                >
                  {texture}
                </button>
              ))}
            </div>
            {openTextBox && (
              <div className="w-1/2 my-3">
                <p className="label-small md:label-medium pb-2">
                  Mention the combination of the textures here:
                </p>
                <TextInput
                  type="text"
                  onChange={(e) => setDualTexture(e.target.value)}
                  className="no-outline:focus"
                />
              </div>
            )}
            <div className="flex space-x-3 mt-4">
              <Image src={deliveryImg} alt="img-err" />
              <p className="mt-1 label-small lg:label-medium">
                Free Delivery & Easy Returns
              </p>
            </div>
            <div className="py-4">
              {stockCount === 0 ? (
                <p className="label-small lg:label-medium text-red-600">
                  Stock unavailable! Don't worry, you can still place an order.
                </p>
              ) : (
                <p className="label-small lg:label-medium text-green-900">
                  Hurry Up..! only {stockCount} is left
                </p>
              )}
            </div>
            <div className="sm:review-card">
              {(selectedSize === null ||
                selectedColor === null ||
                selectedTexture === null ||
                selectedType === null) && (
                <div className="text-[#f00a]">
                  Please select your required variant to add to cart
                </div>
              )}
              <div className="flex lg:flex-row flex-col">
                <div className="flex items-center gap-6 m-3 justify-between">
                  <div className="flex items-center gap-6">
                    {" "}
                    <div
                      className="grid place-items-center w-10 aspect-square border border-gray-500 cursor-pointer text-3xl"
                      onClick={() => setQuantity(selectedQuantity - 1)}
                    >
                      -
                    </div>
                    <p className="label-medium">{selectedQuantity}</p>
                    <div
                      className="grid place-items-center w-10 aspect-square border border-gray-500 cursor-pointer text-3xl"
                      onClick={() => setQuantity(selectedQuantity + 1)}
                    >
                      +
                    </div>
                  </div>
                  <div>
                    <label className="container">
                      <input
                        type="checkbox"
                        onChange={handleWishlistToggle}
                        checked={isItemInWishList(
                          filteredVariant && filteredVariant[0]?._id
                        )}
                      />
                      <svg
                        id="Layer_1"
                        viewBox="0 0 26 26"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z" />
                      </svg>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="h-12 w-full text-white font-medium xl:text-sm px-5 text-xs text-center bg-neutral-800 focus:ring-4 mt-3 "
                  onClick={() => add()}
                >
                  ADD TO CART (${" "}
                  {filteredVariant && filteredVariant[0]?.price
                    ? filteredVariant[0].price
                    : variants[0]?.price}{" "}
                  )
                </button>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col mt-4 border  border-neutral-200 rounded">
              <Image src={logo} alt="img-err" className="m-3 w-16" />
              <p className="text-sm p-5 font-semibold">
                Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
                tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
                rhoncus bibendum aliquam montes magna blandit lobortis quis.
                Eget nam quis non at bibendum nulla nulla
              </p>
            </div>
            <p className=" text-lg font-semibold mt-4">Description</p>
            <div className="mt-3 ">
              <p>
                Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
                tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
                rhoncus bibendum aliquam montes magna blandit lobortis quis.
                Eget nam quis non at bibendum nulla nulla
              </p>

              <p className="mt-1.5">
                Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
                tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
                rhoncus bibendum aliquam montes magna blandit lobortis quis.
                Eget nam quis non at bibendum nulla nulla
              </p>

              <p className="mt-1.5">
                Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
                tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
                rhoncus bibendum aliquam montes magna blandit lobortis quis.
                Eget nam quis non at bibendum nulla nulla
              </p>

              <p className="mt-1.5">
                Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
                tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
                rhoncus bibendum aliquam montes magna blandit lobortis quis.
                Eget nam quis non at bibendum nulla nulla
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-col lg:flex-row mt-10 inline">
          <div className="lg:w-5/12 lg:p-8 font-semibold mt-8 max-xl:m-8">
            <p>
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>
          </div>
          <div className="md:w-7/12 p-6 h-auto text-xs xl:text-sm">
            {list1.map((obj, index) => {
              return (
                <ExtraInfoSection
                  key={index}
                  title={obj.title}
                  body={obj.body}
                  isOpen={index === 0}
                />
              );
            })}
          </div>
        </div>
        <MostPopular prods={products} />
        <RepeatOrders prods={products} />
        <CustomerReviews />
      </div>
    )
  );
}
