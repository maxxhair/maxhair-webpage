"use client";
import { Modal, TextInput } from "flowbite-react";
import serialize from "form-serialize";
import React, { useRef, useState } from "react";

const AddressesSection = () => {
  const [openAddAddressModal, setOpenAddAddressModal] =
    useState<boolean>(false);

  const formRef = useRef(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const obj = serialize(event.target as HTMLFormElement, { hash: true });
    console.log("obj", obj);
  };

  return (
    <React.Fragment>
      <div className="w-[70%]">
        <div className="w-full flex items-center justify-between">
          Addresses
          <button
            className="bg-black text-white px-4 py-2 uppercase"
            onClick={() => setOpenAddAddressModal(true)}
          >
            Add New
          </button>
        </div>
        {/* {addresses.map((address: any, index: number) => (
              <AddressBox key={index} address={address} />
            ))} */}
      </div>
      <Modal
        show={openAddAddressModal}
        onClose={() => setOpenAddAddressModal(false)}
        dismissible
      >
        <Modal.Header>Add New Address</Modal.Header>
        <Modal.Body>
          <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              required
              id="email"
              name="email"
              placeholder="name@gmail.com"
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              required
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              required
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              id="landmark"
              name="landmark"
              type="text"
              placeholder="Apartement, Landmark, Suite etc..(optional)"
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              id="zipcode"
              name="zipcode"
              placeholder="344XXX"
              type="text"
              required
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <button
              type="submit"
              className="bg-black uppercase text-white px-4 py-2 text-lg tracking-wider"
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddressesSection;
