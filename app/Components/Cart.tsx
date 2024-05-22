import Image from "next/image";
import React, { useState } from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  handleClose: () => void;
}

const Cart: React.FC<Props> = ({ handleClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [couponcode, setCouponCode] = useState("MAXX40");
  const [discountPercentage, setDiscountPercentage] = useState(40);
  const [couponcodemsg, setCouponCodeMsg] = useState("");

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  });

  const handleApplyCouponCode = () => {
    if (couponcode === "MAXX40") {
      setDiscountPercentage(40);
      setCouponCodeMsg("40% discount is applied to total price");
    } else if (couponcode === "MAXX20") {
      setDiscountPercentage(20);
      setCouponCodeMsg("20% discount is applied to total price");
    } else if (couponcode === "MAXX30") {
      setDiscountPercentage(30);
      setCouponCodeMsg("30% discount is applied to total price");
    } else if (couponcode === "MAXX50") {
      setDiscountPercentage(50);
      setCouponCodeMsg("50% discount is applied to total price");
    } else {
      setDiscountPercentage(0);
      setCouponCodeMsg("Invalid Coupon Code");
    }
  };

  const discount = parseInt(
    ((discountPercentage / 100) * priceTotal).toFixed(2)
  );

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="w-full">
          {cartItems.map((item: any) => (
            <CartItem key={item.id} product={item} />
          ))}
          <div className="w-full flex items-center gap-6 justify-between">
            <input
              placeholder="Discount code or gift card"
              type="text"
              className="w-full bg-white outline-none py-3 px-2 rounded-lg"
              value={couponcode.toUpperCase()}
              onChange={(e) => setCouponCode(e.target.value)}
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
                <p className="label-medium font-medium">${priceTotal}</p>
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
              <div className="w-full flex items-center justify-between">
                <p className="label-medium text-gray-500 font-medium">
                  Coupon Applied
                </p>
                <p className="label-medium font-medium">$0.00</p>
              </div>
            </div>
            <div className="py-5 flex flex-col gap-2">
              <div className="w-full flex items-center justify-between">
                <p className="label-medium text-gray-500 font-medium">TOTAL</p>
                <p className="label-medium font-medium">
                  ${priceTotal - discount}
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
