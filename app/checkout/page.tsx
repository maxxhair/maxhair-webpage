"use client";

import React, { useEffect, useState } from "react";
import { productImage } from "../util/images";
import CheckoutCartDetails from "../Components/CheckoutCartDetails";
import Link from "next/link";
import { Checkbox, TextInput } from "flowbite-react";
import axiosInstance from "../util/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { emptyCart, removeCouponCode } from "../store/redux/cartSlice";

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  landmark: string;
  zipcode: string;
}

const Checkout = () => {
  const [checkoutFormData, setCheckoutFormDate] = useState<CheckoutFormData>();
  const [token, setToken] = useState(null);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const discountPercentage = useSelector(
    (state: RootState) => state.cart.discountPercentage
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: any) => {
    setCheckoutFormDate({ ...checkoutFormData, [e.target.id]: e.target.value });
  };

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }
    return totalPrice;
  });

  const discount = parseInt(
    ((discountPercentage / 100) * priceTotal).toFixed(2)
  );

  const TotalPriceToPay = (priceTotal - discount).toFixed(2);

  useEffect(() => {
    const handlePaymentMessage = async (event: MessageEvent) => {
      if (token) {
        const helcimPayJsIdentifierKey = "helcim-pay-js-" + token;

        if (event.data.eventName === helcimPayJsIdentifierKey) {
          if (event.data.eventStatus === "ABORTED") {
            console.error("Transaction failed!", event.data.eventMessage);
          }

          if (event.data.eventStatus === "SUCCESS") {
            console.log("Transaction success!", event.data);
            const response = JSON.parse(event.data.eventMessage);
            console.log(response);
            const body = {
              items: cartItems,
              total: TotalPriceToPay,
              name: checkoutFormData.name,
              email: checkoutFormData.email,
              phone: checkoutFormData.phone,
              address: checkoutFormData.address,
              landmark: checkoutFormData.landmark,
              zipcode: checkoutFormData.zipcode,
              transactionId: response.data.data.transactionId
            };
            try {
              const res = await axiosInstance.post("orders", body);
              console.log("res", res);
              window.location.reload();
              window.location.href = "/";
              dispatch(emptyCart());
              dispatch(removeCouponCode());
            } catch (error) {
              console.log(error);
            }
          }
        }
      }
    };

    window.addEventListener("message", handlePaymentMessage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("message", handlePaymentMessage);
    };
  }, [token]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("payments/get_tokens", {
        amount: TotalPriceToPay
      });
      setToken(res.data.data.checkoutToken);
      // @ts-ignore
      appendHelcimPayIframe(res.data.data.checkoutToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[90%] lg:w-3/4 h-auto lg:h-[90vh] mx-auto mt-[14vh] lg:mt-[8vh] flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 grid place-items-center">
        <form
          className="w-full mt-10 lg:mt-0 lg:w-3/4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex items-center justify-between">
            <p className="headline-small">Billing Details</p>
            <div className="flex">
              <Link href="signin">
                <p className="label-medium">Login</p>
              </Link>
              /<p className="label-medium">Continue as guest</p>
            </div>
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@gmail.com"
            required
            className="pt-3"
            onChange={handleInputChange}
          />
          <div className="flex items-center gap-2 py-2">
            <Checkbox />
            <p className="label-medium">Email me with news and offers</p>
          </div>

          <p className="headline-small py-3">Shipping Address</p>
          <div className="flex flex-col gap-4">
            <TextInput
              id="fullname"
              type="text"
              placeholder="Full name"
              required
              onChange={handleInputChange}
            />
            <TextInput
              id="address"
              type="text"
              placeholder="Address"
              required
              onChange={handleInputChange}
            />
            <TextInput
              id="landmark"
              type="text"
              placeholder="Apartement, Landmark, Suite etc..(optional)"
              onChange={handleInputChange}
            />
            <TextInput
              id="zipcode"
              placeholder="344XXX"
              type="text"
              onChange={handleInputChange}
            />
            <TextInput
              id="phone"
              placeholder="Phone"
              onChange={handleInputChange}
            />
          </div>
          <p className="label-medium my-10">
            By clicking below and completing your order, you agree to purchase
            your item(s) from Maxx Hair Extension as merchant of record for this
            transaction, on Maxx Hair Extension{" "}
            <span className="underline">Terms & Conditions</span> and{" "}
            <span className="underline">Privacy Policy</span>
          </p>
          <button
            className="w-full  bg-black text-white py-4 title-small tracking-widest font-semibold"
            type="submit"
          >
            PAY NOW
          </button>
        </form>
      </div>
      <CheckoutCartDetails />
    </div>
  );
};

export default Checkout;
