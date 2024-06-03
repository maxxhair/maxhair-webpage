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
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <button
        className="flex flex-col gap-[5px] md:hidden justify-center rounded-full w-[50px] h-[px] bg-transparent p-[8px]"
        onClick={() => setToggle(!isToggled)}
      >
        <div className="w-full h-[3px] bg-[#384347]"></div>
        <div className="w-full h-[3px] bg-[#384347]"></div>
        <div
          className={`${
            isToggled ? "w-full" : "w-1/2"
          } transition-all h-[3px] bg-[#384347]`}
        ></div>
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="border-t-2 bg-transparent w-full min-h-fit flex md:hidden justify-around items-center absolute top-[100%] right-0 z-50 "
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <div className="bg-[#f9f6f3] flex w-full  px-[32px] py-[32px]  shadow-lg">
              <NavbarItems setToggle={setToggle} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
