"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { firaSansMedium } from "../util/fonts";
import NewCollectionMobile from "./_newcollection/NewCollectionMobile";
import { getProducts } from "../util/serverSideProps";
import axiosInstance, { baseUrl } from "../util/axiosInstance";
import ImageCard from "./ImageCard";
import axios from "axios";

const NewCollection = () => {
  const cards = Array(4).fill();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

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

  return (
    <>
      <div className="lg:block hidden">
        <section ref={targetRef} className="relative h-[200vh] bg-[#FAFAFA]">
          <div className="sticky top-0  flex h-screen pt-[40px]  items-center overflow-hidden lg:pl-[calc(15%+350px)] md:pl-[calc(10%+300px)] pl-[calc(5%+200px)]">
            <div className="lg:w-[calc(15%+350px)] md:w-[calc(10%+300px)] w-[calc(5%+200px)] flex justify-end bg-[#FAFAFA] lg:h-[60vh] md:h-[55vh] h-[60vh] lg:min-h-[450px] md:min-h-[300px] min-h-[200px] absolute left-0 z-50">
              <div className=" flex flex-col justify-between p-[40px] lg:w-[350px] md:w-[300px] w-[200px] h-full bg-[#B1845E]">
                <div
                  className={`flex flex-col gap-[10px] ${firaSansMedium.className} lg:headline-large md:headline-medium headline-small text-[#FAFAFA]`}
                >
                  <span>Our</span>
                  <span>Gallery</span>
                </div>
              </div>
            </div>
            <motion.div style={{ x }} className="flex">
              {listData?.slice(5, 10).map((product, index) => {
                return (
                  <div
                    key={index}
                    className="group relative flex flex-col justify-center items-center w-[400px] overflow-hidden "
                  >
                    <ImageCard
                      key={product._id}
                      item={product}
                      width={340}
                      height={400}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
      <NewCollectionMobile cards={cards} />
    </>
  );
};

export default NewCollection;
