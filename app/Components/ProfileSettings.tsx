"use client";

import { TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import toast from "react-hot-toast";
import axiosInstance from "../util/axiosInstance";
import { userLoggedin } from "../store/redux/userSlice";
import { LoggedUser } from "../types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface UserDetails {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}

const ProfileSettings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userDetails = useSelector(
    (state: RootState) => state.user.user as LoggedUser
  );

  const [user, setUser] = useState<UserDetails>({
    _id: "",
    fullName: "",
    email: "",
    phoneNumber: ""
  });

  const handleInputChange = (e: any) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const handlePhoneInputChange = (value: any) => {
    setUser({ ...user, phoneNumber: value });
  };

  useEffect(() => {
    if (userDetails) {
      setUser({
        _id: userDetails?.user?._id,
        fullName: userDetails?.user?.fullName,
        email: userDetails?.user?.email,
        phoneNumber: userDetails?.user?.phoneNumber
      });
    }
  }, [userDetails]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`users/${user._id}`, {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber
      });
      toast.success("User Details Updated");
      const updatedUserDetails = {
        ...userDetails,
        user: response.data.data
      };
      dispatch(userLoggedin(updatedUserDetails));
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full">
      <form
        className="w-full lg:w-1/2 flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div className="">
          <p className="label-medium pb-2">Full Name :</p>
          <TextInput
            className="bg-transparent"
            type="text"
            placeholder="Full Name"
            id="fullName"
            value={user?.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <p className="label-medium pb-2">Email :</p>
          <TextInput
            className="bg-transparent"
            type="email"
            placeholder="Email Id"
            id="email"
            value={user?.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <p className="label-medium pb-2">Phone Number :</p>
          <PhoneInput
            enableSearch
            country={"us"}
            value={user?.phoneNumber}
            inputProps={{
              id: "phone",
              required: true,
              className: "bg-gray-50 border sm:text-sm w-full pl-12 p-3"
            }}
            onChange={handlePhoneInputChange}
          />
        </div>
        <button className="bg-black text-white py-3 px-6 text-xl w-fit">
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
