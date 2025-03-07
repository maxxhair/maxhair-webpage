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

  const getVisibleDots = () => {
    if (list.length <= 7) return list;
    if (selected < 4) return list.slice(0, 7);
    if (selected > list.length - 4) return list.slice(list.length - 7);
    return list.slice(selected - 3, selected + 4);
  };


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
  // console.log(list);

  return (
    <div className="flex flex-col justify-center relative w-full md:px-8 md:py-8 pt-8 md:mb-20 md:gap-10 gap-8">
      <style>
        {`
          .swiper-container {
            height: 60vh;
          }

          @media (max-width: 768px) {
            .swiper-container {
              height: 40vh;
            }
          }

          @media (max-width: 480px) {
            .swiper-container {
              height: 30vh;
            }
          }

          .swiper-pagination {
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 40px;
            top: 50%;
            transform: translateY(-50%) !important;
            gap: 8px;
            z-index: 2;
            align-items: center;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #D2BC9F;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
          }

          .swiper-pagination-bullet-active {
            width: 16px;
            height: 16px;
            background-color: transparent;
            border: 1px solid #D2BC9F;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateX(0);
            margin: 0;
          }

          .swiper-pagination-bullet-active::after {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #D2BC9F;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }

          .text-animation {
            animation: moveDown 0.5s ease-out forwards;
          }

          @media (max-width: 768px) {
            .swiper-navigation-wrapper {
              display: flex;
            }
          }
          @media (max-width: 498px) {
            .swiper-pagination {
              top:40%;
              left:90%;
            }
          }

          @keyframes moveDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .text-animation {
            opacity: 0;
            animation: moveDown 0.5s ease-out forwards;
          }

          /* Add smooth transition for slides */
          .swiper-slide {
            transition: all 0.5s ease-out;
            opacity: 0;
          }

          .swiper-slide-active {
            opacity: 1;
          }

          /* Add fade effect for images */
          .slide-image {
            transition: all 0.5s ease-out;
            opacity: 0;
          }

          .swiper-slide-active .slide-image {
            opacity: 1;
          }
        `}
      </style>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col md:justify-center justify-end lg:pl-28 md:pl-14 md:py-8 py-[10px] md:items-start items-center md:z-[2] x-[1]">
        <span
          key={selected}
          className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold capitalize text-[#885C46] mb-4 text-animation"
        >
          {list[selected].title}
        </span>
        <div className="md:flex hidden justify-start items-center ">
          <Link
            href="shop"
            className={`md:mt-4 text-white bg-[#242424] p-2 md:px-6 md:py-3 mb-4 w-fit md:mb-0 text-xs md:text-base`}
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
          speed={800}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          onSlideNextTransitionStart={() => { }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: ".swiper-next-button-sbt",
            prevEl: ".swiper-prev-button-sbt"
          }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay]}
          className="swiper-container"
          style={{ overflow: "hidden" }}
        >
          {list.map((obj, index) => (
            <SwiperSlide
              key={index}
              className=" flex md:justify-center md:items-center"
              style={{ height: "100%" }}
            >
              <Card2 obj={obj} selected={selected} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination dots */}
        <div className="swiper-pagination">
          {getVisibleDots().map((_, index) => (
            <div
              key={index + (selected < 4 ? 0 : selected > (list.length - 4) ? list.length - 7 : selected - 3)}
              className={`swiper-pagination-bullet ${index === (selected < 4 ? selected : selected > (list.length - 4) ? selected - (list.length - 7) : 3)
                && "swiper-pagination-bullet-active"
                }`}
            />
          ))}
        </div>

        {/* Navigation buttons with titles */}
        <div className="swiper-navigation-wrapper md:absolute flex justify-between items-center top-full w-full z-[1] md:px-0 px-4 py-4 md:py-6 xl:py-8">
          {/* Previous Slide */}
          <div className="flex md:flex-row flex-col md:items-center gap-2 lg:gap-4">
            <button className="swiper-prev-button-sbt w-9 h-9 md:w-12 md:h-12 flex justify-center items-center bg-[#242424] text-white">
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
            <span className="text-[#242424] md:block hidden text-xs md:text-sm font-medium">
              {selected > 0
                ? list[selected - 1].title
                : list[list.length - 1].title}
            </span>
          </div>

          {/* Next Slide */}
          <div className="flex md:flex-row flex-col-reverse items-end md:items-center gap-2 lg:gap-4">
            {
              <span className="text-[#242424] md:block hidden text-xs md:text-sm font-medium">
                {list[(selected + 1) % list.length].title}
              </span>
            }
            <button className="swiper-next-button-sbt w-9 h-9 md:w-12 md:h-12 flex justify-center items-center bg-[#242424] text-[#F2ECE2] ">
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
