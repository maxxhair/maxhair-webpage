"use client";
import { Fira_Sans, Prompt } from "next/font/google";

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const LoginForm = () => {
  return (
    <div className=" max-w-sm">
      <div>
        <h2
          className={`${firaSans.className} mt-5 text-4xl font-extrabold text-yellow-700`}
        >
          Sign In
        </h2>
      </div>
      <div className={prompt.className}>
        <p className=" mt-5 text-sm font-light text-gray-500">
          Don’t have an account yet?{" "}
          <a
            href="#"
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
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
