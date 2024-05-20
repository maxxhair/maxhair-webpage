import Image from "next/image";
import SignupForm from "../Components/SignupForm";
import { bgimg, logo } from "../util/images";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-row bg-white text-black">
      <div className="w-1/2 ">
        <Image
          src={bgimg}
          alt="bgimg error"
          className="w-full object-cover h-screen"
        />
      </div>

      <div className="w-1/2 pt-24 pl-20">
        <Image src={logo} alt="logo-error" />
        <SignupForm />
      </div>
    </div>
  );
}
