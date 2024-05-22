import Image from "next/image";
import LoginForm from "../Components/LoginForm";
import { bgimg, logo } from "../util/images";
import React from "react";

export default function Page() {
  return (
    <div className="flex lg:flex-row flex-col bg-white text-black w-screen">
      <div className="lg:w-1/2 w-full max-lg:hidden">
        <Image
          src={bgimg}
          alt="bgimg error"
          className=" lg:object-cover lg:h-screen "
        />
      </div>
      <div className="w-full lg:w-1/2 pt-24 lg:pl-16 ">
        <Image
          src={logo}
          alt="logo-error"
          className="max-lg:m-auto h-24 w-1/2"
        />
        <LoginForm />
      </div>
    </div>
  );
}
