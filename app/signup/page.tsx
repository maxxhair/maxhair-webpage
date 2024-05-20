import Image from "next/image";
import SignupForm from "../Components/SignupForm";
import { bgimg, logo } from "../util/images";

export default function Page() {
  return (
    <div className="flex flex-row bg-white text-black">
      <div className="w-6/12 ">
        <Image
          src={bgimg}
          alt="bgimg error"
          className="w-full object-cover h-screen"
        />
      </div>

      <div className="w-6/12 mt-24 ml-20">
        <Image src={logo} alt="logo-error" />
        <SignupForm />
      </div>
    </div>
  );
}
