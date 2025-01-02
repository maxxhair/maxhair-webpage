"use client";
import "swiper/css";
import { firaSansMedium } from "../util/fonts";
import React, { useEffect, useState } from "react";
import Card from "./_shopbyproducts/Card";
import { prodimg } from "../util/images";
import { baseUrl } from "../util/axiosInstance";
import Loader from "./Loader";
import axios from "axios";

function ShopByProducts() {
  const [list, setListData] = useState(null);
  useEffect(() => {
    const getRequest = async () => {
      try {
        const data = await axios.get(`${baseUrl}products`);
        const temp = data.data.data;
        setListData(temp);
      } catch (err) {
        console.log("from products:", err);
      }
    };

    getRequest();
  }, []);

  if (!list) {
    return <Loader />;
  }

  return (
    <div className=" bg-[#FAFAFA] flex flex-col justify-center items-center  w-full lg:px-[30px]  md:py-[40px] py-[20px] md:gap-[40px] gap-[20px]">
      <span
        className={`${firaSansMedium.className} font-[700] lg:headline-large md:headline-medium headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        Shop By Products
      </span>
      <div className="w-full max-w-[1200px] relative grid md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-5 px-10">
        {list.map((ele, index) => {
          return (
            <Card
              key={index}
              name={ele?.title}
              category={ele.category?.title}
              link={`${ele._id}`}
              image={ele.images[0] || prodimg}
              subProducts={ele.subProducts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShopByProducts;
