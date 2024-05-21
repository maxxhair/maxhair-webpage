"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { firaSans, firaSansMedium } from "../util/fonts";
import { useCallback, useRef, useState } from "react";

function Reviews() {
  const [selected, setSelected] = useState(0);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    sliderRef.current.swiper.slidePrev();
    setSelected((selected) =>
      selected - 1 === -1 ? list.length - 1 : selected - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current.swiper.slideNext();
    setSelected((selected) => (selected + 1) % list.length);
  }, []);

  const list = [
    {
      review:
        "While the copany wishes they had more time to work out the kinks with the Teamollo, they are quite happy with the result of the project. The resulting website that the team devoloped is fast and the communication with the vender was very good The company will work with them again.",
      author: "Ashley Cooper",
      rating: 5,
    },
    {
      review:
        "While the copany wishes they had more time to work out the kinks with the Teamollo, they are quite happy with the result of the project. The resulting website that the team devoloped is fast and the communication with the vender was very good The company will work with them again.",
      author: "Ashley Cooper",
      rating: 4,
    },
    {
      review:
        "While the copany wishes they had more time to work out the kinks with the Teamollo, they are quite happy with the result of the project. The resulting website that the team devoloped is fast and the communication with the vender was very good The company will work with them again.",
      author: "Ashley Cooper",
      rating: 3,
    },
    {
      review:
        "While the copany wishes they had more time to work out the kinks with the Teamollo, they are quite happy with the result of the project. The resulting website that the team devoloped is fast and the communication with the vender was very good The company will work with them again.",
      author: "Ashley Cooper",
      rating: 2,
    },
  ];

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center items-center w-full px-[30px] lg:py-[60px] md:py-[40px] py-[20px] md:gap-[40px] gap-[20px]">
      <span
        className={`${firaSansMedium.className} font-[700] lg:headline-large md:headline-medium headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        What our Clients are saying about us!
      </span>

      <div className=" xl:w-[70%] lg:w-[90%] w-full relative ">
        <Swiper
          ref={sliderRef}
          spaceBetween={40}
          slidesPerView={1}
          slidesPerGroup={1}
          loop
          breakpoints={{
            750: {
              slidesPerView: 2,
            },

            1440: {
              slidesPerView: 3,
            },
          }}
          className="lg:h-[700px] md:h-[500px] h-[400px]"
        >
          {list.map((obj, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "start",
                }}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <div
                  className={` ${
                    selected === index
                      ? "bg-[#F2ECE2] text-[#242424] lg:h-[700px] md:h-[500px] h-[400px]"
                      : "text-[#242424] bg-[#F9F6F3] lg:h-[600px] md:h-[400px] h-[300px] "
                  } ${
                    firaSans.className
                  } cursor-pointer lg:label-large md:label-medium label-small transition-all w-full flex flex-col gap-[20px] justify-between items-center px-[30px]  py-[30px]`}
                >
                  <span className={`${selected !== index && "line-clamp-4"}`}>
                    {obj.review}
                  </span>
                  <div className="flex gap-[20px] justify-start w-full">
                    <div className="h-[60px] w-[60px] bg-gray-500 rounded-full"></div>
                    <div className="flex flex-col">
                      <span>{obj.author}</span>
                      <div className="flex gap-[5px]">
                        {[...Array(5).keys()].map((ele, index) => {
                          return (
                            <span
                              key={index}
                              className={`fa fa-star ${
                                index + 1 <= obj.rating
                                  ? "checked"
                                  : "unchecked"
                              }`}
                            ></span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-full flex justify-end gap-[10px] mt-[20px]">
          <button
            className={`h-[60px] w-[60px] flex justify-center items-center ${"bg-[#242424] text-[#F2ECE2] "}`}
            onClick={handlePrev}
          >
            {"<"}
          </button>
          <button
            className={`h-[60px] w-[60px] flex justify-center items-center ${"bg-[#242424] text-[#F2ECE2] "}`}
            onClick={handleNext}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
