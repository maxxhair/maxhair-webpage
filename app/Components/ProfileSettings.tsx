import { TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface UserDetails {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
}

const ProfileSettings = () => {
  const userDetails = useSelector(
    (state: RootState) => state.user.user as UserDetails
  );

  return (
    <div className="w-full">
      <form className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="">
          <p className="label-medium pb-2">Full Name :</p>
          <TextInput
            className="bg-transparent"
            type="text"
            placeholder="Full Name"
            value={userDetails.fullName}
          />
        </div>
        <div className="">
          <p className="label-medium pb-2">Email :</p>
          <TextInput
            className="bg-transparent"
            type="email"
            placeholder="Email Id"
            value={userDetails.email}
          />
        </div>
        <div className="">
          <p className="label-medium pb-2">Phone Number :</p>
          <TextInput
            className="bg-transparent"
            type="number"
            placeholder="Phone Number"
            value={userDetails.phoneNumber}
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
