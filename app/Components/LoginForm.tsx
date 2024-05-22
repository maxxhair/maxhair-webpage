"use client";

import React, { useState } from "react";
import { firaSans } from "../util/fonts";
import axiosInstance from "../util/axiosInstance";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axiosInstance
        .post("login", {
          email,
          password,
        })
        .then((res) => {
          console.log("success login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="max-lg:m-auto max-w-sm">
      <div>
        <h2
          className={`${firaSans.className} mt-5 text-4xl font-extrabold text-yellow-700`}
        >
          Sign In
        </h2>
      </div>
      <div>
        <p className="mt-5 text-sm font-light text-gray-500">
          Don’t have an account yet?{" "}
          <a
            href="signup"
            className="text-primary-600 hover:underline font-semibold"
          >
            SIGN UP
          </a>
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
            className="w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-300 focus:ring-4  "
            onClick={(e) => handleSubmit(e)}
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
