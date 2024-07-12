import React from "react";
import { firaSans, firaSansLight } from "../../util/fonts";

function OurMission() {
  return (
    <div className="flex flex-col justify-center items-center text-center xl:mt-20 lg:mt-16 md:mt-12 mt-8 gap-5 px-[32px] py-[32px]">
      <span
        className={`${firaSans.className} font-bold lg:title-large md:title-medium title-small`}
      >
        Our Mission
      </span>
      <span
        className={`${firaSansLight.className} lg:mt-5 lg:display-large md:display-medium display-small text-black`}
      >
        Ethical Sourcing & <span className="text-[#885C46]">Transparency</span>
      </span>
      <span className="text-black font-medium lg:label-large md:label-medium label-small w-[65%]">
        At Maxx Hair Extensions, our mission is to provide the finest hair
        products while prioritizing transparency and ethical sourcing. We are
        dedicated to sourcing hair in a way that respects both the donors and
        the consumers, ensuring that every bundle is 100% authentic, natural,
        and ethically obtained.
      </span>
    </div>
  );
}

export default OurMission;
