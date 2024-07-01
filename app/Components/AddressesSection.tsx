"use client";
import { Modal, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axiosInstance from "../util/axiosInstance";
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
  const [openAddAddressModal, setOpenAddAddressModal] =
    useState<boolean>(false);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showMore, setShowMore] = useState<boolean>(false);
  const handleCloseModal = () => setOpenAddAddressModal(false);

  const getuserAddresses = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("address");
      setAddresses(response?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getuserAddresses();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner size={"xl"} />
      </div>
    );
  }

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
          addresses
            .slice(0, showMore ? addresses.length : 4)
            .map((address: any, index: number) => (
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
        {!showMore ? (
          <p
            className="text-center text-blue-500 hover:underline cursor-pointer"
            onClick={() => setShowMore(true)}
          >
            {addresses.length > 4 && "show more"}
          </p>
        ) : (
          <p
            className="text-center text-blue-500 hover:underline cursor-pointer"
            onClick={() => setShowMore(false)}
          >
            show less
          </p>
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
