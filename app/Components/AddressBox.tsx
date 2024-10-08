import { Checkbox, Modal } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { emptyAddress, selectAddress } from "../store/redux/addressesSlice";
import toast from "react-hot-toast";
import axiosInstance from "../util/axiosInstance";
import UpdateAddress from "./UpdateAddress";
import { usePathname } from "next/navigation";

interface Props {
  address: {
    _id: string;
    name: string;
    houseNumber: string;
    streetAddress1: string;
    state: string;
    country: string;
    landmark: string;
    zipcode: string;
    mobileNumber: string;
    countrycode: string;
    provincecode: string;
  };
  getAddresses: () => {};
}

const AddressBox: React.FC<Props> = ({ address, getAddresses }) => {
  const dispatch = useDispatch<AppDispatch>();
  const path = usePathname();
  const selectedAddress = useSelector((state: RootState) => state.address._id);
  const selected = selectedAddress === address._id;

  const [openUpdateAddressModal, setOpenUpdateAddressModal] = useState(false);

  const handleOpenModal = () => setOpenUpdateAddressModal(true);
  const handleCloseModal = () => setOpenUpdateAddressModal(false);

  const selectAddressForCheckout = () => {
    dispatch(
      selectAddress({
        _id: address._id,
        houseNumber: address.houseNumber,
        name: address.name,
        streetAddress1: address.streetAddress1,
        state: address.state,
        country: address.country,
        landmark: address.landmark,
        zipcode: address.zipcode,
        phone: address.mobileNumber,
        countrycode: address.countrycode,
        provincecode: address.provincecode
      })
    );
  };

  const handleDeleteAddress = async () => {
    try {
      await axiosInstance.delete(`address/${address._id}`);
      dispatch(emptyAddress());
      getAddresses();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full p-5 flex flex-col gap-4 border-2 border-pink-200 mb-10">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox
            onChange={selectAddressForCheckout}
            checked={selected}
            className="ring-0 focus:ring-transparent cursor-pointer"
          />
          <p className="label-medium font-bold">{address.name}</p>
        </div>
        {path === "/profile" && (
          <p
            className="label-small text-red-400 cursor-pointer"
            onClick={handleDeleteAddress}
          >
            Remove
          </p>
        )}
      </div>
      <p className="label-small pl-9">
        {address?.streetAddress1}, {address?.landmark},{address?.zipcode}
      </p>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-9 pl-9">
          <p className="label-small">Contact - {address.mobileNumber}</p>
          <p className="label-small">Country - {address.countrycode}</p>
        </div>
        {path === "/profile" && (
          <p className="label-small cursor-pointer" onClick={handleOpenModal}>
            Update
          </p>
        )}
      </div>
      <Modal show={openUpdateAddressModal} onClose={handleCloseModal}>
        <Modal.Header>Update Address</Modal.Header>
        <Modal.Body>
          <UpdateAddress
            address={address}
            handleCloseModal={handleCloseModal}
            getAddresses={getAddresses}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddressBox;
