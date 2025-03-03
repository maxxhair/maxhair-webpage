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
  // Shipping address fields
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  landmark: string;
  zipcode: string;
  state: string;
  country: string;
  provincecode: string;
  countrycode: string;

  // Billing address fields
  billingName: string;
  billingLastName: string;
  billingAddress: string;
  billingCity: string;
  billingZipcode: string;
  billingState: string;
  billingCountry: string;
  billingPhone: string;
}

const Checkout = () => {
  const [checkoutFormData, setCheckoutFormDate] = useState<CheckoutFormData>();
  const [phoneError, setPhoneError] = useState(false);
  const [billingPhoneError, setBillingPhoneError] = useState(false);
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
  const [sameAsShipping, setSameAsShipping] = useState(false);

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

  const handlePhoneInputChange = (id: string) => (value: any) => {
    setCheckoutFormDate({ ...checkoutFormData, [id]: value });
    if (id === "phone") {
      if (!value) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    } else if (id === "billingPhone") {
      if (!value) {
        setBillingPhoneError(true);
      } else {
        setBillingPhoneError(false);
      }
    }
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
              name: checkoutFormData.name + " " + checkoutFormData.lastName,
              email: loggedUser.user
                ? loggedUser.user.email
                : checkoutFormData.email,
              phone: "+" + checkoutFormData.phone,
              address: checkoutFormData.address.split(",").slice(0, 2).join(),
              landmark: checkoutFormData.landmark,
              state: checkoutFormData.state,
              provincecode: checkoutFormData.provincecode,
              countrycode: checkoutFormData.countrycode,
              country: checkoutFormData.country,
              zipcode: checkoutFormData.zipcode,
              couponCode: coupon && coupon,
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
    if (!checkoutFormData.phone) {
      setPhoneError(true);
      return; // Stop form submission
    }
    if (!sameAsShipping && !checkoutFormData.billingPhone) {
      setBillingPhoneError(true);
      return; // Stop form submission
    }
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

  useEffect(() => console.log(checkoutFormData), [checkoutFormData]);

  useEffect(() => {
    if (saveAddress) {
      handleAddAddress();
    }
  }, [saveAddress]);

  return (
    <div className="w-full p-5 lg:pt-8 gap mx-auto mt-[14vh] flex flex-col-reverse md:gap-10 justify-center md:items-start items-center md:flex-row mb-10">
      <div className="w-full md:max-w-[400px] max-w-[600px] grid place-items-center">
        <form className="w-full mt-10 lg:mt-0 mx-auto" onSubmit={handleSubmit}>
          {/* Contact section - only show when user is not logged in */}

          <>
            <h2 className="font-medium mb-4">Contact</h2>
            <TextInput
              id="email"
              type="text"
              placeholder="Email"
              required
              className="mb-4 hover:!cursor-default"
              disabled={loggedUser?.user?.email}
              onChange={
                !loggedUser?.user?.email ? handleInputChange : undefined
              }
              value={
                loggedUser?.user?.email
                  ? loggedUser?.user?.email
                  : checkoutFormData?.email
              }
            />
          </>

          {/* Shipping Address section */}
          <h2 className="font-medium mb-4">Shipping Address</h2>
          <div className="flex gap-4 mb-4">
            <TextInput
              id="name"
              type="text"
              placeholder="First Name"
              required
              className="flex-1"
              onChange={handleInputChange}
              value={checkoutFormData?.name}
            />
            <TextInput
              id="lastName"
              type="text"
              placeholder="Last Name"
              required
              className="flex-1"
              onChange={handleInputChange}
            />
          </div>
          <TextInput
            id="address"
            type="text"
            placeholder="Street Address"
            required
            className="mb-4"
            onChange={handleInputChange}
            value={checkoutFormData?.address}
          />
          <div className="flex gap-4 md:flex-row flex-col">
            <TextInput
              id="country"
              type="text"
              placeholder="Country Code"
              required
              className="flex-1"
              onChange={handleInputChange}
              value={checkoutFormData?.country}
            />
            <TextInput
              id="suite"
              type="text"
              required
              placeholder="Province Code"
              className="mb-4"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-4 mb-4">
            <TextInput
              id="zipcode"
              placeholder="ZIP code"
              type="text"
              className="flex-1"
              onChange={handleInputChange}
              required
              value={checkoutFormData?.zipcode}
            />
            <TextInput
              id="city"
              type="text"
              placeholder="City"
              required
              className="flex-1"
              onChange={handleInputChange}
            />
            <TextInput
              id="state"
              type="text"
              placeholder="State"
              required
              className="flex-1"
              onChange={handleInputChange}
              value={checkoutFormData?.state}
            />
          </div>
          <PhoneInput
            enableSearch
            country={"us"}
            value={checkoutFormData?.phone}
            inputProps={{
              name: "phone",
              id: "phone",
              required: true,
              className: "w-full border-[#d1d5db] rounded-md pl-12"
            }}
            onChange={handlePhoneInputChange("phone")}
          />
          {phoneError && (
            <p className="text-red-500 text-sm">Phone number is required.</p>
          )}

          {/* Billing Address checkbox */}
          <div className="flex items-center gap-2 my-6">
            <Checkbox
              id="sameAddress"
              checked={sameAsShipping}
              onChange={(e) => setSameAsShipping(e.target.checked)}
            />
            <label htmlFor="sameAddress" className="text-sm">
              Billing address same as shipping address
            </label>
          </div>

          {/* Billing Address section - only show when checkbox is unchecked */}
          {!sameAsShipping && (
            <>
              <h2 className="font-medium mb-4">Billing Address</h2>
              <div className="flex gap-4 mb-4">
                <TextInput
                  id="billingName"
                  type="text"
                  placeholder="First Name"
                  required
                  className="flex-1"
                  onChange={handleInputChange}
                />
                <TextInput
                  id="billingLastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  className="flex-1"
                  onChange={handleInputChange}
                />
              </div>
              <TextInput
                id="billingAddress"
                type="text"
                placeholder="Street Address"
                required
                className="mb-4"
                onChange={handleInputChange}
              />
              <div className="flex gap-4 md:flex-row flex-col">
                <TextInput
                  id="billingCountry"
                  type="text"
                  placeholder="Country Code"
                  required
                  className="flex-1 md:mb-4"
                  onChange={handleInputChange}
                />
                <TextInput
                  id="billingSuite"
                  type="text"
                  required
                  placeholder="Province Code"
                  className="mb-4"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex gap-4 mb-4">
                <TextInput
                  id="billingZipcode"
                  placeholder="ZIP code"
                  type="text"
                  className="flex-1"
                  onChange={handleInputChange}
                  required
                />
                <TextInput
                  id="billingCity"
                  type="text"
                  placeholder="City"
                  required
                  className="flex-1"
                  onChange={handleInputChange}
                />
                <TextInput
                  id="billingState"
                  type="text"
                  placeholder="State"
                  required
                  className="flex-1"
                  onChange={handleInputChange}
                />
              </div>
              <PhoneInput
                enableSearch
                country={"us"}
                value={checkoutFormData?.billingPhone}
                inputProps={{
                  id: "billingPhone",
                  required: true,
                  className: "w-full border-[#d1d5db] rounded-md pl-12"
                }}
                onChange={handlePhoneInputChange("billingPhone")}
              />
              {billingPhoneError && (
                <p className="text-red-500 text-sm">
                  Phone number is required.
                </p>
              )}
            </>
          )}

          {/* Terms and Pay Now button */}
          <p className="text-sm my-6">
            By clicking below and completing your order, you agree to purchase
            your item(s) from Maxx Hair Extension as merchant of record for this
            transaction, on Maxx Hair Extension{" "}
            <span className="underline">Terms & Conditions</span> and{" "}
            <span className="underline">Privacy Policy</span>
          </p>
          <button
            className={
              cartItems?.length > 0
                ? "w-full justify-center bg-black text-white py-4 uppercase tracking-widest font-medium"
                : "w-full justify-center bg-gray-300 text-white py-4 uppercase tracking-widest font-medium"
            }
            disabled={cartItems?.length <= 0}
            type="submit"
            name="card"
          >
            {!loading ? "Pay Now" : <Spinner size="lg" color="#fff" />}
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
