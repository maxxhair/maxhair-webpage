"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { firaSans } from "../../util/fonts";
import { baseUrl } from "../../util/axiosInstance";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { userLoggedin } from "../../store/redux/userSlice";
import { Spinner } from "flowbite-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

const LoginForm = ({ setAuthDrawerState, setAuthDrawerOpen }: { setAuthDrawerState: Dispatch<SetStateAction<string>>, setAuthDrawerOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { push } = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = pattern.test(email);

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

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setLoading(true);
        const response = await axios.post(
          `${baseUrl}login`,
          { email, password },
          { withCredentials: true }
        );
        dispatch(userLoggedin(response.data.data));
        toast.success("Login Successful");
        setAuthDrawerOpen(false);
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
        setEmail("");
        setPassword("");
        setViewPassword(false);
      }
    }
  };

  return (
    <div className="w-full">
      <h2
        className={`${firaSans.className} mt-5 text-4xl font-bold text-[#A47252]`}
      >
        Sign In
      </h2>
      <p className="mt-3 text-sm font-light leading-relaxed text-gray-500">
        If you are already a member you can login with your email address and password.
      </p>
      <div className="h-auto">
        <form className="space-y-4 mt-5" action="#">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-[#A47252] sm:text-sm w-full p-3"
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
                color="#888888"
                onClick={() => setViewPassword(false)}
              />
            ) : (
              <FaRegEye
                className="absolute top-1/2 right-4 cursor-pointer -translate-y-1/2"
                color="#888888"
                onClick={() => setViewPassword(true)}
              />
            )}
          </div>
          <div className="mt-2 flex justify-end items-center">
            <button onClick={() => setAuthDrawerState("forgotpassword")}
            type="button" className="text-blue-500 text-sm text-center no-underline hover:underline transition-all underline-offset-8">Forgot Password</button>
          </div>
          <button
            type="submit"
            className={
              !email || !password
                ? "w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-300 focus:ring-4"
                : "w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-black focus:ring-4 "
            }
            onClick={(e) => handleSubmit(e)}
            disabled={!email || !password}
          >
            {!loading ? "SIGN IN" : <Spinner size="md" color="#fff" />}
          </button>
        </form>

      </div>
      <p className="mt-3 text-sm font-light text-center text-gray-500">
        Don’t have an account yet?{" "}
        <button
          onClick={() => setAuthDrawerState("signup")}
          className="text-[#242424] hover:underline"
        >
          SIGN UP
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
