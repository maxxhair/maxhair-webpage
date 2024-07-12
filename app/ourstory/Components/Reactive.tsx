import Image from "next/image";
import { OurStory4, rings } from "../../util/images";
import { firaSans, firaSansBold, firaSansMedium } from "../../util/fonts";

function Reactive() {
  return (
    <div className="h-auto w-screen relative flex flex-col justify-center items-center gap-20 mt-24 px-[32px] py-[32px] ">
      <Image
        src={rings}
        alt=""
        className="absolute top-0 right-[10%] z-10 xl:block hidden"
      />
      <span
        className={`${firaSansMedium.className} lg:headline-large md:headline-medium headline-small text-black`}
      >
        The Maxx DIFFERENCE
      </span>
      <div className="w-full h-screen pl-24 relative">
        <span
          className={`${firaSansBold.className} xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[60.4px] text-90 flex flex-col items-center absolute bottom-10 right-0 uppercase text-shadow-gold lg:display-large md:display-medium display-small z-10`}
        >
          <span>Sourcing</span> <span>Excellence</span>
        </span>
        <div className="w-[70%] bg-[#885C46] h-[90%] p-10 flex justify-center relative">
          <span
            className={`${firaSansBold.className} lg:block hidden text-nowrap text-90 absolute top-10 left-0 uppercase text-shadow-gold 2xl:text-[150px] xl:text-[110px] md:text-[90px] text-[70px] `}
          >
            Sourcing Excellence
          </span>
          <div className="flex flex-col gap-5 text-[#fafafa]">
            <span
              className={`${firaSans.className}  lg:title-large md:title-medium title-small`}
            >
              Sourcing Excellence
            </span>
            <span className=" lg:body-large md:body-medium body-small xl:w-[450px] lg:w-[400px] md:w-[80%] font-extralight w-full leading-[35.24px]">
              Our team of highly professional SMEs follows a thorough 110-point
              check to identify the best raw material. Our manufacturing process
              begins right at the source, ensuring only the highest quality hair
              is selected.
            </span>
          </div>
          <Image
            src={OurStory4}
            alt=""
            className="w-full h-auto absolute left-[30%] -bottom-[10%] border-1 border-[#fafafa]"
          />
        </div>
      </div>
    </div>
  );
}

export default Reactive;
