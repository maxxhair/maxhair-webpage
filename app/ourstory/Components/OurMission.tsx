import React from "react";
import { firaSans } from "../../util/fonts";

function OurMission() {
  return (
    <div className="flex flex-col justify-center items-center text-center xl:mt-20 lg:mt-10 md:mt-5 mt-0 gap-5 px-[32px] py-[32px]">
      <span
        className={`${firaSans.className} font-bold lg:title-large md:title-medium title-small`}
      >
        Our Mission
      </span>
      <span
        className={`${firaSans.className} lg:mt-5 lg:headline-large headline-medium text-black`}
      >
        Ethical Sourcing & <span className="text-[#885C46]">Transparency</span>
      </span>
      <span className="text-black font-medium lg:label-large md:label-medium label-small md:w-[65%] w-[90%]">
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
