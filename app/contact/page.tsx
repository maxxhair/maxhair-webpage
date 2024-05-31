import Image from "next/image";
import React from "react";
import { contactUsBgImg } from "../util/images";
import { firaSans, firaSansMedium, prompt } from "../util/fonts";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div className="text-xs lg:text-base w-full lg:w-4/5 h-full mx-auto">
      <div className="text-center relative flex justify-center w-full">
        <Image src={contactUsBgImg} alt="background image" />
        <div className="p-[20px] flex flex-col gap-[20px] color-shift items-center bottom-28 absolute ">
          <span
            className={`${firaSans.className} flex flex-col md:w-[600px] w-full lg:display-medium md:headline-large headline-medium font-[700]  text-white`}
          >
            <span>Contact Us</span>
          </span>

          <p
            className={`${prompt.className}  lg:label-large md:label-medium label-small md:w-[500px] w-full  text-white`}
          >
            Instant length and volume.
          </p>
        </div>
      </div>
      <div>
        <p className="mt-5 ml-5">
          <b>Home</b> - Contact
        </p>
        <div className="w-full p-4 mt-8 md:w-1/2 mx-auto text-center lg:mt-16">
          <p className={`${firaSansMedium.className} text-2xl lg:text-4xl`}>
            Get In Touch With Us
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
            tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
            rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
            nam quis non at bibendum nulla nulla
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
