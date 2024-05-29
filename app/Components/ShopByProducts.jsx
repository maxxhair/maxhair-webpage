"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { firaSansMedium } from "../util/fonts";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "./_shopbyproducts/Card";
import { prodimg } from "../util/images";

import axiosInstance from "../util/axiosInstance";

function ShopByProducts() {
  const [selected, setSelected] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(8);
  const [tempArr, setTempArr] = useState([]);
  const [list, setListData] = useState(null);

  const sliderRefSbp = useRef(null);
  const handleSlideChange = useCallback(() => {
    const swiper = sliderRefSbp.current.swiper;
    setSelected(swiper.realIndex);
  }, []);

  const updateFunction = () => {
    if (list !== null) {
      let temp = [];
      for (
        let i = selected * numberOfCards;
        i < Math.min(selected * numberOfCards + numberOfCards, list.length);
        i++
      )
        temp.push(i);
      setTempArr(temp);
    }
  };
  const getRequest = async () => {
    try {
      const data = await axiosInstance.get("/products");
      const temp = data.data.data;
      setListData(temp);
    } catch (err) {
      console.log("from products:", err);
    }
  };

  useEffect(() => {
    updateFunction();
  }, [selected, numberOfCards, list]);

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

    getRequest();
    updateFunction();
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
    <div className=" bg-[#FAFAFA] flex flex-col justify-center items-center  w-full px-[30px] lg:py-[60px] md:py-[40px] py-[20px] md:gap-[40px] gap-[20px]">
      <span
        className={`${firaSansMedium.className} font-[700] lg:headline-large md:headline-medium headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        Shop By Products
      </span>

      <div className="w-full relative ">
        <Swiper
          ref={sliderRefSbp}
          spaceBetween={40}
          slidesPerView={1}
          slidesPerGroup={1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next-button-sbp",
            prevEl: ".swiper-prev-button-sbp",
          }}
          onSlideChange={handleSlideChange}
        >
          {Array.from({ length: Math.ceil(list.length / numberOfCards) }).map(
            (_, index) => {
              return (
                <SwiperSlide
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="flex gap-[20px] justify-center items-center flex-wrap h-[calc(540px*2)] xl:w-[calc(330px*4)] lg:w-[calc(330px*3)] md:w-[calc(330px*2)] w-[calc(330px*1)]">
                    {tempArr.map((ele) => {
                      return (
                        <React.Fragment key={ele}>
                          <Card
                            name={list[ele].title}
                            category={list[ele].category.title}
                            link={`${list[ele]._id}`}
                            image={list[ele].images[0] || prodimg}
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
              className={`swiper-prev-button-sbp h-[60px] w-[60px] flex justify-center items-center ${
                selected === 0
                  ? "bg-[#F2ECE2] text-[#242424] "
                  : "bg-[#242424] text-[#F2ECE2] "
              }`}
              disabled={selected === 0}
            >
              {"<"}
            </button>
            <button
              className={`swiper-next-button-sbp h-[60px] w-[60px] flex justify-center items-center ${
                selected === Math.ceil(list.length / numberOfCards) - 1
                  ? "bg-[#F2ECE2] text-[#242424] "
                  : "bg-[#242424] text-[#F2ECE2] "
              }`}
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
