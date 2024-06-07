import { Modal, Radio } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { selectAddress } from "../store/redux/addressesSlice";
import toast from "react-hot-toast";
import axiosInstance from "../util/axiosInstance";
import UpdateAddress from "./UpdateAddress";

interface Props {
  address: {
    _id: string;
    houseNumber: string;
    streetAddress1: string;
    state: string;
    country: string;
    landmark: string;
    zipcode: string;
    mobileNumber: string;
  };
  getAddresses: () => {};
}

const AddressBox: React.FC<Props> = ({ address, getAddresses }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedAddress = useSelector((state: RootState) => state.address._id);
  const selected = selectedAddress === address._id;

  const [openUpdateAddressModal, setOpenUpdateAddressModal] = useState(false);

  const handleOpenModal = () => setOpenUpdateAddressModal(true);
  const handleCloseModal = () => setOpenUpdateAddressModal(false);

  const selectAddressForCheckout = () => {
    // dispatch(
    //   selectAddress({
    //     _id: address._id,
    //     email: address.email,
    //     address: address.address,
    //     landmark: address.landmark,
    //     zipcode: address.zipCode,
    //     phone: address.contact
    //   })
    // );
  };

  const handleDeleteAddress = async () => {
    try {
      await axiosInstance.delete(`address/${address._id}`);
      getAddresses();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full p-5 flex flex-col gap-4 border-2 border-pink-200 mb-10">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Radio onClick={selectAddressForCheckout} checked={selected} />
          <p className="label-medium font-bold">{address.landmark}</p>
        </div>
        <p
          className="label-small text-red-400 cursor-pointer"
          onClick={handleDeleteAddress}
        >
          Remove
        </p>
      </div>
      <p className="label-small pl-9">
        {address?.houseNumber}, {address?.streetAddress1}, {address?.landmark},{" "}
        {address?.zipcode}
      </p>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-9 pl-9">
          <p className="label-small">Contact - {address.mobileNumber}</p>
          <p className="label-small">Country - {address.country}</p>
        </div>
        <p className="label-small cursor-pointer" onClick={handleOpenModal}>
          Update
        </p>
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
