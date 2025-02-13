import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import {
  blogsForNavbarIcon,
  contactForNavbarIcon,
  educateForNavbarIcon,
  profileForNavbarIcon,
  shopForNavbarIcon,
} from "../../util/images";
import ourstory from "../../../public/aboutus.svg";
import Image from "next/image";

const Navbar = ({ setToggle }) => {
  const loggedUser = useSelector((state) => state.user.user);

  const items = [
    { title: "Home", id: "", icon: profileForNavbarIcon },
    { title: "Shop", id: "shop", icon: shopForNavbarIcon },
    { title: "Our Story", id: "ourstory", icon: ourstory },
    {
      title: "Meet Our Stylist",
      id: "meetOurStylist",
      icon: educateForNavbarIcon,
    },
    { title: "Blog", id: "blog", icon: blogsForNavbarIcon },
    { title: "Contact", id: "contact", icon: contactForNavbarIcon },
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
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 100, velocity: 10 },
      },
    },
    hidden: {
      x: 20,
      opacity: 0,
      transition: {
        x: { stiffness: 100, velocity: 10 },
      },
    },
  };

  return (
    <>
      <motion.ul
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex flex-col md:gap-[20px] gap-[10px]"
        variants={navList}
      >
        {items.map((obj, index) => (
          <motion.li
            key={index}
            className="flex gap-[20px] items-center"
            variants={navItem}
          >
            <Image src={obj.icon} alt={obj.title} width={30} height={30} />
            <Link
              href={`/${obj.id}`}
              className="font-[500] md:text-base text-sm tracking-[-0.2px] hover:translate-x-4 transition-all"
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
