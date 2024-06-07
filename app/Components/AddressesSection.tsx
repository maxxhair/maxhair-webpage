"use client";
import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../util/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import AddressBox from "./AddressBox";

interface Address {
  _id?: string;
  houseNumber: string;
  streetAddress1: string;
  state: string;
  country: string;
  landmark: string;
  zipcode: string;
  mobileNumber: string;
}

const AddressesSection = () => {
  const [openAddAddressModal, setOpenAddAddressModal] =
    useState<boolean>(false);
  const [addressFormData, setAddressFormData] = useState<Address>({
    houseNumber: "",
    streetAddress1: "",
    state: "",
    country: "",
    landmark: "",
    zipcode: "",
    mobileNumber: ""
  });
  const [addresses, setAddresses] = useState<Address[]>([]);
  const user = useSelector((state: RootState) => state.user.user as any);

  const handleCloseModal = () => setOpenAddAddressModal(false);

  const handleInputChange = (e: any) => {
    setAddressFormData({
      ...addressFormData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    try {
      const body = {
        houseNumber: addressFormData.houseNumber,
        streetAddress1: addressFormData.streetAddress1,
        state: addressFormData.state,
        country: addressFormData.country,
        landmark: addressFormData.landmark,
        zipcode: addressFormData.zipcode,
        mobileNumber: addressFormData.mobileNumber,
        user: user._id
      };
      const res = await axiosInstance.post("address", body);
      handleCloseModal();
      getuserAddresses();
      console.log("res", res);
    } catch (error) {
      toast.error(error);
    }
  };

  const getuserAddresses = async () => {
    try {
      const response = await axiosInstance.get("address");
      setAddresses(response?.data?.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getuserAddresses();
  }, []);

  return (
    <React.Fragment>
      <div className="w-[70%]">
        <div className="w-full flex items-center justify-between mb-8">
          Addresses
          <button
            className="bg-black text-white px-4 py-2 uppercase"
            onClick={() => setOpenAddAddressModal(true)}
          >
            Add New
          </button>
        </div>
        {addresses.map((address: any, index: number) => (
          <AddressBox
            key={index}
            address={address}
            getAddresses={getuserAddresses}
          />
        ))}
      </div>
      <Modal show={openAddAddressModal} onClose={handleCloseModal}>
        <Modal.Header>Add New Address</Modal.Header>
        <Modal.Body>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              id="houseNumber"
              placeholder="House No"
              onChange={handleInputChange}
              value={addressFormData.houseNumber}
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              id="streetAddress1"
              type="text"
              placeholder="Street Address"
              required
              onChange={handleInputChange}
              value={addressFormData.streetAddress1}
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              id="landmark"
              type="text"
              placeholder="Landmark"
              required
              onChange={handleInputChange}
              value={addressFormData.landmark}
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              id="state"
              type="text"
              placeholder="State"
              onChange={handleInputChange}
              value={addressFormData.state}
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              id="zipcode"
              placeholder="344XXX"
              type="text"
              required
              onChange={handleInputChange}
              value={addressFormData.zipcode}
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              type="text"
              id="country"
              placeholder="Country"
              onChange={handleInputChange}
              value={addressFormData.country}
              className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
            />
            <input
              type="text"
              id="mobileNumber"
              placeholder="Phone"
              onChange={handleInputChange}
              value={addressFormData.mobileNumber}
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
