import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import axiosInstance from "../util/axiosInstance";
import { selectAddress } from "../store/redux/addressesSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
  provincecode: string;
  countrycode: string;
}

interface Props {
  getuserAddresses: () => NonNullable<unknown>;
  handleCloseModal: () => void;
}

const AddAddressForm: React.FC<Props> = ({
  getuserAddresses,
  handleCloseModal
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user as any);
  const [addressFormData, setAddressFormData] = useState<Address>({
    name: "",
    houseNumber: "",
    streetAddress1: "",
    state: "",
    country: "",
    landmark: "",
    zipcode: "",
    mobileNumber: "",
    provincecode: "",
    countrycode: ""
  });

  const handleInputChange = (e: any) => {
    setAddressFormData({
      ...addressFormData,
      [e.target.id]: e.target.value
    });
  };
  const handlePhoneInputChange = (value: any) => {
    setAddressFormData({ ...addressFormData, mobileNumber: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    try {
      const body = {
        name: addressFormData.name,
        streetAddress1: addressFormData.streetAddress1,
        state: addressFormData.state,
        landmark: addressFormData.landmark,
        zipcode: addressFormData.zipcode,
        mobileNumber: addressFormData.mobileNumber,
        user: user._id,
        provincecode: addressFormData.provincecode,
        countrycode: addressFormData.countrycode
      };
      const res = await axiosInstance.post("address", body);
      dispatch(
        selectAddress({
          _id: res.data.data._id,
          name: res.data.data.name,
          streetAddress1: res.data.data.streetAddress1,
          state: res.data.data.state,
          landmark: res.data.data.landmark,
          zipcode: res.data.data.zipcode,
          phone: res.data.data.mobileNumber,
          provincecode: res.data.data.provincecode,
          countrycode: res.data.data.countrycode
        })
      );
      handleCloseModal();
      getuserAddresses();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        id="name"
        placeholder="Full Name"
        onChange={handleInputChange}
        value={addressFormData.name}
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
        placeholder="City or Landmark"
        required
        onChange={handleInputChange}
        value={addressFormData.landmark}
        className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
      />
      <input
        id="state"
        type="text"
        placeholder="State"
        required
        onChange={handleInputChange}
        value={addressFormData.state}
        className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
      />
      <div className="flex flex-1 gap-3">
        <input
          required
          id="provincecode"
          type="text"
          placeholder="Province code"
          onChange={handleInputChange}
          value={addressFormData.provincecode}
          className="flex-grow border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
        />
        <input
          required
          id="countrycode"
          type="text"
          placeholder="Country Code"
          onChange={handleInputChange}
          value={addressFormData.countrycode}
          className="flex-grow border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
        />
      </div>
      <input
        id="zipcode"
        placeholder="344XXX"
        type="text"
        required
        onChange={handleInputChange}
        value={addressFormData.zipcode}
        className="w-full border-[1px] border-[#D1D1D1] focus:border-[#A47252] focus:ring-0 mt-[5px]"
      />
      <PhoneInput
        enableSearch
        country={"us"}
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
  );
};

export default AddAddressForm;
