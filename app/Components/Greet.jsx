import Link from "next/link";
import { firaSans, firaSansLight } from "../util/fonts";
import Calc from "./_greet/Calc";

function Greet() {
  return (
    <div
      className={`text-center w-full lg:h-[600px] md:h-[500px] h-[400px] bg-[#FAFAFA]`}
    >
      <div className={` w-full h-full relative flex justify-center`}>
        <Calc />
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover video video-container"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="p-[20px] flex flex-col gap-[20px] color-shift items-center bottom-0 absolute mb-10">
          <span
            className={`${firaSans.className} flyouts-down flex flex-col w-full lg:display-medium md:headline-large headline-medium font-[700]`}
          >
            <span>Quality is our Priority!</span>
          </span>

          <p
            className={`${firaSansLight.className} flyouts-left lg:label-large md:label-medium label-small md:w-[500px] w-full`}
          >
            One stop shop for all your premium hair extension needs. Allow us to
            make your dream hair come true!
          </p>
          <Link
            href="shop"
            className="uppercase flyouts-right bg-[#F9F6F3] text-[#242424] px-[20px] py-[10px] font-[600] lg:body-large md:body-medium body-small"
          >
            shop now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Greet;
