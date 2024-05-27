import { Radio } from "flowbite-react";
import React from "react";

const AddressBox = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-4 border-2 border-pink-200 mb-10">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Radio />
          <p className="label-medium font-bold">Address 1</p>
        </div>
        <p className="label-small text-red-400 cursor-pointer">Remove</p>
      </div>
      <p className="label-small pl-9">Laxman Balla</p>
      <p className="label-small pl-9">
        1131 Dusty Townline, Jacksonville, TX 40322
      </p>
      <div className="flex items-center gap-9 pl-9">
        <p className="label-small">Contact - +919490723391</p>
        <p className="label-small">Email - laxman@wielabs.com</p>
      </div>
    </div>
  );
};

export default AddressBox;
