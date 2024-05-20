"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function InfoSection({ title, body, isOpen }) {
  const [clicked, setClicked] = useState(isOpen);
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col xl:w-[55%] lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%]">
      <div
        className={`flex justify-between items-center gap-[10px] border-[1px] border-[#E7E7E7] w-full py-[20px] px-[20px]`}
      >
        <div className="flex gap-[15px] items-center">
          <div className="h-[8px] w-[8px] bg-[#C4A484] rounded-full"></div>
          <p className="lg:body-large md:body-medium body-small tracking-wide capitalize">
            {title}
          </p>
        </div>

        <span
          onClick={() => {
            setClicked((clicked) => !clicked);
            clicked && setExpanded(false);
          }}
          className={` flex justify-center items-center font-extralight text-[30px] text-[#B1845E] cursor-pointer ${
            clicked ? "rotate-45 " : "rotate-0"
          } transition-all h-[24px] w-[24px]`}
        >
          +
        </span>
      </div>
      <AnimatePresence initial={true} mode="popLayout">
        {clicked && (
          <motion.div
            initial={{ opacity: 0, translateY: "-10%" }}
            animate={{ opacity: 1, translateY: "0" }}
            exit={{ opacity: 0, translateY: "-10%" }}
            transition={{ ease: "linear", duration: 0.15 }}
            className=" text-[#6D6D6D] border-[1px] border-[#E7E7E7] w-full flex flex-col md:gap-[40px] gap-[20px] px-[40px] py-[20px] lg:body-large md:body-medium body-small"
          >
            {expanded
              ? body.map((ele, index) => {
                  return <p key={index}>{ele}</p>;
                })
              : body.map((ele, index) => {
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

export default InfoSection;
