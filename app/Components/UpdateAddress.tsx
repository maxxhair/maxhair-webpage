import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../util/axiosInstance";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { LoggedUser } from "../types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
  handleCloseModal: () => void;
}

const UpdateAddress: React.FC<Props> = ({
  address,
  handleCloseModal,
  getAddresses
}) => {
  const user = useSelector((state: RootState) => state.user.user as LoggedUser);
  const [fomState, setFormState] = useState({
    name: address.name,
    streetAddress1: address.streetAddress1,
    landmark: address.landmark,
    state: address.state,
    country: address.country,
    zipcode: address.zipcode,
    mobileNumber: address.mobileNumber,
    provincecode: address.provincecode,
    countrycode: address.countrycode
  });

  const handleInputChange = (e: any) => {
    setFormState({
      ...fomState,
      [e.target.id]: e.target.value
    });
  };

  const handlePhoneInputChange = (value: any) => {
    setFormState({ ...fomState, mobileNumber: value });
  };

  const handleUpdateAddress: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.put(
        `address/${address._id}`,
        fomState,
        { headers: { Authorization: `Bearer ${user.cookie}` } }
      );
      getAddresses();
      handleCloseModal();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <React.Fragment>
      <form className="space-y-6" onSubmit={handleUpdateAddress}>
        <input
          type="text"
          required
          id="name"
          placeholder="Full Name"
          onChange={handleInputChange}
          value={fomState.name}
          className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
        />
        <input
          id="streetAddress1"
          type="text"
          placeholder="Street Address"
          required
          onChange={handleInputChange}
          value={fomState.streetAddress1}
          className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
        />
        <input
          id="landmark"
          type="text"
          placeholder="Landmark"
          required
          onChange={handleInputChange}
          value={fomState.landmark}
          className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
        />
        <input
          id="state"
          type="text"
          placeholder="State"
          onChange={handleInputChange}
          value={fomState.state}
          className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
        />
        <div className="flex flex-1 gap-3">
          <input
            required
            id="provincecode"
            type="text"
            placeholder="Province code"
            onChange={handleInputChange}
            value={fomState.provincecode}
            className="flex-grow border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
          />
          <input
            required
            id="countrycode"
            type="text"
            placeholder="Country Code"
            onChange={handleInputChange}
            value={fomState.countrycode}
            className="flex-grow border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
          />
        </div>
        <input
          id="zipcode"
          placeholder="344XXX"
          type="text"
          required
          onChange={handleInputChange}
          value={fomState.zipcode}
          className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
        />
        <PhoneInput
          enableSearch
          country={"us"}
          value={fomState.mobileNumber}
          inputProps={{
            id: "mobileNumber",
            required: true,
            className:
              "w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px] pl-12"
          }}
          onChange={handlePhoneInputChange}
        />
        <button
          type="submit"
          className="bg-black uppercase text-white px-4 py-2 text-lg tracking-wider"
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default UpdateAddress;
