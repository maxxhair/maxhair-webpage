import { TextInput } from "flowbite-react";
import React from "react";

const ProfileSettings = () => {
  return (
    <div className="w-full">
      <form className="w-1/2 flex flex-col gap-6">
        <div className="">
          <p className="label-medium pb-2">Full Name :</p>
          <TextInput
            className="bg-transparent"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="">
          <p className="label-medium pb-2">Email :</p>
          <TextInput
            className="bg-transparent"
            type="email"
            placeholder="Email Id"
          />
        </div>
        <div className="">
          <p className="label-medium pb-2">Phone Number :</p>
          <TextInput
            className="bg-transparent"
            type="number"
            placeholder="Phone Number"
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
