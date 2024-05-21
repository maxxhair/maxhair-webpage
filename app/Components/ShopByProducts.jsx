"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { firaSansMedium } from "../util/fonts";
import React, { useCallback, useEffect, useRef, useState } from "react";

import Card from "./_shopbyproducts/Card";
import { prodimg } from "../util/images";

function ShopByProducts() {
  const [selected, setSelected] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(8);
  const [tempArr, setTempArr] = useState([]);

  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    let temp = [];
    for (
      let i = selected * numberOfCards;
      i < Math.min(selected * numberOfCards + numberOfCards, list.length);
      i++
    )
      temp.push(i);
    setTempArr(temp);
  }, [selected, numberOfCards]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1280) {
        setNumberOfCards(8);
      } else if (width > 1024) {
        setNumberOfCards(6);
      } else if (width > 768) {
        setNumberOfCards(4);
      } else {
        setNumberOfCards(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //update the list variable with api data
  const list = Array(9)
    .fill()
    .map(() => ({
      name: "Yaki Curly",
      number: 263,
      link: "",
      image: prodimg,
    }));

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center items-center  w-full px-[30px] lg:py-[60px] md:py-[40px] py-[20px] md:gap-[40px] gap-[20px]">
      <span
        className={`${firaSansMedium.className} font-[700] lg:headline-large md:headline-medium headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        Shop By Products
      </span>

      <div className="  w-full relative ">
        <Swiper
          ref={sliderRef}
          spaceBetween={40}
          slidesPerView={1}
          slidesPerGroup={1}
          onActiveIndexChange={(swiper) => {
            setSelected(swiper.activeIndex);
          }}
        >
          {Array.from({ length: Math.ceil(list.length / numberOfCards) }).map(
            (_, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="flex gap-[20px] justify-center  flex-wrap h-[calc(465px*2)] xl:w-[calc(330px*4)] lg:w-[calc(330px*3)] md:w-[calc(330px*2)] w-[calc(330px*1)]">
                    {tempArr.map((ele) => {
                      return (
                        <React.Fragment key={ele}>
                          <Card
                            name={list[ele].name}
                            number={list[ele].number}
                            link={list[ele].link}
                            image={list[ele].image}
                          />
                        </React.Fragment>
                      );
                    })}
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
        <div className="w-full flex justify-center">
          <div className="flex justify-end gap-[10px] mt-[20px] xl:w-[calc(330px*4)] lg:w-[calc(330px*3)] md:w-[calc(330px*2)] w-[calc(330px*1)]">
            <button
              className={`h-[60px] w-[60px] flex justify-center items-center ${
                selected === 0
                  ? "bg-[#F2ECE2] text-[#242424] "
                  : "bg-[#242424] text-[#F2ECE2] "
              }`}
              onClick={handlePrev}
              disabled={selected === 0}
            >
              {"<"}
            </button>
            <button
              className={`h-[60px] w-[60px] flex justify-center items-center ${
                selected === Math.ceil(list.length / numberOfCards) - 1
                  ? "bg-[#F2ECE2] text-[#242424] "
                  : "bg-[#242424] text-[#F2ECE2] "
              }`}
              onClick={handleNext}
              disabled={selected === Math.ceil(list.length / numberOfCards) - 1}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopByProducts;
