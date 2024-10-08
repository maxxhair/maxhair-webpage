import Link from "next/link";
import { firaSansLight } from "../../util/fonts";
import DivAnimation from "./Animation/DivAnimation";

function Quote() {
  return (
    <div className="relative xl:h-screen h-[58vh] lg:min-h-[800px] min-h-[730px] flex flex-col justify-center w-full px-[32px] py-[32px] pl-[5vw] gap-10 xl:mt-8 lg:mt-4 md:mt-2 mt-0">
      <span
        className={`${firaSansLight.className} xl:display-large lg:display-medium display-small md:w-[90%] w-full xl:leading-[110px] lg:leading-[90px] md:leading-[70px] leading-[60px]`}
      >
        Our extensions are more than just products; they are a testament to our
        dedication to quality, ethics, and customer satisfaction.
      </span>
      <div className="w-[90%]">
        <Link
          href="shop"
          className={`text-[#FAFAFA] cursor-pointer bg-[#242424] lg:label-large md:label-medium label-small capitalize w-[50%] py-[15px] px-[50px]`}
        >
          Shop Now
        </Link>
      </div>
      <div className="h-full w-1/2 flex items-center absolute top-0 right-0 -z-10">
        <div className="h-[80%] w-full">
          <DivAnimation color="#F2ECE2" />
        </div>
      </div>
    </div>
  );
}

export default Quote;
