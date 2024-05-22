"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { firaSans, firaSansMedium } from "../util/fonts";
import { useCallback, useRef, useState } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";

function Reviews() {
  const [selected, setSelected] = useState(0);
  const sliderRefReviews = useRef(null);
  const handleSlideChange = useCallback(() => {
    const swiper = sliderRefReviews.current.swiper;
    setSelected(swiper.realIndex);
  }, []);

  //change list with the data from api
  const list = [
    {
      review:
        "I love my new hair extensions from Maxx Hair. They're silky, durable, and give my hair the perfect amount of length and volume. The only minor issue was that the clips were a bit tight at first, but they loosened up after a few wears. Other than that, these extensions are fantastic and definitely worth the price.",
      author: "Ashley K.",
      rating: 4,
    },
    {
      review:
        "Maxx Hair extensions have been a game-changer for me! They are easy to clip in and stay in place all day without any issues. The quality is fantastic—no shedding or tangling even after multiple washes. They've really boosted my confidence by giving my hair that extra volume and length. Will definitely buy again!",
      author: "Emily R.",
      rating: 5,
    },
    {
      review:
        "The hair extensions I bought from Maxx Hair are really good. The texture feels natural, and they add great volume. The only small issue I had was that they were a bit darker than what I saw in the pictures online. A quick trip to my salon fixed that with a slight tone adjustment. Overall, I'm very satisfied with my purchase.",
      author: "Jessica L.",
      rating: 4,
    },
    {
      review:
        "I recently purchased hair extensions from Maxx Hair, and I'm thrilled with them! The quality is excellent; they blend perfectly with my natural hair and feel very soft. I wear them almost daily, and they still look as good as when I first got them. The color match was spot on, and I've received so many compliments. Highly recommend!",
      author: "Sarah M.",
      rating: 5,
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
          ref={sliderRefReviews}
          spaceBetween={40}
          slidesPerView={1}
          slidesPerGroup={1}
          effect="coverflow"
          centeredSlides={true}
          modules={[EffectCoverflow, Navigation]}
          navigation={{
            nextEl: ".swiper-next-button-reviews",
            prevEl: ".swiper-prev-button-reviews",
          }}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0, // Rotate angle in degrees
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
              >
                <div
                  className={` ${
                    selected === index
                      ? "bg-[#F2ECE2] text-[#242424] lg:h-[700px] md:h-[500px] h-[400px]"
                      : "text-[#242424] bg-[#F9F6F3] lg:h-[600px] md:h-[400px] h-[300px] "
                  } ${
                    firaSans.className
                  } lg:label-large md:label-medium label-small transition-all w-full flex flex-col gap-[20px] justify-between items-center px-[30px]  py-[30px]`}
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
            className={`swiper-prev-button-reviews h-[60px] w-[60px] flex justify-center items-center ${
              selected === 0
                ? "bg-[#F2ECE2] text-[#242424] "
                : "bg-[#242424] text-[#F2ECE2] "
            }`}
            disabled={selected === 0}
          >
            {"<"}
          </button>
          <button
            className={`swiper-next-button-reviews h-[60px] w-[60px] flex justify-center items-center ${
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

export default Reviews;
