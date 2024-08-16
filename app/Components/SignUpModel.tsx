import { Fira_Sans, Prompt } from "next/font/google";
import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

interface SignUpProps {
  handleSignupModelClose: () => void;
  setAuthType: Dispatch<SetStateAction<boolean>>;
}

const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"]
});
const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"]
});

const SignUpModel: React.FC<SignUpProps> = ({
  handleSignupModelClose,
  setAuthType
}) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
    } else if (phoneNumber.length > 10 || phoneNumber.length < 10) {
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
            phoneNumber
          }
        );
        handleSignupModelClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full p-10 md:p-0">
      <h2
        className={`${firaSans.className} mt-5 text-4xl font-extrabold text-yellow-700`}
      >
        Sign up
      </h2>
      <div className={prompt.className}>
        <p className="mt-5 text-sm font-light text-gray-500">
          Already Have An Account?{" "}
          <span
            className="hover:underline font-semibold cursor-pointer"
            onClick={() => setAuthType(true)}
          >
            SIGN IN
          </span>
        </p>
        <form className="space-y-4 md:space-y-6 mt-5" action="#">
          <div>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-gray-50 border sm:text-sm w-full p-3"
              placeholder="Full Name"
              required
            />
            {errors.fullName && (
              <div className="text-sm text-[#ff2828]">{errors.fullName}</div>
            )}
          </div>
          <div>
            <input
              type="number"
              name="phoneno"
              id="phoneno"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-gray-50 border sm:text-sm w-full p-3"
              placeholder="Phone"
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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
                  className="w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                  required
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
                ? "w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-black focus:ring-4 cursor-pointer"
                : "w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-300 focus:ring-4 cursor-not-allowed"
            }
            onClick={(e) => handleSubmit(e)}
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpModel;
