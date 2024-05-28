import React from "react";
import { contactUsBgImg } from "../util/images";
import Image from "next/image";
import { firaSans } from "../util/fonts";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { BlogCard } from "../Components/BlogCard";

const Blogpage = () => {
  return (
    <section className="w-full md:w-3/4 mx-auto mt-[10vh]">
      <div className="w-full relative">
        <Image src={contactUsBgImg} alt="blogs" />
        <div className="flex flex-col items-center gap-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white">
          <p className={`${firaSans.className} headline-large`}>Our Blog</p>
          <p className="label-medium">This is our blogs page</p>
        </div>
      </div>
      <Breadcrumb className="my-10 pl-10">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem className="capitalize">Our Blog</BreadcrumbItem>
      </Breadcrumb>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <BlogCard key={item} />
        ))}
      </div>
    </section>
  );
};

export default Blogpage;
