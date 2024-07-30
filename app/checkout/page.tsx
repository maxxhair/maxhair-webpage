"use client";

import React, { useEffect, useState, FormEvent } from "react";
import CheckoutCartDetails from "../Components/CheckoutCartDetails";
import Link from "next/link";
import { Checkbox, Modal, Spinner, TextInput } from "flowbite-react";
import { baseUrl } from "../util/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { emptyCart, removeCouponCode } from "../store/redux/cartSlice";
import toast from "react-hot-toast";
import axios from "axios";
import { LoggedUser } from "../types";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AddressesSection from "../Components/AddressesSection";

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  landmark: string;
  zipcode: string;
  state: string;
  country: string;
}

const Checkout = () => {
  const [checkoutFormData, setCheckoutFormDate] = useState<CheckoutFormData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const loggedUser = useSelector(
    (state: RootState) => state.user.user as LoggedUser
  );
  const selectedAddress = useSelector((state: RootState) => state.address);
  const discountPercentage = useSelector(
    (state: RootState) => state.cart.discountPercentage
  );

  const dispatch = useDispatch<AppDispatch>();
  const { push } = useRouter();

  useEffect(() => {
    if (selectedAddress) {
      setCheckoutFormDate((prevState) => ({
        ...prevState,
        name: selectedAddress.name,
        email: loggedUser.user && loggedUser.user.email,
        phone: selectedAddress.phone,
        address:
          selectedAddress.houseNumber + " " + selectedAddress.streetAddress1,
        landmark: selectedAddress.landmark,
        state: selectedAddress.state,
        country: selectedAddress.country,
        zipcode: selectedAddress.zipcode
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
              user_id: loggedUser.user && loggedUser.user._id,
              items: cartItems,
              total: TotalPriceToPay,
              name: checkoutFormData.name,
              email: checkoutFormData.email,
              phone: checkoutFormData.phone,
              address:
                checkoutFormData.address +
                " " +
                checkoutFormData.state +
                " " +
                checkoutFormData.country,
              landmark: checkoutFormData.landmark,
              zipcode: checkoutFormData.zipcode,
              transactionId: response.data.data.transactionId
            };
            try {
              const res = await axios.post(`${baseUrl}orders`, body);
              dispatch(emptyCart());
              dispatch(removeCouponCode());
              toast.success("Order placed successfully");
              push("/");
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

  return (
    <div className="w-full p-5 lg:p-0 lg:w-3/4 mx-auto mt-[14vh] flex flex-col-reverse lg:flex-row mb-10">
      <div className="w-full lg:w-1/2 grid place-items-center">
        <form
          className="w-full mt-10 lg:mt-0 lg:w-3/4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex items-center justify-between">
            <p className="headline-small">Billing Details</p>
            {!loggedUser?.user?.email && (
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
          <div className="flex items-center justify-between py-3">
            <p className="headline-small">Shipping Address</p>
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
              id="state"
              type="text"
              placeholder="State"
              onChange={handleInputChange}
              value={checkoutFormData?.state}
            />
            <TextInput
              id="country"
              type="text"
              placeholder="Country"
              onChange={handleInputChange}
              value={checkoutFormData?.country}
            />
            <TextInput
              id="zipcode"
              placeholder="344XXX"
              type="text"
              onChange={handleInputChange}
              value={checkoutFormData?.zipcode}
            />
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
          <p className="label-medium my-10">
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
            {!loading ? "Pay Through Card" : <Spinner size="lg" color="#fff" />}
          </button>
        </form>
      </div>
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
