import { Radio } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { selectAddress } from "../store/redux/addressesSlice";

interface Props {
  address: {
    _id: string;
    name: string;
    contact: string;
    email: string;
    address: string;
    landmark: string;
    zipCode: string;
  };
}

const AddressBox: React.FC<Props> = ({ address }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedAddress = useSelector((state: RootState) => state.address._id);
  const selected = selectedAddress === address._id;

  const selectAddressForCheckout = () => {
    dispatch(
      selectAddress({
        _id: address._id,
        name: address.name,
        email: address.email,
        address: address.address,
        landmark: address.landmark,
        zipcode: address.zipCode,
        phone: address.contact
      })
    );
  };

  return (
    <div className="w-full p-5 flex flex-col gap-4 border-2 border-pink-200 mb-10">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Radio onClick={selectAddressForCheckout} checked={selected} />
          <p className="label-medium font-bold">Address 1</p>
        </div>
        <p className="label-small text-red-400 cursor-pointer">Remove</p>
      </div>
      <p className="label-small pl-9">{address.name}</p>
      <p className="label-small pl-9">{address.address}</p>
      <div className="flex items-center gap-9 pl-9">
        <p className="label-small">Contact - {address.contact}</p>
        <p className="label-small">Email - {address.email}</p>
      </div>
    </div>
  );
};

export default AddressBox;
