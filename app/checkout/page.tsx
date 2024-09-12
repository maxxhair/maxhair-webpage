"use client";

import React, { useEffect, useState, FormEvent } from "react";
import CheckoutCartDetails from "../Components/CheckoutCartDetails";
import Link from "next/link";
import { Checkbox, Modal, Spinner, TextInput } from "flowbite-react";
import axiosInstance, { baseUrl } from "../util/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { emptyCart, removeCouponCode } from "../store/redux/cartSlice";
import toast from "react-hot-toast";
import axios from "axios";
import { LoggedUser } from "../types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AddressesSection from "../Components/AddressesSection";
import { selectAddress } from "../store/redux/addressesSlice";

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  landmark: string;
  zipcode: string;
  state: string;
  country: string;
  provincecode: string;
  countrycode: string;
}

const Checkout = () => {
  const [checkoutFormData, setCheckoutFormDate] = useState<CheckoutFormData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [saveAddress, setSaveAddress] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const coupon = useSelector((state: RootState) => state.cart.couponCode);
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
        email: loggedUser.user && loggedUser.user.email,
        phone: selectedAddress.phone,
        address: selectedAddress.streetAddress1,
        landmark: selectedAddress.landmark,
        state: selectedAddress.state,
        country: selectedAddress.country,
        zipcode: selectedAddress.zipcode,
        provincecode: selectedAddress.provincecode,
        countrycode: selectedAddress.countrycode
      }));
    }
    setOpenModal(false);
  }, [selectedAddress]);

  const handleInputChange = (e: any) => {
    setCheckoutFormDate({ ...checkoutFormData, [e.target.id]: e.target.value });
  };

  const handlePhoneInputChange = (value: any) => {
    setCheckoutFormDate({ ...checkoutFormData, phone: value });
  };

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems?.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }
    return totalPrice;
  });

  const TotalPriceToPay = (priceTotal - discountPercentage).toFixed(2);

  useEffect(() => {
    const handlePaymentMessage = async (event: MessageEvent) => {
      if (token) {
        const helcimPayJsIdentifierKey = "helcim-pay-js-" + token;
        if (event.data.eventName === helcimPayJsIdentifierKey) {
          setLoading(false);
          if (event.data.eventStatus === "ABORTED") {
            console.error("Transaction failed!", event.data.eventMessage);
            toast.error("Transaction aborted! Please try again.");
            return;
          }

          if (event.data.eventStatus === "SUCCESS") {
            console.log("Transaction success!", event.data);
            const response = JSON.parse(event.data.eventMessage);
            const body = {
              user_id: loggedUser.user && loggedUser.user._id,
              items: cartItems,
              total: TotalPriceToPay,
              name: checkoutFormData.name,
              email: checkoutFormData.email,
              phone: checkoutFormData.phone,
              address: checkoutFormData.address.split(",").slice(0, 2).join(),
              landmark: checkoutFormData.landmark,
              state: checkoutFormData.state,
              provincecode: checkoutFormData.provincecode,
              countrycode: checkoutFormData.countrycode,
              country: checkoutFormData.country,
              couponCode: coupon && coupon,
              zipcode: checkoutFormData.zipcode,
              transactionId: response.data.data.transactionId
            };
            try {
              const res = await axios.post(`${baseUrl}orders`, body);
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
    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}payments/get_tokens`, {
        amount: TotalPriceToPay
      });
      setToken(res.data.data.checkoutToken);
      // @ts-ignore
      appendHelcimPayIframe(res.data.data.checkoutToken);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleAddAddress = async () => {
    try {
      const body = {
        name: checkoutFormData.name,
        streetAddress1: checkoutFormData.address,
        state: checkoutFormData.state,
        landmark: checkoutFormData.landmark,
        zipcode: checkoutFormData.zipcode,
        mobileNumber: checkoutFormData.phone,
        user: loggedUser.user && loggedUser.user._id,
        provincecode: checkoutFormData.provincecode,
        countrycode: checkoutFormData.countrycode
      };
      const res = await axiosInstance.post("address", body);
      dispatch(
        selectAddress({
          _id: res.data.data._id,
          name: res.data.data.name,
          streetAddress1: res.data.data.streetAddress1,
          state: res.data.data.state,
          landmark: res.data.data.landmark,
          zipcode: res.data.data.zipcode,
          phone: res.data.data.mobileNumber,
          provincecode: res.data.data.provincecode,
          countrycode: res.data.data.countrycode
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (saveAddress) {
      handleAddAddress();
    }
  }, [saveAddress]);

  return (
    <div className="w-full p-5 lg:pt-8 lg:w-3/4 mx-auto mt-[14vh] flex flex-col-reverse lg:flex-row mb-10">
      <div className="w-full lg:w-1/2 grid place-items-center">
        <form
          className="w-full mt-10 lg:mt-0 lg:w-3/4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex items-center justify-between">
            {!loggedUser?.user?.email && (
              <div className="flex">
                <Link href="signin">
                  <p className="label-medium hover:underline hover:text-blue-400 underline-offset-2">
                    Login
                  </p>
                </Link>
                &nbsp;
                <p className="label-medium">
                  to see you order details and status
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between py-3">
            <p className="headline-small">Billing and Shipping Details</p>
            {loggedUser?.user?.email && (
              <p
                className="body-small text-blue-500 hover:underline cursor-pointer"
                onClick={() => setOpenModal(true)}
              >
                Change Address
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <TextInput
              id="email"
              type="text"
              placeholder="name@gmail.com"
              required
              className="pt-3"
              onChange={handleInputChange}
              value={checkoutFormData?.email}
            />
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
              placeholder="Street Address"
              required
              onChange={handleInputChange}
              value={checkoutFormData?.address}
            />

            <TextInput
              id="landmark"
              type="text"
              placeholder="Landmark or city"
              onChange={handleInputChange}
              value={checkoutFormData?.landmark}
              required
            />
            <TextInput
              id="state"
              type="text"
              placeholder="State"
              onChange={handleInputChange}
              required
              value={checkoutFormData?.state}
            />
            <TextInput
              required
              className="flex-grow"
              id="provincecode"
              type="text"
              placeholder="Province code"
              onChange={handleInputChange}
              value={checkoutFormData?.provincecode}
            />
            <div className="flex flex-1 gap-3">
              <TextInput
                id="zipcode"
                placeholder="344XXX / zipcode"
                type="text"
                onChange={handleInputChange}
                required
                value={checkoutFormData?.zipcode}
              />
              <TextInput
                required
                className="flex-grow"
                id="countrycode"
                type="text"
                placeholder="Country Code"
                onChange={handleInputChange}
                value={checkoutFormData?.countrycode}
              />
            </div>
            {/* <TextInput
              id="country"
              type="text"
              placeholder="Country"
              onChange={handleInputChange}
              value={checkoutFormData?.country}
            /> */}

            <PhoneInput
              enableSearch
              country={"us"}
              value={checkoutFormData?.phone}
              inputProps={{
                id: "phone",
                required: true,
                className: "w-full border-[#d1d5db] rounded-md pl-12"
              }}
              onChange={handlePhoneInputChange}
            />
          </div>

          {/* {loggedUser?.user?.email && (
            <div className="flex items-center w-fit my-3">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-0 cursor-pointer"
                checked={saveAddress}
                onChange={() => {
                  if (checkoutFormData) {
                    setSaveAddress(!saveAddress);
                  }
                }}
              />
              <label
                htmlFor="remember"
                className="ml-3 text-gray-500 tracking-wide"
              >
                Save Address
              </label>
            </div>
          )} */}

          <p className="label-medium mb-10 mt-6">
            By clicking below and completing your order, you agree to purchase
            your item(s) from Maxx Hair Extension as merchant of record for this
            transaction, on Maxx Hair Extension{" "}
            <span className="underline">Terms & Conditions</span> and{" "}
            <span className="underline">Privacy Policy</span>
          </p>
          <button
            className={
              cartItems?.length > 0
                ? "w-full justify-center bg-black text-white py-4 title-small tracking-widest font-semibold"
                : "w-full justify-center bg-gray-300 text-white py-4 title-small tracking-widest font-semibold"
            }
            disabled={cartItems?.length <= 0}
            type="submit"
            name="card"
          >
            {!loading ? "Pay Online" : <Spinner size="lg" color="#fff" />}
          </button>
        </form>
      </div>
      {/* Cart items */}
      <CheckoutCartDetails />
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        dismissible
        className="!overflow-y-scroll"
      >
        <Modal.Header>Choose Address</Modal.Header>
        <Modal.Body>
          <AddressesSection />
          <Link href="/profile">
            <button className="bg-black text-white uppercase px-5 py-2 body-medium mx-auto">
              Add New
            </button>
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Checkout;
