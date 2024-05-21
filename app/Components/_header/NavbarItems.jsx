import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = ({ setToggle }) => {
  const items = [
    { title: "shop", id: "shop" },
    { title: "educate me", id: "about" },
    { title: "blog", id: "blog" },
    { title: "Contact", id: "contact" },
  ];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex flex-col gap-[20px] "
        variants={navList}
      >
        {items.map((obj, index) => (
          <motion.li key={index} className="flex gap-[20px]" variants={navItem}>
            <div className="w-[5px] rounded-full h-full bg-black"></div>
            <Link
              href={`${obj.id}`}
              className="font-[500] text-[18px] tracking-[-0.2px] hover:translate-x-4 transition-all"
              onClick={() => {
                setToggle(false);
              }}
            >
              {obj.title}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Navbar;
