import React from "react";
import Image from "next/image";
import { firaSans, koulen } from "../util/fonts";
import { brenda } from "../util/images";
import EnrollNow from "./Components/EnrollNow";
import SendMoreInfo from "./Components/SendMoreInfo";

function page() {
  return (
    <>
      <div className="py-[32px] px-[20px] mt-[80px] w-full lg:pt-[100px] bg-[#FAFAFA] min-h-[70vh] flex lg:flex-row flex-col gap-[20px] justify-center lg:items-start items-center">
        <div className=" flex items-end lg:h-[500px] h-[300px] xl:w-[300px] lg:w-[250px] w-[200px]">
          <div className="relative">
            <Image src={brenda} alt="brenda" className="[clip-path:circle()]" />
            <div
              className={`absolute -top-1/2 lg:left-2/3 left-1/2 lg:title-large md:title-medium title-small text-center bg-[#885C46] rounded-full p-[10px] xl:h-[200px] lg:h-[180px] md:h-[160px] h-[150px] xl:w-[200px] lg:w-[180px] md:w-[160px] w-[150px]  flex justify-center items-center text-[#FAFAFA] ${koulen.className}`}
            >
              Meet Brenda
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] md:w-[60%] w-[80%] h-[70%] py-[10px] font-[400] bg-[#E3D6C5] text-[#885C46] px-[20px]">
          <div className="flex flex-col xl:w-[70%] lg:w-[80%] w-[90%] justify-center py-[40px] gap-[10px]">
            <span className="lg:body-large md:body-medium body-small">
              Our Educator
            </span>
            <span
              className={`${firaSans.className}  lg:title-large md:title-medium title-small font-[600]`}
            >
              Hair Extension Expert and Educator
            </span>
            <span className="lg:body-large md:body-medium body-small">
              Brenda has been a visionary in the realm of hair industry with an
              illustrious career spanning over 20 years! Renowned for her
              unparalleled expertise in crafting mesmerizing hair color and
              seamless hair extension techniques with all types of wefts,
              keratin, and I-tip Bonds, along with advanced color correction
              methods. Beyond the mastery of the craft, Brenda is a dedicated
              educator sharing her wealth of knowledge and passion with aspiring
              stylist, empowering them to reach newer heights of skill and
              creativity Her teaching transcends mere technique, instilling in
              others a profound understanding of the artistry behind every cut,
              color, and extension.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F2ECE2] flex justify-center items-center py-[50px] px-[10px]">
        <div className="flex flex-wrap justify-center gap-[20px] xl:w-full w-[80%]">
          <div className="bg-[#FAFAFA] shadow-md sm:h-[350px] h-[300px] flex flex-col px-[20px] py-[20px] justify-evenly items-center text-center xl:w-[600px] w-full ">
            <span
              className={`${firaSans.className} text-[#885C46] lg:label-large md:label-medium label-small`}
            >
              Ready To Apply?
            </span>
            <span className="text-[#242424] lg:body-large md:body-medium body-small w-[60%]">
              Complete the form and we’ll contact you to schedule an interview.
              No payment is required today.
            </span>
            <EnrollNow />
          </div>
          <div className="bg-[#FAFAFA] shadow-md sm:h-[350px] h-[300px] flex flex-col px-[20px] py-[20px] justify-evenly items-center text-center xl:w-[600px] w-full">
            <span
              className={`${firaSans.className} text-[#885C46] lg:label-large md:label-medium label-small`}
            >
              I’m Interested, But Am Not Ready To Apply Yet.
            </span>
            <span className="text-[#242424] lg:body-large md:body-medium body-small w-[60%]">
              No problem! Complete this contact form and we’ll send you more
              information by email. If and when you’re ready to apply, we’ll be
              here for you!
            </span>
            <SendMoreInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
