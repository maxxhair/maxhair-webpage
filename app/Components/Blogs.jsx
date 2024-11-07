"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";
import { blogImage2, sample1 } from "../util/images";
import Link from "next/link";
import { firaSans, firaSansMedium } from "../util/fonts";
import { useEffect, useRef, useState } from "react";
import { generateSlug } from "../util/slug";
import axios from "axios";
import { baseUrl } from "../util/axiosInstance";

function Blogs() {
  const [blog, setBlog] = useState(null);
  const slug = generateSlug("Know Your Hair");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${baseUrl}blog`);
        setBlog(response.data.data[0]);
      } catch (error) {
        throw error;
      }
    };
    fetchBlogs();
  }, []);

  const baseImageUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";
  const blogimg = `${baseImageUrl}/uploads/${blog?.blogImage}`;

  //replace this with data from api
  const list = [
    {
      body: "Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget nam quis non at bibendum nulla nulla. rhoncus bibendum",
      link: "",
      data: "The advice we've ever heard about Hair Extensions",
      image: sample1,
    },
    {
      body: "Have you ever wondered why is hair so precious? What makes up a strand of hair? what is it made of? Why is it so difficult to find good hair? And what makes up good hair? And most importantly what makes it so expensive? We have heard you!",
      link: `/blog/${slug}`,
      data: "Know your hair",
      image: blogImage2,
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget nam quis non at bibendum nulla nulla. rhoncus bibendum",
      link: "",
      data: "10 Things nobody told about bring a Hair Extensions asd asd asd ad asdasd",
      image: sample1,
    },
    {
      body: "Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget nam quis non at bibendum nulla nulla. rhoncus bibendum",
      link: "",
      data: "10 Things nobody told about bring a Hair Extensions asd asd asd ad asdasd",
      image: sample1,
    },
  ];

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center items-center w-full px-[20px] lg:py-[60px] md:py-[40px] py-[20px] md:gap-[40px] gap-[20px]">
      <span
        className={`${firaSansMedium.className} font-[700] lg:headline-large md:headline-medium headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        Recent blog
      </span>
      <div className="flex lg:flex-row flex-col justify-evenly items-center lg:gap-[70px] gap-[30px] xl:w-[70%] lg:w-[90%] w-full ">
        <div className="lg:w-[calc(50%-70px)] w-[90%] h-full flex justify-center items-center">
          <Image
            src={blogimg}
            alt=""
            className="w-full h-full rounded-xl"
            width={400}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-[20px] lg:w-[calc(50%-70px)] w-[90%] justify-evenly">
          <div className="flex flex-col gap-[20px]">
            <span
              className={`${firaSans.className} lg:title-large md:title-medium title-small line-clamp-1`}
            >
              {blog?.title}
            </span>
            <span className="text-[#242424] lg:label-large md:label-medium label-small line-clamp-5 w-fit">
              {blog?.subHeading}
            </span>
            <Link
              href={`blog/${blog?._id}`}
              className="bg-[#242424] text-[#FAFAFA] lg:label-large md:label-medium label-small uppercase w-fit py-[10px] px-[30px]"
            >
              read more
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:w-[70%] lg:w-[90%] w-full relative"></div>
    </div>
  );
}

export default Blogs;
