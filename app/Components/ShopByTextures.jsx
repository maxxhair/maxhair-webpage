"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { firaSans } from "../util/fonts";
import { useCallback, useEffect, useRef, useState } from "react";
import { prodimg } from "../util/images";
import Link from "next/link";
import Image from "next/image";
import Card from "./_shopbytextures/Card";
import axiosInstance from "../util/axiosInstance";

function ShopByTextures() {
  const [selected, setSelected] = useState(0);
  const [list, setList] = useState(null);
  const sliderRef = useRef(null);
  const handleSlideChange = useCallback(() => {
    const swiper = sliderRef.current.swiper;
    setSelected(swiper.realIndex);
  }, []);

  useEffect(() => {
    axiosInstance.get("/textures").then((data) => {
      setList(data.data.data);
    });
  }, []);

  //replace the below with api data
  // const list = Array(4)
  //   .fill()
  //   .map(() => ({
  //     name: "Yaki Curly",
  //     details: "Lorem ipsum dolor sit amet consectetur. Etiam",
  //     link: "",
  //     image: prodimg,
  //   }));

  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center md:min-h-[70vh] min-h-[60vh] items-center w-full px-[30px]  py-[20px] md:gap-[40px] gap-[20px]">
      <div className=" xl:w-[70%] lg:w-[90%] w-full relative ">
        <Swiper
          ref={sliderRef}
          spaceBetween={40}
          slidesPerView={1}
          effect="coverflow"
          centeredSlides={true}
          modules={[EffectCoverflow, Navigation]}
          navigation={{
            nextEl: ".swiper-next-button-sbt",
            prevEl: ".swiper-prev-button-sbt",
          }}
          initialSlide={1}
          coverflowEffect={{
            rotate: 10, // Rotate angle in degrees
            stretch: 0, // Stretch space between slides
            depth: 50, // Depth of the slide shadow
            modifier: 2.5, // Effect multiplier
            slideShadows: false,
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            750: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          className="h-[750px] shadow-none"
        >
          {list.map((obj, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card obj={obj} selected={selected} index={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-full flex justify-end gap-[10px] mt-[20px]">
          <button
            className={`swiper-prev-button-sbt h-[60px] w-[60px] flex justify-center items-center ${
              selected === 0
                ? "bg-[#F2ECE2] text-[#242424] "
                : "bg-[#242424] text-[#F2ECE2] "
            }`}
            disabled={selected === 0}
          >
            {"<"}
          </button>
          <button
            className={`swiper-next-button-sbt h-[60px] w-[60px] flex justify-center items-center ${
              selected === list.length - 1
                ? "bg-[#F2ECE2] text-[#242424] "
                : "bg-[#242424] text-[#F2ECE2] "
            }`}
            disabled={selected === list.length - 1}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopByTextures;
