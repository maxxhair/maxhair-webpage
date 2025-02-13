"use client";

import { Fira_Sans, Prompt } from "next/font/google";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"]
});
const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"]
});

const SignupForm = ({ setAuthDrawerState }: { setAuthDrawerState: Dispatch<SetStateAction<string>> }) => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPssword] = useState<Boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  console.log(phoneNumber.length);

  const validateForm = () => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = pattern.test(email);

    if (!fullName) {
      newErrors.fullName = "Fullname is required";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail) {
      newErrors.email = "Enter correct Email";
      isValid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (phoneNumber.length < 10 || phoneNumber.length > 14) {
      newErrors.phoneNumber = "Enter Valid Phone Number";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}signup`,
          {
            email,
            password,
            fullName,
            phoneNumber: `+${phoneNumber}`
          }
        );
        setAuthDrawerState("signin");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full">
      <h2
        className={`${firaSans.className} mt-5 text-4xl font-bold text-[#A47252]`}
      >
        Sign Up
      </h2>
      <p className="mt-3 text-sm font-light leading-relaxed text-gray-500">
        Become a member and enjoy exclusive promotions.
      </p>
      <div className={prompt.className}>

        <form className="space-y-4 md:space-y-6 mt-5" action="#">
          <div>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-gray-50 border-[#A47252] border sm:text-sm w-full p-3"
              placeholder="Full Name"
              required
            />
            {errors.fullName && (
              <div className="text-sm text-[#ff2828]">{errors.fullName}</div>
            )}
          </div>
          <div>
            {/* <input
              type="number"
              name="phoneno"
              id="phoneno"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-gray-50 border sm:text-sm w-full p-3"
              placeholder="Phone"
              required
            /> */}
            <PhoneInput
              enableSearch
              country={"us"}
              value={phoneNumber}
              containerClass="border-[#A47252]"
              buttonClass="border-[#A47252]"
              dropdownClass="border-[#A47252]"
              inputProps={{
                id: "phone",
                required: true,
                className: "bg-gray-50 border-[#A47252] border sm:text-sm w-full pl-12 p-3"
              }}
              onChange={(value) => setPhoneNumber(value)}
            />
            {errors.phoneNumber && (
              <div className="text-sm text-[#ff2828]">{errors.phoneNumber}</div>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border-[#A47252] border sm:text-sm w-full p-3"
              placeholder="Email"
              required
            />
            {errors.email && (
              <div className="text-sm text-[#ff2828]">{errors.email}</div>
            )}
          </div>
          <div className="relative">
            <input
              type={viewPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-gray-50 border-[#A47252] border sm:text-sm w-full p-3"
              required
            />
            {errors.password && (
              <div className="text-sm text-[#ff2828]">{errors.password}</div>
            )}
            {viewPassword ? (
              <FaRegEyeSlash
                className="absolute top-1/2 right-4 cursor-pointer -translate-y-1/2"
                onClick={() => setViewPssword(false)}
              />
            ) : (
              <FaRegEye
                className="absolute top-1/2 right-4 cursor-pointer -translate-y-1/2"
                onClick={() => setViewPssword(true)}
              />
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-[#A47252] bg-gray-50 focus:ring-0"
                  required
                  checked
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className=" text-zinc-500 text-sm">
                  I agree with <b>Privacy Policy</b> and <b>Terms of Use</b>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={
              email && password && fullName && phoneNumber
                ? "w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-black focus:ring-4 "
                : "w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-300 focus:ring-4 "
            }
            onClick={(e) => handleSubmit(e)}
            disabled={!email || !password || !fullName || !phoneNumber}
          >
            CREATE ACCOUNT
          </button>
        </form>
        <p className="mt-5 text-sm font-light text-center text-gray-500">
          Already Have An Account?{" "}
          <button onClick={() => setAuthDrawerState("signin")}
            className="text-[#242424] hover:underline "
          >
            SIGN IN
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
