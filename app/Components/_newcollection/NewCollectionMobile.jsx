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
    <div className="lg:hidden flex flex-col md:gap-[40px] gap-[20px] p-[40px] justif-center items-center bg-[#FAFAFA]">
      <span
        className={` ${firaSansMedium.className} lg:headline-large md:headline-medium headline-small text-[#242424]`}
      >
        Our Gallery
      </span>
      {listData?.slice(5, 10).map((product, index) => {
        return (
          <div
            key={index + "---"}
            className="group relative flex flex-col justify-center lg:w-[400px] md:w-[300px] w-[200px] overflow-hidden "
          >
            <ImageCard key={product._id} item={product} />
          </div>
        );
      })}
    </div>
  );
}

export default NewCollectionMobile;
