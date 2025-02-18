"use client";
import React from "react";
import Image from "next/image";
import { firaSans, koulen } from "../util/fonts";
import { brenda } from "../util/images";
import chanel from "../../public/Chanel.png";
import Cecile from "../../public/Cecile.png";
import EnrollNow from "./Components/EnrollNow";
import SendMoreInfo from "./Components/SendMoreInfo";

function page() {
  const handleClick = () => {
    <SendMoreInfo />;
  };
  return (
    <>
      <div className="py-[32px] px-[20px] mt-[80px] w-full lg:pt-[100px] bg-[#FAFAFA] flex lg:flex-row flex-col gap-[20px] justify-center lg:items-start items-center">
        <div className=" flex items-end lg:h-[500px] h-[300px] xl:w-[300px] lg:w-[250px] w-[200px]">
          <div className="relative">
            <Image src={brenda} alt="brenda" className="[clip-path:circle()]" />
            <div
              className={`absolute -top-1/2 lg:left-2/3 left-1/2 lg:title-large md:title-medium title-small text-center bg-[#885C46] rounded-full p-[10px] xl:h-[200px] lg:h-[180px] md:h-[160px] h-[150px] xl:w-[200px] lg:w-[180px] md:w-[160px] w-[150px]  flex justify-center items-center text-[#FAFAFA] ${koulen.className}`}
            >
              Brenda
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] md:w-[60%] w-[80%] h-[70%] py-[10px] font-[400] bg-[#E3D6C5] text-[#885C46] px-[20px]">
          <div className="flex flex-col xl:w-[70%] lg:w-[80%] w-[90%] justify-center py-[40px] gap-[10px]">
            <span className="lg:body-large md:body-medium body-small">
              Our Stylist
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
            <div className="mt-4">
              <SendMoreInfo />
            </div>

            {/* <button className="mt-8 bg-black text-white p-2 md:left-[100px] w-[138px] flex justify-center items-center" onClick={()=>handleClick}>Consult</button> */}
          </div>
        </div>
      </div>
      {/* //second */}
      <div className="py-[32px] px-[20px] w-full  bg-[#FAFAFA] min-h-[50vh] flex lg:flex-row flex-col gap-[20px] justify-center lg:items-start items-center">
        <div className=" flex items-end lg:h-[500px] h-[300px] xl:w-[300px] lg:w-[250px] w-[200px]">
          <div className="relative">
            <Image src={chanel} alt="brenda" className="[clip-path:circle()]" />
            <div
              className={`absolute -top-1/2 lg:left-2/3 left-1/2 lg:title-large md:title-medium title-small text-center bg-[#885C46] rounded-full p-[10px] xl:h-[200px] lg:h-[180px] md:h-[160px] h-[150px] xl:w-[200px] lg:w-[180px] md:w-[160px] w-[150px]  flex justify-center items-center text-[#FAFAFA] ${koulen.className}`}
            >
              Chanel
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] md:w-[60%] w-[80%] h-[70%] py-[10px] font-[400] bg-[#E3D6C5] text-[#885C46] px-[20px]">
          <div className="flex flex-col xl:w-[70%] lg:w-[80%] w-[90%] justify-center py-[40px] gap-[10px]">
            <span className="lg:body-large md:body-medium body-small">
              Our Stylist
            </span>
            <span
              className={`${firaSans.className}  lg:title-large md:title-medium title-small font-[600]`}
            >
              Hair Extension Expert and Educator
            </span>
            <div className="lg:body-large md:body-medium body-small">
              Chanel is a licensed cosmetologist, providing services over 20
              years from the Dominican Republic, New York, and now in Houston,
              TX. Dominican hairstyle expert, specializing in color, balayage,
              highlights, and hair extensions. She is the owner of
              CSCOSMETOLOGY. Expertise in all types of hair and hair extension
              techniques like micro ring, wefts, tape, and more. Their goal is
              to continue educating more people who can work with all types of
              hair from 1A to 4C and continue teaching various extension
              techniques.
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.cscosmetology.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FAFAFA] bg-[#242424] font-[500] lg:label-large md:label-medium label-small capitalize w-fit py-[10px] px-[30px]"
              >
                Website
              </a>
              <a
                href="https://www.instagram.com/cs.cosmetology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FAFAFA] bg-[#242424] font-[500] lg:label-large md:label-medium label-small capitalize w-fit py-[10px] px-[30px]"
              >
                Instagram
              </a>
            </div>

            {/* 
            <p>
              <span className="font-bold">Website:</span>{" "}
              <a
                href="https://www.cscosmetology.com"
                className="text-blue-600"
              >
                www.cscosmetology.com
              </a>
            </p>
            <p>
              <span className="font-bold">Instagram:</span>{" "}
              <a
                href="https://www.instagram.com/cs.cscosmetology"
                className="text-blue-600"
              >
                @cs.cscosmetology
              </a>
            </p>
            <div className="mt-4">
              <SendMoreInfo />
            </div>
            */}
          </div>
        </div>
      </div>
      {/* third */}
      <div className="py-[32px] px-[20px]  w-full  bg-[#FAFAFA] min-h-[70vh] flex lg:flex-row flex-col gap-[20px] justify-center lg:items-start items-center">
        <div className=" flex items-end lg:h-[500px] h-[300px] xl:w-[300px] lg:w-[250px] w-[200px]">
          <div className="relative">
            <Image src={Cecile} alt="brenda" className="[clip-path:circle()]" />
            <div
              className={`absolute -top-1/2 lg:left-2/3 left-1/2 lg:title-large md:title-medium title-small text-center bg-[#885C46] rounded-full p-[10px] xl:h-[200px] lg:h-[180px] md:h-[160px] h-[150px] xl:w-[200px] lg:w-[180px] md:w-[160px] w-[150px]  flex justify-center items-center text-[#FAFAFA] ${koulen.className}`}
            >
              Cecile
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] md:w-[60%] w-[80%] h-[70%] py-[10px] font-[400] bg-[#E3D6C5] text-[#885C46] px-[20px]">
          <div className="flex flex-col xl:w-[70%] lg:w-[80%] w-[90%] justify-center py-[40px] gap-[10px]">
            <span className="lg:body-large md:body-medium body-small">
              Our Stylist
            </span>
            <span
              className={`${firaSans.className}  lg:title-large md:title-medium title-small font-[600]`}
            >
              Hair Extension Expert and Educator
            </span>
            <span className="lg:body-large md:body-medium body-small">
              What started as a hobby, has now grown into a passion for
              hairdressing at, First Class Hair Braiding salon in boston. Cecile
              has 15 years of experience in hairstyling, weave and braiding. She
              is an expert in braiding and color techniques.
            </span>
            <div className="flex gap-4 mt-4">
              <a
                href="https://outlook.office365.com/book/cscosmetology@rmnitsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FAFAFA] bg-[#242424] font-[500] lg:label-large md:label-medium label-small capitalize w-fit py-[10px] px-[30px]"
              >
                Book a session
              </a>
              {/* <SendMoreInfo /> */}
            </div>
            {/* <span className="mt-8 bg-black text-white p-2 md:left-[100px] w-[138px] flex justify-center items-center">Consult</span> */}
          </div>
        </div>
      </div>

      {/* //second */}
    </>
  );
}

export default page;
