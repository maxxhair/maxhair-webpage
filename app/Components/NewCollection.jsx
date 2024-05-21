"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { firaSansMedium } from "../util/fonts";
import ProductCard from "./ProductCard";
import NewCollectionMobile from "./_newcollection/NewCollectionMobile";

const Example = () => {
  const cards = Array(4).fill();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
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
                  <span>New</span>
                  <span>Collection</span>
                </div>
                <div
                  className={`flex flex-col gap-[10px] ${firaSansMedium.className} lg:headline-large md:headline-medium headline-small text-[#FAFAFA]`}
                >
                  <span>40+</span>
                  <span>Varieties</span>
                </div>
              </div>
            </div>

            <motion.div style={{ x }} className="flex gap-4">
              {cards.map((_, index) => {
                return (
                  <div
                    key={index}
                    className="group relative flex flex-col justify-center lg:w-[400px] md:w-[300px] w-[200px] overflow-hidden "
                  >
                    <ProductCard />
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

export default Example;
