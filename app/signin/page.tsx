/* eslint-disable @next/next/no-img-element */
import LoginForm from "../Components/LoginForm";
import React from "react";

export default function Page() {
  return (
    <div className="flex lg:flex-row flex-col bg-white w-full">
      <img
        src="/kareya-saleh-tLKOj6cNwe0-unsplash 2.png"
        alt="bgimg error"
        className="object-cover w-full h-[50vh] lg:w-1/2 lg:h-screen "
      />
      <div className="w-full lg:w-1/2 grid place-items-center">
        <LoginForm />
      </div>
    </div>
  );
}
