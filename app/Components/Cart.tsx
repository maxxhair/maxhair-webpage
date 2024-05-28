import Image from "next/image";
import React, { useState } from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { addCouponCode, addDiscount } from "../store/redux/cartSlice";

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

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) =>
        (totalPrice += item?.price * item?.count).toFixed(2)
      );
    }

    return totalPrice;
  });

  const handleApplyCouponCode = () => {
    if (couponCode === "MAXX40") {
      dispatch(addDiscount(40));
      setCouponCodeMsg("40% discount is applied to total price");
    } else if (couponCode === "MAXX20") {
      dispatch(addDiscount(20));
      setCouponCodeMsg("20% discount is applied to total price");
    } else if (couponCode === "MAXX30") {
      dispatch(addDiscount(30));
      setCouponCodeMsg("30% discount is applied to total price");
    } else if (couponCode === "MAXX50") {
      dispatch(addDiscount(50));
      setCouponCodeMsg("50% discount is applied to total price");
    } else {
      dispatch(addDiscount(0));
      setCouponCodeMsg("Invalid Coupon Code");
    }
  };

  const discount = parseInt(
    ((discountPercentage / 100) * priceTotal).toFixed(2)
  );

  const handleCouponCodeChange = (e: any) => {
    dispatch(addCouponCode(e.target.value));
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="w-full">
          {cartItems.map((item: any, index) => (
            <CartItem key={index} product={item} />
          ))}
          <div className="w-full flex items-center gap-6 justify-between">
            <input
              placeholder="Discount code or gift card"
              type="text"
              className="w-full bg-white outline-none py-3 px-2 rounded-lg"
              value={couponCode?.toUpperCase()}
              onChange={handleCouponCodeChange}
            />
            <button
              className="bg-transparent px-6 py-3 border border-black rounded-lg"
              onClick={handleApplyCouponCode}
            >
              Apply
            </button>
          </div>
          {couponcodemsg && <p className="text-sm">{couponcodemsg}</p>}
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
                  Estimated Delivery by
                </p>
                <p className="label-medium font-medium">01 Feb, 2023</p>
              </div>
            </div>
          </div>
          <Link href="/checkout">
            <button
              className="w-full my-5 bg-black text-white py-4 uppercase title-small tracking-widest font-semibold"
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
