import Image from "next/image";
import { OurStory3 } from "../../util/images";
import { firaSans, firaSansBold } from "../../util/fonts";

function CraftsManship() {
  return (
    <div className=" relative h-auto w-screen py-[32px] px-[32px] flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%]">
        <Image src={OurStory3} alt="Hair Photo" className="w-full h-auto" />
        <span
          className={`${firaSansBold.className} lg:pl-10 md:pl-5 xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[60.4px] lg:-translate-y-10 md:-translate-y-5  uppercase text-shadow-gold lg:display-large md:display-medium display-small`}
        >
          Expert
        </span>
        <span
          className={`${firaSansBold.className} lg:pl-10 md:pl-5  xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[60.4px] lg:-translate-y-10 md:-translate-y-5 uppercase text-shadow-gold lg:display-large md:display-medium display-small`}
        >
          Craftsmanship
        </span>

        <div className="flex flex-col gap-5 lg:pl-10 md:pl-5 pl-0">
          <span
            className={`${firaSans.className} text-[#3D3D3D] lg:title-large md:title-medium title-small`}
          >
            Expert Craftsmanship
          </span>
          <span className="text-[#3D3D3D] lg:label-large md:label-medium label-small xl:w-[450px] lg:w-[400px] md:w-[80%] w-full">
            Our team of product architects and hair weavers use their skills and
            relevant tools to fabricate various products. Each finished product
            undergoes a final quality check to eliminate any anomalies.
          </span>
        </div>
      </div>
      <div className=" xl:flex hidden flex-col justify-center items-end h-full right-20 text-90 absolute ">
        <div className="flex flex-col">
          <span
            className={`${firaSansBold.className}  xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[60.4px] uppercase text-shadow-gold lg:display-large md:display-medium display-small`}
          >
            Expert
          </span>
          <span
            className={`${firaSansBold.className}  xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[60.4px] uppercase text-shadow-gold lg:display-large md:display-medium display-small`}
          >
            Craftsmanship
          </span>
        </div>
      </div>
    </div>
  );
}

export default CraftsManship;
