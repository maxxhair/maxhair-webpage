import { Fira_Sans, Prompt } from "next/font/google";
import React from "react";

const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"]
});
const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"]
});

const SignupForm = () => {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-xl">
      <h2
        className={`${firaSans.className} mt-5 text-4xl font-extrabold text-yellow-700`}
      >
        Sign up
      </h2>
      <div className={prompt.className}>
        <p className="mt-5 text-sm font-light text-gray-500">
          Already Have An Account?{" "}
          <a
            href="signin"
            className="text-primary-600 hover:underline font-semibold"
          >
            SIGN IN
          </a>
        </p>

        <form className="space-y-4 md:space-y-6 mt-5" action="#">
          <div>
            <input
              type="text"
              name="text"
              id="fullname"
              className="bg-gray-50 border sm:text-sm w-full p-3"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="phoneno"
              id="phoneno"
              className="bg-gray-50 border sm:text-sm w-full p-3"
              placeholder="Phone"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border sm:text-sm w-full p-3"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-gray-50 border sm:text-sm w-full p-3"
              required
            />
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
            className="w-full text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-300 focus:ring-4  "
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
