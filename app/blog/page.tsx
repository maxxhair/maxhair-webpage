import React from "react";
import { contactUsBgImg } from "../util/images";
import blogbanner from "../../public/blogbanner.png";
import Image from "next/image";
import { firaSans } from "../util/fonts";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { BlogCard } from "../Components/BlogCard";

const Blogpage = () => {
  return (
    <section className="w-full md:w-4/5 lg:3/4 mx-auto mt-[10vh] md:mt-[14vh]">
      <div className="w-full relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={blogbanner}
          alt="blogs"
          layout="fill"
          objectFit="cover"
          sizes="100vw"
          className="z-0"
        />
        <div className="flex flex-col items-center gap-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-black">
          <p className={`${firaSans.className} headline-large`}>Our Blog</p>
          <p className="label-medium md:label-large">This is our blogs page</p>
        </div>
      </div>
      <Breadcrumb className="my-10 pl-10">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem className="capitalize">Our Blog</BreadcrumbItem>
      </Breadcrumb>
      <div className="w-full p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        <BlogCard />
      </div>
    </section>
  );
};

export default Blogpage;
