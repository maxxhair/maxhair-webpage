"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import { baseUrl } from "../util/axiosInstance";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { userLoggedin } from "../store/redux/userSlice";
import { Spinner } from "flowbite-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { firaSans } from "../util/fonts";

interface Props {
  handleSignupModelClose: () => void;
  setAuthType: Dispatch<SetStateAction<boolean>>;
}

const SignInModel: React.FC<Props> = ({
  handleSignupModelClose,
  setAuthType
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        setLoading(false);
        handleSignupModelClose();
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full p-10 md:p-0">
      <h2
        className={`${firaSans.className} mt-5 text-4xl font-extrabold text-yellow-700`}
      >
        Sign In
      </h2>
      <div>
        <p className="mt-5 text-sm font-light text-gray-500">
          Don’t have an account yet?{" "}
          <span
            className="hover:underline cursor-pointer font-semibold"
            onClick={() => setAuthType(false)}
          >
            SIGN UP
          </span>
        </p>
        <form className="space-y-4 md:space-y-6 mt-5" action="#">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border sm:text-sm w-full p-3"
              placeholder="Email"
              required
            />
            {errors.email && (
              <div className="text-sm text-[#ff2828]">{errors.email}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border sm:text-sm w-full p-3"
              required
            />
            {errors.password && (
              <div className="text-sm text-[#ff2828]">{errors.password}</div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border  "
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className=" text-zinc-500 text-sm">
                  Remember me
                </label>
              </div>
            </div>
            <a href="#" className="text-sm font-medium  hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className={
              !email || !password
                ? "w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-300 focus:ring-4"
                : "w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-black focus:ring-4 "
            }
            onClick={(e) => handleSubmit(e)}
          >
            {!loading ? "SIGN IN" : <Spinner size="md" color="#fff" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModel;
