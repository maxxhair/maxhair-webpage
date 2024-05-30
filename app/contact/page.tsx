import Image from "next/image";
import React from "react";
import { contactUsBgImg } from "../util/images";
import { firaSansMedium } from "../util/fonts";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <section className="w-full md:w-3/4 mx-auto mt-[10vh]">
      <div className="w-full relative">
        <Image src={contactUsBgImg} alt="blogs" />
        <div className="flex flex-col items-center gap-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
          <p className={`${firaSansMedium.className} headline-large`}>
            Contact Us
          </p>
          <p className="label-medium">Instant length and volume.</p>
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
      </div>
    </section>
  );
};

export default Contact;
