"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { plus } from "../util/images";

function ExtraInfoSection({ title, body, isOpen }) {
  const [clicked, setClicked] = useState(isOpen);
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="flex w-full justify-between border-b-2 lg:h-9 sm:h-6 mt-4">
        <p>{title}</p>
        <span
          onClick={() => {
            setClicked((clicked) => !clicked);
            clicked && setExpanded(false);
          }}
          className={` flex justify-center items-center font-extralight text-[30px] text-[#B1845E] cursor-pointer ${
            clicked ? "rotate-45 " : "rotate-0"
          } transition-all h-[24px] w-[24px]`}
        >
          <Image src={plus} alt="img-err" className="w-3" />
        </span>
      </div>
      <AnimatePresence initial={true} mode="popLayout">
        {clicked && (
          <motion.div
            initial={{ opacity: 0, translateY: "-10%" }}
            animate={{ opacity: 1, translateY: "0" }}
            exit={{ opacity: 0, translateY: "-10%" }}
            transition={{ ease: "linear", duration: 0.15 }}
            className=" text-[#000000] border-[1px] border-[#ECECEC] w-full flex flex-col md:gap-[40px] gap-[20px] px-[40px] py-[20px] lg:body-large md:body-medium body-small"
          >
            {expanded
              ? body.map((ele: any, index: number) => {
                  return <p key={index}>{ele}</p>;
                })
              : body.map((ele: any, index: number) => {
                  if (index === 0) return <p key={index}>{ele}</p>;
                  if (index === 1)
                    return (
                      <span className="text-wrap" key={index}>
                        <p className="truncate">{ele}</p>
                        <button
                          className="font-[700] hover:drop-shadow-md transition-all"
                          onClick={() => {
                            setExpanded(true);
                          }}
                        >
                          Read More
                        </button>
                      </span>
                    );
                })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExtraInfoSection;
