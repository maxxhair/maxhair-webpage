import Link from "next/link";
import { firaSansLight } from "../../util/fonts";
import DivAnimation from "./Animation/DivAnimation";

function Quote() {
  return (
    <div className="relative h-auto lg:min-h-[800px] min-h-[730px] flex flex-col justify-center w-full px-[32px] py-[32px] pl-[5vw] gap-10 xl:mt-8 lg:mt-4 md:mt-2 mt-0">
      <span
        className={`${firaSansLight.className} md:headline-large headline-medium max-w-[1000px] w-full  leading-[60px]`}
      >
        Our extensions are more than just products; they are a testament to our
        dedication to quality, ethics, and customer satisfaction.
      </span>
      <div className="w-[90%]">
        <Link
          href="shop"
          className={`text-[#FAFAFA] cursor-pointer bg-[#242424] md:label-medium label-small capitalize w-[50%] py-[10px] px-[50px]`}
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
