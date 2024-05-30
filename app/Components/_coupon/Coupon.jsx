"use client";
import { firaSansBold } from "/app/util/fonts";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Coupon() {
  //set both of these values with api
  const [coupon, setCoupon] = useState("MAXX40");
  const [offer, setOffer] = useState(40);
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });

  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x, y });
  };

  const handleMouseLeave = (event) => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <>
      <motion.span
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x, y, rotate: -5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        ref={ref}
        className={`${firaSansBold.className} text-[#FFC250] lg:h-[100px] md:h-[60px] h-[20px]  w-[20px] select-none relative flex justify-center font-black lg:text-[180px] md:text-[120px] text-[80px]`}
      >
        <span className="absolute lg:-bottom-[30%] md:-bottom-[30%] -bottom-5">
          {offer}%
        </span>
      </motion.span>
      <div className="bg-[#242424] text-[#FAFAFA] flex justify-center items-center w-[250px] h-[60px] text-[18px] uppercase">
        {coupon}
      </div>
    </>
  );
}

export default Coupon;
