import Image from "next/image";
import { OurStory4, rings } from "../../util/images";
import { firaSans, firaSansBold, firaSansMedium } from "../../util/fonts";
import DivAnimation from "./Animation/DivAnimation";
import ImageAnimation from "./Animation/ImageAnimation";

function Reactive() {
  return (
    <div className="h-auto w-screen relative flex flex-col justify-center items-center xl:gap-20 lg:gap-14 md:gap-9 gap-5 xl:mt-20 lg:mt-10 md:mt-5 mt-0 px-[32px] py-[32px] ">
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
      <div className="w-full 2xl:min-h-[950px] xl:min-h-[850px] lg:min-h-[800px] 2xl:h-[95vh] xl:h-[85vh] lg:h-[80vh] xl:pl-24 lg:pl-16 md:pl-8 pl-0 relative">
        <span
          className={`${firaSansBold.className} xl:h-auto h-full  xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[60.4px] text-90 flex lg:flex-col xl:gap-0 gap-5 items-center justify-center absolute xl:bottom-10 bottom-0 right-0 uppercase text-shadow-gold lg:display-large md:display-medium display-small z-10`}
        >
          <span>Sourcing</span> <span>Excellence</span>
        </span>
        <div className=" xl:w-[65%] lg:w-[70%] w-[85%] bg-transparent h-[90%] p-10 flex lg:flex-row flex-col gap-10 justify-center relative">
          <div className="h-full w-full absolute top-0 left-0 -z-10">
            <DivAnimation color={"#885C46"} />
          </div>
          <div className="absolute top-0 left-0 h-full w-[20%] flex justify-center">
            <span
              className={`${firaSansBold.className} lg:block hidden text-nowrap text-90  uppercase text-shadow-gold 2xl:text-[150px] xl:text-[110px] md:text-[90px] text-[70px] `}
            >
              Sourcing Excellence
            </span>
          </div>

          <div className="flex flex-col lg:gap-5 gap-3 text-[#fafafa]">
            <span
              className={`${firaSans.className}  lg:title-large md:title-medium title-small`}
            >
              Sourcing Excellence
            </span>
            <span className=" lg:body-large md:body-medium body-small xl:w-[450px] lg:w-[400px] md:w-[80%] font-extralight w-full lg:leading-[35.24px] md:leading-[28px] leading-[22px]">
              Our team of highly professional SMEs follows a thorough 110-point
              check to identify the best raw material. Our manufacturing process
              begins right at the source, ensuring only the highest quality hair
              is selected.
            </span>
          </div>
          <div className="w-full h-auto lg:absolute 2xl:left-[30%] xl:left-[25%] lg:left-[20%] 2xl:-bottom-[10%] xl:-bottom-[7%] lg:-bottom-[5%] border-1 border-[#fafafa]">
            <ImageAnimation
              image={OurStory4}
              alternative="Sourcing Excellence"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reactive;
