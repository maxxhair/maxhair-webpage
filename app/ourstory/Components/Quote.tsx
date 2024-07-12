import Link from "next/link";
import React from "react";
import { firaSansLight } from "../../util/fonts";

function Quote() {
  return (
    <div className="relative flex flex-col justify-center w-full min-h-[80vh] px-[32px] py-[32px] pl-[5vw] gap-10 xl:mt-10">
      <span
        className={`${firaSansLight.className} xl:display-large lg:display-medium display-small w-[90%]`}
      >
        Our extensions are more than just products; they are a testament to our
        dedication to quality, ethics, and customer satisfaction.
      </span>
      <div className="w-[90%]">
        <Link
          href="shop"
          className={`text-[#FAFAFA] cursor-pointer bg-[#242424] lg:label-large md:label-medium label-small capitalize w-[50%] py-[15px] px-[50px] `}
        >
          Shop Now
        </Link>
      </div>
      <div className="h-full w-1/2 flex items-center absolute top-0 right-0 -z-10">
        <div className="h-[80%] w-full bg-[#F2ECE2]"></div>
      </div>
    </div>
  );
}

export default Quote;
