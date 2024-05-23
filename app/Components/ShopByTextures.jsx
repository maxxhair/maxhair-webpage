"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useCallback, useEffect, useRef, useState } from "react";

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

  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center md:min-h-[70vh] min-h-[60vh] items-center w-full px-[30px]  py-[20px] md:gap-[40px] gap-[20px]">
      <div className=" xl:w-[70%] lg:w-[90%] h-auto w-full relative ">
        <Swiper
          ref={sliderRef}
          spaceBetween={40}
          slidesPerView={1}
          effect="coverflow"
          centeredSlides={true}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: ".swiper-next-button-sbt",
            prevEl: ".swiper-prev-button-sbt"
          }}
          initialSlide={1}
          coverflowEffect={{
            rotate: 5, // Rotate angle in degrees
            stretch: 0, // Stretch space between slides
            depth: 100, // Depth of the slide shadow
            modifier: 2.5, // Effect multiplier
            slideShadows: false
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            750: {
              slidesPerView: 2
            },
            1440: {
              slidesPerView: 3
            }
          }}
          className="shadow-none md:h-[700px] w-[650] "
        >
          {list.map((obj, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Card obj={obj} selected={selected} index={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-full flex justify-end gap-[10px] mt-[20px]">
          <button
            className={`swiper-prev-button-sbt h-[60px] w-[60px] flex justify-center items-center ${"bg-[#242424] text-[#F2ECE2] "}`}
          >
            {"<"}
          </button>
          <button
            className={`swiper-next-button-sbt h-[60px] w-[60px] flex justify-center items-center ${"bg-[#242424] text-[#F2ECE2] "}`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopByTextures;
