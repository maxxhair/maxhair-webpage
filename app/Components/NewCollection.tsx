"use client";

import { useEffect, useState } from "react";
import { firaSans, firaSansBold } from "../util/fonts";
import ImageCard from "./ImageCard";
import axios from "axios";
import { baseUrl } from "../util/axiosInstance";

const NewCollection = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const getRequest = async () => {
      try {
        const data = await axios.get(`${baseUrl}products`);
        const temp = data.data.data;
        setListData(temp);
      } catch (err) {
        console.log(err);
      }
    };
    getRequest();
  }, []);
  // <ImageCard key={product._id} item={product} width={340} height={400} />;

  return (
    <div className="bg-[linear-gradient(135.21deg,_#B1845E_0%,_#6F4C3D_99.17%)] w-full flex flex-col justify-center items-center md:pt-16 md:py-28 py-14 md:px-10 px-5 gap-10 relative overflow-hidden">
      <span
        className={`${firaSans.className} text-white md:headline-large headline-medium`}
      >
        Our gallery
      </span>
      <div className="w-full max-w-[1200px] relative grid md:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:gap-5 gap-2 md:px-10 ">
        {listData.map((product) => (
          <ImageCard
            key={product._id}
            item={product}
            width={340}
            height={400}
          />
        ))}
      </div>
      <div
        className={`${firaSansBold.className} text-nowrap text-270 py-10 md:flex hidden gap-14 opacity-45 text-[136px] uppercase text-shadow-white absolute top-0 right-0`}
      >
        <span>Gallery</span>
        <span>Gallery</span>
        <span>Gallery</span>
        <span>Gallery</span>
      </div>
    </div>
  );
};

export default NewCollection;
