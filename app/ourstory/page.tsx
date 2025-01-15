import Image from "next/image";
import {
  OurStory1,
  OurStoryWig1,
  OurStoryWig2,
  OurStoryWig3,
  OurStoryWig4
} from "../util/images";
import Path from "./Components/Path";
import { firaSans, firaSansMedium } from "../util/fonts";
import Intro from "./Components/Intro";
import OurMission from "./Components/OurMission";
import Quote from "./Components/Quote";
import CraftsManship from "./Components/CraftsManship";
import Reactive from "./Components/Reactive";
import Reactive2 from "./Components/Reactive2";

const OurStory = () => {
  return (
    <div className="mt-20 md:mt-24 ">
      <div className="w-screen min-h-[800px] h-screen relative flex justify-between p-10 items-center">
        <Image
          src={OurStory1}
          alt="Header Image"
          className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        />
        <div className="flex flex-col h-full justify-evenly items-center">
          <Image
            src={OurStoryWig1}
            alt="wig-1"
            className="lg:w-[300px] md:w-[200px] w-[120px] lg:h-[300px] md:h-[200px] h-[120px] -rotate-6"
          />
          <Image
            src={OurStoryWig2}
            alt="wig-2"
            className="lg:w-[300px] md:w-[200px] w-[120px] lg:h-[300px] md:h-[200px] h-[120px] -rotate-6 scale-90 md:translate-x-28 translate-x-12 translate-y-10"
          />
        </div>
        <div className="z-10 absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-center gap-5">
          <span
            className={`text-[#B1845E] lg:display-medium md:display-small headline-large ${firaSansMedium.className}`}
          >
            Our Story
          </span>
          <div className="flex flex-col gap-1">
            <span className="lg:label-large md:label-medium label-small text-[#F6F6F6] ">
              Maxx Hair Extensions was founded to reinstate trust in{" "}
            </span>
            <span
              className={`${firaSans.className} text-[#F6F6F6] lg:title-large md:title-medium title-small`}
            >
              High-Quality, Ethically Sourced, Indian Human Hair
            </span>
          </div>
        </div>
        <div className="flex flex-col h-full justify-evenly items-center">
          <Image
            src={OurStoryWig3}
            alt="wig-3"
            className="lg:w-[300px] md:w-[200px] w-[120px] lg:h-[300px] md:h-[200px] h-[120px]"
          />
          <Image
            src={OurStoryWig4}
            alt="wig-4"
            className="lg:w-[300px] md:w-[200px] w-[120px] lg:h-[300px] md:h-[200px] h-[120px] rotate-12 md:-translate-x-20 -translate-x-10 scale-90 translate-y-10"
          />
        </div>
      </div>
      <Path />
      <Intro />
      <OurMission />
      <Reactive />
      <Reactive2 />
      <CraftsManship />
      <Quote />
    </div>
  );
};

export default OurStory;
