import Marquee from "react-fast-marquee";
import { firaSans, firaSansBold } from "../../util/fonts";
import Image from "next/image";
import { OurStory5 } from "../../util/images";

function Reactive2() {
  return (
    <div className="h-screen w-screen flex justify-end items-end ">
      <div className="w-[80%] h-[90%] bg-[#885C46] flex flex-col justify-center items-center relative">
        <span
          className={`${firaSansBold.className} xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[60.4px] text-90 flex flex-col items-center absolute top-10 left-0 uppercase text-shadow-white lg:display-large md:display-medium display-small z-10`}
        >
          <span>Quality</span> <span>Assurance</span>
        </span>
        <Image
          src={OurStory5}
          alt=""
          className="h-[60%] -translate-y-5 w-auto"
        />
        <div className="flex flex-col gap-5 text-[#fafafa]">
          <span
            className={`${firaSans.className}  lg:title-large md:title-medium title-small`}
          >
            Quality Assurance
          </span>
          <span className=" lg:body-large md:body-medium body-small xl:w-[450px] lg:w-[400px] md:w-[80%] font-extralight w-full leading-[35.24px]">
            Each bundle of hair goes through multi-stage processing and numerous
            quality checks. Our rigorous process ensures that only the finest
            hair reaches product development.
          </span>
        </div>
        <Marquee className="overflow-hidden">
          <span
            className={`${firaSansBold.className} text-nowrap uppercase marquee text-shadow-white text-[156px] `}
          >
            Quality Assurance
          </span>
        </Marquee>
      </div>
    </div>
  );
}

export default Reactive2;
