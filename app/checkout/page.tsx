"use client";

import React, { useEffect, useState, FormEvent } from "react";
import CheckoutCartDetails from "../Components/CheckoutCartDetails";
import Link from "next/link";
import { Checkbox, Spinner, TextInput } from "flowbite-react";
import axiosInstance from "../util/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { emptyCart, removeCouponCode } from "../store/redux/cartSlice";
import Cookies from "js-cookie";
import OrderPlacedModal from "../Components/OrderPlacedModal";
import toast from "react-hot-toast";

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  landmark: string;
  zipcode: string;
}

interface LoggedUser {
  email: string;
  _id: string;
  addresses: [];
}

const Checkout = () => {
  const [checkoutFormData, setCheckoutFormDate] = useState<CheckoutFormData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const [token, setToken] = useState(null);
  const [submitButton, setSubmitButton] = useState(null);
  // const [openSuccessModal, setOpenSucessModal] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const loggedUser = useSelector(
    (state: RootState) => state.user.user as LoggedUser
  );
  const selectedAddress = useSelector((state: RootState) => state.address);
  const discountPercentage = useSelector(
    (state: RootState) => state.cart.discountPercentage
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (selectedAddress) {
      setCheckoutFormDate((prevState) => ({
        ...prevState,
        name: selectedAddress.name,
        email: selectedAddress.email,
        phone: selectedAddress.phone,
        address: selectedAddress.address,
        landmark: selectedAddress.landmark,
        zipcode: selectedAddress.zipcode,
      }));
    }
  }, [selectedAddress]);

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
          setLoading(false);
          if (event.data.eventStatus === "ABORTED") {
            console.error("Transaction failed!", event.data.eventMessage);
          }

          if (event.data.eventStatus === "SUCCESS") {
            console.log("Transaction success!", event.data);
            const response = JSON.parse(event.data.eventMessage);
            const body = {
              user_id: loggedUser && loggedUser?._id,
              items: cartItems,
              total: TotalPriceToPay,
              name: checkoutFormData.name,
              email: checkoutFormData.email,
              phone: checkoutFormData.phone,
              address: checkoutFormData.address,
              landmark: checkoutFormData.landmark,
              zipcode: checkoutFormData.zipcode,
              transactionId: response.data.data.transactionId,
            };
            try {
              const res = await axiosInstance.post("orders", body);
              dispatch(emptyCart());
              dispatch(removeCouponCode());
              toast.success("Order placed successfully");
              window.location.href = "/";
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitButton) {
      if (submitButton === "cash") {
        console.log("from cash");
        handlePlaceOrderCash();
      } else if (submitButton === "card") {
        handlePlaceOrderCard();
        console.log("from card");
      }
    }
  };

  const handlePlaceOrderCard = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("payments/get_tokens", {
        amount: TotalPriceToPay,
      });
      setToken(res.data.data.checkoutToken);
      // @ts-ignore
      appendHelcimPayIframe(res.data.data.checkoutToken);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handlePlaceOrderCash = async () => {
    const body = {
      user_id: loggedUser && loggedUser?._id,
      items: cartItems,
      total: TotalPriceToPay,
      name: checkoutFormData.name,
      email: checkoutFormData.email,
      phone: checkoutFormData.phone,
      address: checkoutFormData.address,
      landmark: checkoutFormData.landmark,
      zipcode: checkoutFormData.zipcode,
    };
    try {
      if (
        checkoutFormData.name.length > 0 &&
        checkoutFormData.email.length > 0 &&
        checkoutFormData.landmark.length > 0 &&
        checkoutFormData.address.length > 0 &&
        checkoutFormData.zipcode.length > 0 &&
        checkoutFormData.phone.length > 0
      ) {
        setLoad(true);
        const res = await axiosInstance.post("orders", body);
        dispatch(emptyCart());
        dispatch(removeCouponCode());
        setLoad(false);
        window.location.href = "/";
        toast.success("Order placed successfully");
      }
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };

  return (
    <div className="w-full p-5 lg:p-0 lg:w-3/4 mx-auto mt-[14vh] lg:mt-[12vh] flex flex-col-reverse lg:flex-row mb-10">
      <div className="w-full lg:w-1/2 grid place-items-center">
        <form
          className="w-full mt-10 lg:mt-0 lg:w-3/4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex items-center justify-between">
            <p className="headline-small">Billing Details</p>
            {!loggedUser.email && (
              <div className="flex">
                <Link href="signin">
                  <p className="label-medium">Login</p>
                </Link>
                /<p className="label-medium">Continue as guest</p>
              </div>
            )}
          </div>
          <TextInput
            id="email"
            type="text"
            placeholder="name@gmail.com"
            required
            className="pt-3"
            onChange={handleInputChange}
            value={checkoutFormData?.email}
          />
          <div className="flex items-center gap-2 py-2">
            <Checkbox />
            <p className="label-medium">Email me with news and offers</p>
          </div>

          <p className="headline-small py-3">Shipping Address</p>
          <div className="flex flex-col gap-4">
            <TextInput
              id="name"
              type="text"
              placeholder="Full name"
              required
              onChange={handleInputChange}
              value={checkoutFormData?.name}
            />
            <TextInput
              id="address"
              type="text"
              placeholder="Address"
              required
              onChange={handleInputChange}
              value={checkoutFormData?.address}
            />
            <TextInput
              id="landmark"
              type="text"
              placeholder="Apartement, Landmark, Suite etc..(optional)"
              onChange={handleInputChange}
              value={checkoutFormData?.landmark}
            />
            <TextInput
              id="zipcode"
              placeholder="344XXX"
              type="text"
              onChange={handleInputChange}
              value={checkoutFormData?.zipcode}
            />
            <TextInput
              id="phone"
              placeholder="Phone"
              onChange={handleInputChange}
              value={checkoutFormData?.phone}
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
            className="w-full justify-center bg-black text-white py-4 title-small tracking-widest font-semibold"
            type="submit"
            name="card"
            onClick={() => setSubmitButton("card")}
          >
            {!loading ? "Pay Through Card" : <Spinner size="lg" color="#fff" />}
          </button>
          <button
            type="submit"
            className="w-full text-center cursor-pointer bg-black text-white py-4 title-small tracking-widest font-semibold mt-4"
            name="cash"
            onClick={() => setSubmitButton("cash")}
          >
            {!load ? "Pay Through Cash" : <Spinner size="lg" color="#fff" />}
          </button>
        </form>
      </div>
      <CheckoutCartDetails />
      {/* <OrderPlacedModal
        openModal={openSuccessModal}
        setOpenModal={setOpenSucessModal}
      /> */}
    </div>
  );
};

export default Checkout;
