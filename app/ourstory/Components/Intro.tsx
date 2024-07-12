import Image from "next/image";
import { OurStory2 } from "../../util/images";
import { firaSans, firaSansLight } from "../../util/fonts";

function Intro() {
  return (
    <div className="w-screen h-auto flex lg:flex-row flex-col justify-center items-center lg:gap-28 md:gap-16 gap-10 px-[32px] py-[32px]">
      <div className="h-full flex justify-center items-center">
        <Image src={OurStory2} alt="" />
      </div>
      <div className="flex flex-col justify-center  gap-5 lg:w-[50%] md:w-[80%] w-full lg:text-left text-balance">
        <span className="lg:label-large md:label-medium label-small text-[#3D3D3D] ">
          Maxx Hair Extensions was founded to reinstate trust in{" "}
        </span>
        <span
          className={`${firaSansLight.className} text-[#3D3D3D] xl:leading-[110.4px] lg:leading-[90.4px] md:leading-[70.4px] leading-[50.4px] xl:display-large lg:display-medium display-small`}
        >
          High-Quality, Ethically Sourced Indian Human Hair
        </span>
        <span className="lg:label-large md:label-medium label-small text-[#3D3D3D] md:mt-5">
          Maxx Hair Extensions is driven by a vision to bridge the gap between
          quality and value. The hair industry is facing a significant challenge
          as it is increasingly flooded with adulterated hair products. This
          growing issue is undermining the integrity of the entire industry.
          Consumers are often deceived by misleading information and false
          claims, purchasing hair that is mixed with synthetic fibers,
          chemically treated, or sourced unethically. As a result, trust in hair
          products is eroding, and the reputation of honest businesses is being
          tarnished. This is exactly why Maxx Hair Extensions was born to
          address these concerns, prioritize transparency, and uphold the
          highest standards of quality and ethics to restore consumer confidence
          and maintain the integrity of the business.
        </span>
      </div>
    </div>
  );
}

export default Intro;
