"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { firaSans, firaSansLight, firaSansMedium } from "../util/fonts";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { baseImageUrl, baseUrl } from "../util/axiosInstance";
import { blogImage2 } from "../util/images";

function Blogs() {
  const [selected, setSelected] = useState(0);
  const sliderRefBlogs = useRef(null);
  const handleSlideChange = useCallback(() => {
    const swiper = sliderRefBlogs.current.swiper;
    setSelected(swiper.realIndex);
  }, []);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${baseUrl}blog`);
        setList(response.data.data);
      } catch (error) {
        throw error;
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center items-center w-full px-[20px] lg:py-[60px] md:py-[40px] py-[20px] md:gap-[40px] gap-[20px]">
      <span
        className={`${firaSans.className} md:headline-large headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        Recent blog
      </span>
      <div className=" xl:w-[70%] lg:w-[90%] w-full relative">
        <Swiper
          ref={sliderRefBlogs}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 2.5,
            slideShadows: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          // loop
          modules={[Navigation, EffectCoverflow]}
          navigation={{
            nextEl: ".swiper-next-button-blogs",
            prevEl: ".swiper-prev-button-blogs",
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
                <div className="flex flex-col gap-[20px] md:w-[450px] w-[300px] justify-evenly bg-[#F9F6F3] border border-[#cebc9d] p-5">
                  <div className="relative">
                    <Image
                      src={`${baseImageUrl}/uploads/${obj.blogImage}`}
                      alt={obj.title}
                      className="object-cover w-full aspect-video"
                      width={400}
                      height={300}
                    />
                    <Link
                      href={`blog/${obj._id}`}
                      className="bg-[#242424] w-fit p-[15px] absolute -bottom-[20px] right-0 "
                    >
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
                    </Link>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <span
                      className={`${firaSans.className} md:title-medium title-small line-clamp-1`}
                    >
                      {obj.title}
                    </span>
                    <span
                      className={`${firaSansLight.className} text-[#242424] md:body-medium body-small tracking-wide line-clamp-3 md:min-h-[63px] min-h-[58px]`}
                    >
                      {obj.subHeading}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-full flex justify-end gap-[10px] mt-10">
          <button
            className={`swiper-prev-button-blogs h-[60px] w-[60px] flex justify-center items-center ${
              selected === 0
                ? "bg-[#F2ECE2] text-[#242424] "
                : "bg-[#242424] text-[#F2ECE2] "
            }`}
            disabled={selected === 0}
          >
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
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </button>
          <button
            className={`swiper-next-button-blogs h-[60px] w-[60px] flex justify-center items-center ${
              selected === 0
                ? "bg-[#242424] text-[#F2ECE2] "
                : "bg-[#F2ECE2] text-[#242424] "
            }`}
            disabled={selected === list.length - 1}
          >
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
  );
}

export default Blogs;
