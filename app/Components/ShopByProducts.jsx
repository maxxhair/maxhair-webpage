"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { firaSansMedium } from "../util/fonts";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "./_shopbyproducts/Card";
import { prodimg } from "../util/images";
import { baseUrl } from "../util/axiosInstance";
import Loader from "./Loader";
import axios from "axios";

function ShopByProducts() {
  const [selected, setSelected] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(6);
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
        i < Math.min(selected * numberOfCards + numberOfCards, list?.length);
        i++
      )
        temp.push(i);
      setTempArr(temp);
    }
  };
  const getRequest = async () => {
    try {
      const data = await axios.get(`${baseUrl}products`);
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
    return <Loader />;
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
                  <div className="flex gap-1 md:gap-[20px] justify-center items-center flex-wrap h-[calc(540px*2)] xl:w-[calc(330px*4)] lg:w-[calc(330px*3)] md:w-[calc(330px*2)] w-[calc(330px*1)]">
                    {tempArr.map((ele) => {
                      return (
                        <React.Fragment key={ele}>
                          <Card
                            name={list[ele]?.title}
                            category={list[ele].category?.title}
                            link={`${list[ele]._id}`}
                            image={list[ele].images[0] || prodimg}
                            subProducts={list[ele].subProducts}
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
