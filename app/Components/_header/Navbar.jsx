"use client";

import React, { useState } from "react";
import NavbarItems from "./NavbarItems";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

  return (
    <>
      <button
        className="flex flex-col gap-[5px] lg:hidden justify-center rounded-full md:w-[50px] w-[40px] bg-transparent p-[8px]"
        onClick={() => setToggle(!isToggled)}
      >
        <div className="w-full md:h-[3px] h-[2px] bg-[#384347]"></div>
        <div className="w-full md:h-[3px] h-[2px] bg-[#384347]"></div>
        <div
          className={`${
            isToggled ? "w-full" : "w-1/2"
          } transition-all md:h-[3px] h-[2px] bg-[#384347]`}
        ></div>
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="border-t-2 bg-transparent w-full min-h-fit flex lg:hidden justify-around items-center absolute top-[100%] right-0 z-[2]"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <div className="bg-[#f9f6f3] flex w-full  sm:p-[32px] p-[30px] shadow-lg">
              <NavbarItems setToggle={setToggle} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
