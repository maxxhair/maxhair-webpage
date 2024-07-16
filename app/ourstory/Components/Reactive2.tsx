import { firaSans, firaSansBold } from "../../util/fonts";
import { OurStory5 } from "../../util/images";
import DivAnimation from "./Animation/DivAnimation";
import ImageAnimation from "./Animation/ImageAnimation";

function Reactive2() {
  return (
    <div className="2xl:min-h-[950px] xl:min-h-[850px] xl:px-0 xl:py-0 px-[32px] py-[32px] 2xl:h-screen xl:h-[90vh] h-auto w-screen flex justify-end xl:items-end items-center relative">
      <div className="xl:w-[80%] w-[65%] px-[20px] py-[20px] xl:h-[90%] h-full bg-transparent  flex flex-col justify-center xl:items-center relative">
        <div className="h-full w-full absolute top-0 left-0 -z-10">
          <DivAnimation color={"#885C46"} />
        </div>

        <span
          className={`${firaSansBold.className} xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[60.4px] text-90 xl:flex hidden flex-col items-center absolute top-10 left-0 uppercase text-shadow-white lg:display-large md:display-medium display-small z-10`}
        >
          <span>Quality</span> <span>Assurance</span>
        </span>
        <div className="h-auto 2xl:-translate-y-[10%] xl:-translate-y-[15%] -translate-y-[20%] xl:w-[60%] w-full">
          <ImageAnimation image={OurStory5} alternative="Quality Assurance" />
        </div>
        <div className="flex flex-col lg:gap-5 gap-1 text-[#fafafa]">
          <span
            className={`${firaSans.className}  lg:title-large md:title-medium title-small`}
          >
            Quality Assurance
          </span>
          <span className=" lg:body-large md:body-medium body-small xl:w-[450px] w-full font-extralight lg:leading-[35.24px] md:leading-[28px] leading-[22px]">
            Each bundle of hair goes through multi-stage processing and numerous
            quality checks. Our rigorous process ensures that only the finest
            hair reaches product development.
          </span>
        </div>

        <span
          className={`${firaSansBold.className} xl:block flex flex-col justify-center items-center h-full xl:mt-10 xl:relative absolute xl:top-0 lg:top-[10%] top-0 xl:left-0 -left-[50%] text-nowrap uppercase xl:text-shadow-white text-shadow-gold xl:text-0 text-90 2xl:text-[140px] xl:text-[110px] lg:text-[90px] md:text-[70px] text-[50px] xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[60.4px]`}
        >
          <span>Quality</span> <span>Assurance</span>
        </span>
      </div>
    </div>
  );
}

export default Reactive2;
