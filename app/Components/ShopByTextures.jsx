"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { firaSans } from "../util/fonts";
import { useCallback, useEffect, useRef, useState } from "react";
import { prodimg } from "../util/images";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "../util/axiosInstance";

function ShopByTextures() {
  const [selected, setSelected] = useState(0);
  const [list, setList] = useState(null);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.swiper.slidePrev();
    setSelected((selected) =>
      selected - 1 === -1 ? list.length - 1 : selected - 1
    );
  };

  const handleNext = () => {
    sliderRef.current.swiper.slideNext();
    setSelected((selected) => (selected + 1) % list.length);
  };

  useEffect(() => {
    axiosInstance.get("/textures").then((data) => {
      setList(data.data.data);
    });
  }, []);

  //replace the below with api data
  // const list = Array(4)
  //   .fill()
  //   .map(() => ({
  //     name: "Yaki Curly",
  //     details: "Lorem ipsum dolor sit amet consectetur. Etiam",
  //     link: "",
  //     image: prodimg,
  //   }));

  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center md:min-h-[70vh] min-h-[60vh] items-center w-full px-[30px]  py-[20px] md:gap-[40px] gap-[20px]">
      <div className=" xl:w-[70%] lg:w-[90%] w-full relative ">
        <Swiper
          ref={sliderRef}
          spaceBetween={40}
          slidesPerView={1}
          loop
          breakpoints={{
            750: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          className="h-[750px]"
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
                onClick={() => {
                  setSelected(index);
                }}
              >
                <div
                  className={` w-[400px] h-full flex flex-col justify-center cursor-pointer`}
                >
                  <div>
                    <Image
                      // src={obj?.image_url || prodimg}
                      src={prodimg}
                      alt=""
                      width={400}
                      height={selected === index ? 500 : 450}
                      className={`w-full transition-all ${
                        selected === index ? "h-[500px]" : "h-[450px]"
                      } object-cover`}
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center items-center gap-[10px] p-[20px] ${
                      selected === index &&
                      "border-2 border-t-0 border-[#242424]"
                    }`}
                  >
                    <span
                      className={`${firaSans.className} ${
                        selected === index
                          ? "lg:title-large md:title-medium title-small"
                          : "lg:label-large md:label-medium label-small"
                      }`}
                    >
                      {obj.title}
                    </span>
                    {selected === index && (
                      <Link
                        href="shop"
                        className="bg-[#242424] text-[#FAFAFA] lg:label-large md:label-medium label-small uppercase w-fit py-[10px] px-[30px]"
                      >
                        Buy Now
                      </Link>
                    )}
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

export default ShopByTextures;
