"use client";
import { useEffect, useState } from "react";
import { firaSansMedium } from "../../util/fonts";
import ImageCard from "../ImageCard";
import axiosInstance from "../../util/axiosInstance";

function NewCollectionMobile() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const getRequest = async () => {
      try {
        const data = await axiosInstance.get("/products");
        const temp = data.data.data;
        setListData(temp);
      } catch (err) {
        console.log("from new collections:", err);
      }
    };
    getRequest();
  }, []);

  return (
    <>
      <span
        className={` ${firaSansMedium.className} lg:headline-large md:headline-medium headline-small w-full flex justify-center  text-[#242424]`}
      >
        Our Gallery
      </span>
      <div className="lg:hidden grid md:grid-cols-3 grid-cols-2 md:gap-[60px] gap-[20px] place-items-center p-[40px] bg-[#FAFAFA]">
        {listData?.slice(5, 11).map((product, index) => {
          return (
            <div
              key={index + "---"}
              className="group relative flex flex-col justify-center items-center lg:w-[400px] md:w-[300px] w-[200px] overflow-hidden "
            >
              <ImageCard
                key={product._id}
                item={product}
                width={160}
                height={240}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NewCollectionMobile;
