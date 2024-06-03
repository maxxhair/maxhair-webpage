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
    axiosInstance
      .get("/textures")
      .then((data) => {
        setList(data.data.data);
      })
      .catch((err) => {
        console.log("from textures:", err);
      });
  }, []);

  if (!list) {
    return (
      <div className="w-full bg-[#FAFAFA] flex justify-center items-center h-80 lg:title-medium md:label-medium label-small">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#A47252]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center md:min-h-[70vh] min-h-[60vh] items-center w-full px-[30px]  py-[20px] md:gap-[40px] gap-[20px]">
      <div className=" xl:w-[70%] lg:w-[90%] h-auto w-full relative ">
        <Swiper
          ref={sliderRef}
          spaceBetween={0}
          slidesPerView={2}
          effect="coverflow"
          centeredSlides={true}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-next-button-sbt",
            prevEl: ".swiper-prev-button-sbt",
          }}
          initialSlide={1}
          coverflowEffect={{
            rotate: 15, // Rotate angle in degrees
            stretch: 0, // Stretch space between slides
            depth: 140, // Depth of the slide shadow
            modifier: 1, // Effect multiplier
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
          className="shadow-none md:h-[700px] h-[400px] w-[650] "
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
            className={`swiper-prev-button-sbt w-12 h-12 md:h-[60px] md:w-[60px] flex justify-center items-center ${"bg-[#242424] text-[#F2ECE2] "}`}
          >
            {"<"}
          </button>
          <button
            className={`swiper-next-button-sbt w-12 h-12 md:h-[60px] md:w-[60px] flex justify-center items-center ${"bg-[#242424] text-[#F2ECE2] "}`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopByTextures;
