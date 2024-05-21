import React, { useState } from "react";
import Cart from "../Components/Cart";
import Image from "next/image";
import { productImage } from "../util/images";
import CheckoutCartDetails from "../Components/CheckoutCartDetails";
import Link from "next/link";
import { Checkbox, TextInput } from "flowbite-react";

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  landmark: string;
  zip: string;
}

const Checkout = () => {
  const [checkoutFormData, setCheckoutFormDate] = useState<CheckoutFormData>();

  const handleInputChange = (e: any) => {
    setCheckoutFormDate({ ...checkoutFormData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(checkoutFormData);
  };

  return (
    <div className="w-3/4 h-[90vh] mx-auto mt-[8vh] flex">
      <div className="w-1/2 grid place-items-center">
        <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
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
