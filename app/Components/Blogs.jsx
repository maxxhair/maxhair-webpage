"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Image from "next/image";
import { sample1 } from "../util/images";
import Link from "next/link";
import { firaSans, firaSansMedium } from "../util/fonts";
import { useCallback, useEffect, useRef, useState } from "react";

function Blogs() {
  const [selected, setSelected] = useState(0);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    setSelected(sliderRef.current.activeIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setSelected(sliderRef.current.activeIndex);
  }, []);

  const list = [
    {
      data: "The advice we've ever heard about Hair Extensions",
      image: sample1,
    },
    { data: "The History of Hair", image: sample1 },
    {
      data: "10 Things nobody told about bring a Hair Extensions asd asd asd ad asdasd",
      image: sample1,
    },
    {
      data: "10 Things nobody told about bring a Hair Extensions asd asd asd ad asdasd",
      image: sample1,
    },
  ];

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center items-center w-full px-[20px] py-[20px] md:gap-[40px] gap-[20px]">
      <span
        className={`${firaSansMedium.className} font-[700] lg:headline-large md:headline-medium headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        Recent blog
      </span>
      <div className="flex lg:flex-row flex-col justify-evenly items-center lg:gap-[70px] gap-[30px] xl:w-[70%] lg:w-[90%] w-full ">
        <div className="lg:w-[calc(50%-70px)] w-[90%] h-full flex justify-center items-center ">
          <Image src={sample1} alt="" className="w-auto h-auto rounded-xl" />
        </div>
        <div className="flex flex-col gap-[20px] lg:w-[calc(50%-70px)] w-[90%] justify-evenly">
          <div className="flex flex-col gap-[20px]">
            <span
              className={`${firaSans.className} lg:title-large md:title-medium title-small`}
            >
              Lorem ipsum dolor sit amet consectetur.
            </span>
            <span className="text-[#242424] lg:label-large md:label-medium label-small  w-fit ">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla. rhoncus bibendum
            </span>
            <Link
              href=""
              className="bg-[#242424] text-[#FAFAFA] lg:label-large md:label-medium label-small uppercase w-fit py-[10px] px-[30px]"
            >
              read more
            </Link>
          </div>
          <div className="w-full flex justify-end gap-[10px]">
            <button
              className={`h-[60px] w-[60px] flex justify-center items-center bg-[#F2ECE2] text-[#242424]`}
              onClick={handlePrev}
            >
              {"<"}
            </button>
            <button
              className={`h-[60px] w-[60px] flex justify-center items-center bg-[#242424] text-[#F2ECE2]`}
              onClick={handleNext}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      <div className=" xl:w-[70%] lg:w-[90%] w-full relative  ">
        <Swiper
          onSwiper={setSelected}
          ref={sliderRef}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            750: {
              slidesPerView: 2,
            },

            1440: {
              slidesPerView: 3,
            },
          }}
        >
          {list.map((obj, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div
                  className={` ${
                    selected === index
                      ? "bg-[#242424] text-[#FAFAFA]"
                      : "text-[#242424] bg-white"
                  }  lg:label-large md:label-medium label-small w-full flex gap-[20px] justify-start items-center px-[20px] py-[20px] `}
                >
                  <Image
                    src={obj.image}
                    alt="error"
                    className="object-cover h-[90px] w-[90px]"
                  />
                  <span className="truncate">{obj.data}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Blogs;