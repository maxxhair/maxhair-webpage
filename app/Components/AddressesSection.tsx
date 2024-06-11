"use client";
import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axiosInstance from "../util/axiosInstance";
import { useDispatch } from "react-redux";
import AddressBox from "./AddressBox";
import "react-phone-input-2/lib/style.css";
import { usePathname } from "next/navigation";
import AddAddressForm from "./AddAddressForm";

interface Address {
  _id?: string;
  houseNumber: string;
  streetAddress1: string;
  state: string;
  country: string;
  landmark: string;
  zipcode: string;
  mobileNumber: string;
  name: string;
}

const AddressesSection = () => {
  const path = usePathname();
  const dispatch = useDispatch();
  const [openAddAddressModal, setOpenAddAddressModal] =
    useState<boolean>(false);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const handleCloseModal = () => setOpenAddAddressModal(false);

  const getuserAddresses = async () => {
    try {
      const response = await axiosInstance.get("address");
      setAddresses(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuserAddresses();
  }, []);

  return (
    <React.Fragment>
      <div className="w-full">
        {path === "/profile" && (
          <div className="w-full flex items-center justify-between mb-8">
            Addresses
            <button
              className="bg-black text-white px-4 py-2 uppercase"
              onClick={() => setOpenAddAddressModal(true)}
            >
              Add New
            </button>
          </div>
        )}
        {addresses.length > 0 ? (
          addresses.map((address: any, index: number) => (
            <AddressBox
              key={index}
              address={address}
              getAddresses={getuserAddresses}
            />
          ))
        ) : (
          <div className="w-full min-h-[30vh] grid place-items-center">
            <p className="headline-small xl:headline-medium text-center">
              Empty Addresses
            </p>
          </div>
        )}
      </div>
      <Modal show={openAddAddressModal} onClose={handleCloseModal}>
        <Modal.Header>Add New Address</Modal.Header>
        <Modal.Body>
          <AddAddressForm
            getuserAddresses={getuserAddresses}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default AddressesSection;
