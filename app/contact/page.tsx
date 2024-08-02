import Image from "next/image";
import React from "react";
import contactusbanner from "../../public/contactusbanner.png";
import { firaSansMedium } from "../util/fonts";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import ContactForm from "../Components/ContactForm";
import Faq from "../Components/Faq";

const Contact = () => {
  return (
    <section className="w-full md:w-3/4 mx-auto mt-[10vh] md:mt-[14vh]">
      <div className="w-full relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={contactusbanner}
          alt="blogs"
          layout="fill"
          objectFit="cover"
          sizes="100vw"
          className="z-0"
        />
        <div className="flex flex-col items-center gap-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-black">
          <p
            className={`${firaSansMedium.className} headline-medium md:headline-large`}
          >
            Contact Us
          </p>
          <p className="label-medium text-center">Instant length and volume.</p>
        </div>
      </div>
      <Breadcrumb className="my-10 pl-10">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem className="capitalize">Contact</BreadcrumbItem>
      </Breadcrumb>
      <div>
        <div className="w-full mt-8 md:w-1/2 mx-auto text-center lg:mt-16">
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
        <Faq />
      </div>
    </section>
  );
};

export default Contact;
