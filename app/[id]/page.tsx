"use client";

import Image from "next/image";
import { Fira_Sans, Prompt } from "next/font/google";
import ReviewCard from "../Components/ReviewCard";
import ProductCard from "../Components/ProductCard";
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
import {
  colorOpts,
  list1,
  sizeOpts,
  textureOpts,
  typeOpts
} from "../util/staticData";
import Rating from "../Components/Rating";
import { getVariantsByProductId } from "../util/serverSideProps";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, setCount, setOpenCart } from "../store/redux/cartSlice";
import { useParams } from "next/navigation";
import { ProductStoreType } from "../types";
import { AppDispatch, RootState } from "../store";
import axiosInstance from "../util/axiosInstance";
import StockCard from "../Components/StockCard";
import {
  addToWishList,
  removeFromWishList
} from "../store/redux/wishlistSlice";

const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"]
});

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export default function Page() {
  const { id } = useParams();
  const wishList = useSelector(
    (state: RootState) => state.wishlist.wishListItems
  );
  const dispatch = useDispatch<AppDispatch>();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [variants, setVariants] = useState([]);
  const [filteredVariant, setFilteredVariant] = useState(null);

  const [selectedQuantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("products");
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
          const data = await getVariantsByProductId(id as string);
          setVariants(data);
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
      : "";

  const add = () => {
    const productToSave: ProductStoreType = {
      id: filteredVariant && filteredVariant[0]._id,
      name: variants[0].product.title,
      image: productImage,
      price:
        filteredVariant && filteredVariant[0]?.price
          ? filteredVariant[0].price
          : variants[0].price,
      count: selectedQuantity,
      color: selectedColor,
      size: selectedSize as any,
      type: selectedType,
      texture: selectedTexture
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

  const [stockCount, setStockCount] = useState();

  useEffect(() => {
    if (filteredVariant && filteredVariant.length > 0) {
      const variant = filteredVariant[0];
      if (variant.color.color.toLowerCase().trim() === "customcolor") {
        const stock = variant.colorVariants.filter(
          (colorVariant: any) => colorVariant.title === selectedColor
        );
        setStockCount(stock.length > 0 ? stock[0].stock : undefined);
      } else {
        setStockCount(variant.sku);
      }
    } else {
      setStockCount(undefined);
    }
  }, [filteredVariant, selectedColor]);

  useEffect(() => {
    const newFilteredVariant = getFilteredVariant();
    console.log(newFilteredVariant && newFilteredVariant[0]);
    setFilteredVariant(newFilteredVariant);
  }, [selectedSize, selectedColor, selectedType, selectedTexture]);

  const isItemInWishList = (id: string) => {
    return wishList.some((item) => item.id === id);
  };

  const handleWishlistToggle = () => {
    const productToAdd: ProductStoreType = {
      id: filteredVariant && filteredVariant[0]._id,
      name: variants[0].product.title,
      image: productImage,
      price:
        filteredVariant && filteredVariant[0]?.price
          ? filteredVariant[0].price
          : variants[0].price,
      count: selectedQuantity,
      color: selectedColor,
      size: selectedSize as any,
      type: selectedType,
      texture: selectedTexture
    };

    if (isItemInWishList(filteredVariant && filteredVariant[0]?._id)) {
      dispatch(removeFromWishList(filteredVariant && filteredVariant[0]?._id));
    } else {
      dispatch(addToWishList(productToAdd));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // console.log(filteredVariant && filteredVariant[0]?._id);

  return (
    variants && (
      <div
        className={`${prompt.className}  bg-white text-black mt-20 2xl:w-4/5 2xl:m-auto 2xl:mt-20`}
      >
        <div className="md:flex flex-row inline">
          <div className=" md:w-6/12 p-8 sm:m-auto xl:m-0 sm:w-3/5 ">
            <Image
              src={productImage}
              alt="product-image-error"
              width={500}
              height={500}
            />
            <div className="w-full flex">
              <Image
                src={productImage1}
                alt="product-image-error"
                className=" w-1/2"
              />
              <Image
                src={productImage2}
                alt="product-image-error"
                className=" w-1/2"
              />
            </div>
            <Image src={productImage3} alt="product-image-error" />
            <Image src={productImage4} alt="product-image-error" />
            <Image src={productImage5} alt="product-image-error" />
          </div>
          <div className="md:w-1/2 p-16 pl-8 sm:m-auto sm:text-xs xl:text-sm xl:m-0">
            {/* <p className="text-sm font-semibold ">
              Home -{variants[0]?.product?.title}
              <span className="font-normal text-sm">
                (only{" "}
                {filteredVariant && filteredVariant[0]?.sku
                  ? filteredVariant[0]?.sku
                  : variants[0]?.sku}
                &nbsp; left)
              </span>
            </p> */}
            <StockCard
              image={productImage}
              name={variants[0]?.product?.title}
              // stock={filteredVariant && filteredVariant[0]?.sku}
              stock={stockCount}
            />
            <p className="text-sm font-semibold mt-5">Select Size</p>
            <div className=" mt-2">
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
                    className={` w-10 h-10 m-1.5 bg-neutral-100 text-center p-2.5 xl:text-sm border border-neutral-200 rounded max-md:w-6 max-md:h-6 max-md:p-0.5 sm:text-xs ${
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
            <p className="text-sm font-semibold mt-4 ">Type</p>
            <div className=" mt-2">
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
            <div className="flex space-x-3 mt-4">
              <Image src={deliveryImg} alt="img-err" />
              <p className=" mt-1 ">Free Delivery & Easy Returns</p>
            </div>
            <div className="sm:review-card mt-8">
              {(selectedSize === null ||
                selectedColor === null ||
                selectedTexture === null ||
                selectedType === null) && (
                <div className="text-[#f00a]">
                  Please select your required variant to add to cart
                </div>
              )}
              <div className="flex ">
                <div className="flex items-center gap-6 m-3">
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
                {/* {filteredVariant && parseInt(filteredVariant[0]?.sku) > 0 ? ( */}

                <button
                  type="submit"
                  className="h-12 w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-800 focus:ring-4 mt-3 "
                  onClick={() => add()}
                >
                  ADD TO CART (${" "}
                  {filteredVariant && filteredVariant[0]?.price
                    ? filteredVariant[0].price
                    : variants[0]?.price}{" "}
                  )
                </button>
                {/* ) : (
                  <button
                    type="submit"
                    className="h-12 w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-800 focus:ring-4 mt-2 "
                  >
                    PLACE ORDER (${" "}
                    {filteredVariant && filteredVariant[0]?.price
                      ? filteredVariant[0].price
                      : variants[0]?.price}{" "}
                    )
                  </button>
                )} */}
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
            <div className="mt-3 text-sm">
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
        <div className="md:flex mt-10 sm:inline">
          <div className=" lg:w-5/12 lg:p-8  font-semibold m-8">
            <p>
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>
          </div>
          <div className="lg:w-7/12 p-6 h-auto sm:text-xs xl:text-sm">
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
        <div className="m-8">
          <p
            className={`${firaSans.className} text-xl lg:text-3xl mt-10 font-bold`}
          >
            Most Popular
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product: any) => (
              <ProductCard key={product._id} item={product} />
            ))}
          </div>
        </div>
        <div className="m-8">
          <p
            className={`${firaSans.className} text-xl lg:text-3xl mt-8 font-bold`}
          >
            Repeat Orders
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(5, 9).map((product: any) => (
              <ProductCard key={product._id} item={product} />
            ))}
          </div>
        </div>
        <div className="m-8 text-sm">
          <p
            className={`${firaSans.className} text-xl lg:text-3xl mt-16 font-bold`}
          >
            Customer Reviews
          </p>
          <div className="flex justify-between ">
            <div className="flex mt-8 ">
              <p
                className={`${firaSans.className} text-3xl lg:text-5xl font-bold mt-2`}
              >
                4.9
              </p>
              <Rating count={5} value={5} className="m-2 mt-auto" />
              <p className="m-2 mt-auto text-xs lg:text-sm">
                Based on 1611 3 reviews
              </p>
            </div>

            <button
              type="submit"
              className="  h-10 text-white font-medium px-5  text-center bg-neutral-800 focus:ring-4 mt-auto text-xs lg:text-sm "
            >
              Write A Review
            </button>
          </div>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    )
  );
}
