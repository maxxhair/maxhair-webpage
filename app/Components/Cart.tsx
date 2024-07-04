import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  addCouponCode,
  addDiscount,
  removeCouponCode
} from "../store/redux/cartSlice";
import axios from "axios";
import { baseUrl } from "../util/axiosInstance";
import { isEmpty } from "lodash";
import Image from "next/image";
import { closeIcon } from "../util/images";

interface Props {
  handleClose: () => void;
}

const Cart: React.FC<Props> = ({ handleClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const couponCode = useSelector((state: RootState) => state.cart.couponCode);
  const discountPercentage = useSelector(
    (state: RootState) => state.cart.discountPercentage
  );

  const dispatch = useDispatch<AppDispatch>();
  const [couponcodemsg, setCouponCodeMsg] = useState("");
  const [couponCodeApplied, setCouponCodeApplied] = useState<boolean>(false);

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems?.length > 0) {
      cartItems?.map((item) =>
        (totalPrice += item?.price * item?.count).toFixed(2)
      );
    }
    return totalPrice;
  });

  const discount = parseInt(
    ((discountPercentage / 100) * priceTotal).toFixed(2)
  );

  const handleCouponCodeChange = (e: any) => {
    dispatch(addCouponCode(e.target.value));
  };

  const successCallback = () => {};
  const errorCallback = (error: string) => {
    console.log(error);
  };
  const input = {
    successCallback,
    errorCallback,
    value: {}
  };

  useEffect(() => {
    if (cartItems?.length < 1) {
      dispatch(removeCouponCode());
      dispatch(addDiscount(0));
      setCouponCodeMsg("");
      return;
    }
  }, [cartItems]);

  const today = new Date();
  const EstimatedDeliveryDate = new Date(
    today.getTime() + 4 * 24 * 60 * 60 * 1000
  ).toDateString();

  useEffect(() => {
    if (couponCode.length !== 6) {
      dispatch(addDiscount(0));
      setCouponCodeMsg("");
    }
  }, [couponCode]);

  const VerifyCouponCode = async () => {
    try {
      if (!couponCode && couponCode.length !== 6) {
        dispatch(addDiscount(0));
        setCouponCodeMsg("");
        return;
      }
      const response = await axios.get(`${baseUrl}coupons/${couponCode}`);
      if (!isEmpty(response.data)) {
        dispatch(addDiscount(response.data[0].discount));
        setCouponCodeMsg(`${response.data[0].discount}% discount is applied`);
        setCouponCodeApplied(true);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setCouponCodeMsg("Coupon does not exist");
        dispatch(addDiscount(0));
        setCouponCodeApplied(false);
      }
    }
  };

  const handleRemoveCoupon = () => {
    dispatch(removeCouponCode());
    dispatch(addDiscount(0));
    setCouponCodeMsg("");
  };

  return (
    <>
      {cartItems?.length > 0 ? (
        <div className="w-full">
          {cartItems &&
            cartItems?.map((item: any, index) => (
              <CartItem key={index} product={item} />
            ))}
          <div className="w-full flex items-center gap-3 lg:gap-6 justify-between">
            <div className="relative w-full">
              <input
                placeholder="Discount code or gift card"
                type="text"
                className="w-full bg-white outline-none py-3 px-2 rounded-lg relative"
                value={couponCode?.toUpperCase()}
                onChange={handleCouponCodeChange}
              />
              <Image
                src={closeIcon}
                alt="close"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                onClick={handleRemoveCoupon}
              />
            </div>
            <button
              className="bg-transparent px-6 py-3 border border-black rounded-lg"
              // onClick={handleApplyCouponCode}
              onClick={VerifyCouponCode}
            >
              Apply
            </button>
          </div>
          {couponcodemsg && (
            <p
              className={
                couponCodeApplied
                  ? `text-md text-green-500`
                  : `text-md text-red-500`
              }
            >
              {couponcodemsg}
            </p>
          )}
          <div className="">
            <div className="py-5 border-b border-gray-500 flex flex-col gap-2">
              <div className="w-full flex items-center justify-between">
                <p className="label-medium text-gray-500 font-medium">Amount</p>
                <p className="label-medium font-medium">
                  ${priceTotal.toFixed(2)}
                </p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="label-medium text-gray-500 font-medium">
                  Discount
                </p>
                <p className="label-medium font-medium">${discount}</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="label-medium text-gray-500 font-medium">
                  Shipping
                </p>
                <p className="label-medium font-medium">Free</p>
              </div>
            </div>
            <div className="py-5 flex flex-col gap-2">
              <div className="w-full flex items-center justify-between">
                <p className="label-medium text-gray-500 font-medium">TOTAL</p>
                <p className="label-medium font-medium">
                  ${(priceTotal - discount).toFixed(2)}
                </p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="label-medium text-gray-500 font-medium">
                  Estimated Delivery Date
                </p>
                <p className="label-medium font-medium">
                  {EstimatedDeliveryDate}
                </p>
              </div>
            </div>
          </div>
          <Link href="/checkout">
            <button
              className="w-full bg-black text-white py-4 uppercase title-small tracking-widest font-semibold mb-60"
              onClick={handleClose}
            >
              Checkout
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-full h-full grid place-items-center">
          <p className="headline-medium">Empty Cart</p>
        </div>
      )}
    </>
  );
};

export default Cart;
