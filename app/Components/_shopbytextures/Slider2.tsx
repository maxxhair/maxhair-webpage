"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useCallback, useEffect, useRef, useState } from "react";
import Card2 from "./Card2";
import axios from "axios";
import { baseUrl } from "../../util/axiosInstance";
import Link from "next/link";

function Slider2() {
  const [selected, setSelected] = useState(0);
  const [list, setList] = useState([]);
  const [animate, setAnimate] = useState(false);

  const sliderRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}textures`)
      .then((data) => {
        setList(data.data.data);
      })
      .catch((err) => {
        console.log("from textures:", err);
      });
  }, []);

  const handleSlideChange = useCallback(() => {
    const swiper = sliderRef.current.swiper;
    setSelected(swiper.realIndex);
  }, []);

  const visibleDots = list.slice(0, 7); // Limit to 7 items for dots

  if (!list.length) {
    return (
      <div className="w-full bg-[#FAFAFA] flex justify-center items-center h-80">
        <span className="loader"></span>
      </div>
    );
  }
 
// useEffect(() => {
//   // Trigger animation when the component is mounted or selected changes
//   setAnimate(true);
// }, [selected]);
  console.log(list);

  return (
    <div className="bg-[#FAFAFA] flex flex-col justify-center relative w-full px-8 py-8 md:gap-10 gap-8">
      <style>
        {`
          .swiper-pagination {
           flex-direction: column;
    scale: 1.5;
    
    transform: translate(-30px, -100px) !important; /* Combine both transforms */
    gap: 4px;
}


          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background-color: #000000;
           
           
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            width: 8px;
            height: 8px;
            background-color: #D2BC9F;
            opacity: 1;
            transform: scale(1);
          }

          .swiper-navigation-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            top: 80%;
            width: 100%;
            padding:30px;
          
           
            
         
            z-index: 20;
          }
            .text-animation {
  animation: moveUp 0.5s ease-out forwards;
}


          @media (max-width: 768px) {
            .swiper-navigation-wrapper {
              display: none;
            }
              .swiper-pagination{
              display:none;
              }
           
          }
        `}
      </style>
      <div className="absolute top-0  md:top-1/2 md:transform  md:-translate-y-1/2 md:left-20 md:translate-x-0 flex flex-col px-6 md:px-8 max-w-lg ">
      <span
  className="text-[30px] lg:text-[40px] font-bold capitalize text-[#885C46] mb-2 text-animation"
>
  {list[selected].title}
</span>


        {/* Buy Now Button */}
        <div className="flex justify-center md:justify-start  items-center">
          <Link
            href="shop"
            className={`mt-64 md:mt-4 text-white bg-[#242424] p-2 md:px-6 md:py-3 mb-4 w-fit md:mb-0 rounded-md `}
          >
            Buy Now
          </Link>
        </div>
      </div>
      <div className="w-full relative">
        <Swiper
          ref={sliderRef}
          direction="horizontal"
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop
          onSlideNextTransitionStart={() => {}}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          //   el: ".swiper-pagination",
          //   type: "bullets",
          //   dynamicBullets: true,
          // }}
          navigation={{
            nextEl: ".swiper-next-button-sbt",
            prevEl: ".swiper-prev-button-sbt",
          }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay]}
          style={{ height: "50vh", overflow: "hidden" }}
        >
          {list.map((obj, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
              style={{ height: "100%" }}
            >
              <Card2 obj={obj} selected={selected} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination dots */}
        {/* <div className="swiper-pagination">
          {list.map((_, index) => (
            <div
              key={index}
              className={`swiper-pagination-bullet  ${
                selected === index ? "swiper-pagination-bullet-active" : ""
              }`}
            />
          ))}
        </div> */}

        {/* Navigation buttons with titles */}
        <div className="swiper-navigation-wrapper">
          {/* Previous Slide */}
          <div className="flex items-center gap-2">
            <button className="swiper-prev-button-sbt w-12 h-12 flex justify-center items-center bg-[#F2ECE2] text-black ">
              <svg
                className="w-6 h-6 text"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M5 12l4-4m-4 4 4 4"
                />
              </svg>
            </button>
            {selected > 0 ? (
              <span className="text-[#242424] text-sm font-medium">
                {list[selected].title}
              </span>
            ) : (
              <span className="text-[#242424] text-sm font-medium">
                {list[list.length - 1].title}
              </span>
            )}
          </div>

          {/* Next Slide */}
          <div className="flex items-center gap-2">
            {
              <span className="text-[#242424] text-sm font-medium">
                {list[(selected + 1) % list.length].title}
              </span>
            }
            <button className="swiper-next-button-sbt w-12 h-12 flex justify-center items-center bg-[#242424] text-[#F2ECE2] ">
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider2;
