"use client";

import { firaSans, firaSansLight } from "../util/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import { memo, useMemo, useRef } from "react";

const Greet = memo(() => {
  const target = useRef();
  const { scrollY } = useScroll({
    target,
    offset: ["start -96px", "end -96px"],
  });

  const transforms = {
    height: useTransform(scrollY, [0, 150], ["550px", "200px"]),
    opacity: useTransform(scrollY, [0, 30], [1, 0]),
    opacityMin: useTransform(scrollY, [0, 25], [1, 0]),
    color: useTransform(scrollY, [0, 80], ["#FAFAFA", "#242424"]),
    translateY: useTransform(scrollY, [0, 100], [0, 160]),
  };

  return (
    <motion.div
      className={` w-full relative md:flex hidden justify-center items-end text-center bg-[#FAFAFA] text-white`}
      style={{ height: transforms.height }}
      ref={target}
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover absolute top-0"
        style={{ opacity: transforms.opacity }}
        loading="lazy"
      >
        <source src="/video.mp4" type="video/mp4" />
      </motion.video>
      <motion.div
        style={{ opacity: transforms.opacity }}
        className="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0%,_#000000_100%)] w-full h-full absolute top-0"
      />
      <div className="p-[20px] flex flex-col gap-[20px] w-full h-full items-center justify-end pb-10 z-[1] ">
        <span
          className={`${firaSans.className} flex flex-col w-full lg:display-medium md:headline-large headline-medium font-[700]`}
        >
          <motion.span
            style={{
              color: transforms.color,
              y: transforms.translateY,
            }}
          >
            Quality is our Priority!
          </motion.span>
        </span>

        <motion.p
          style={{ opacity: transforms.opacityMin }}
          className={`${firaSansLight.className} md:label-medium label-small md:w-[570px] w-full`}
        >
          One stop shop for all your premium hair extension needs. Allow us to
          make your dream hair come true!
        </motion.p>
        <motion.a
          style={{ opacity: transforms.opacityMin }}
          href="shop"
          className="uppercase  bg-[#F9F6F3] text-[#242424] px-[20px] py-[10px] font-[600] lg:body-large md:body-medium body-small"
        >
          shop now
        </motion.a>
      </div>
    </motion.div>
  );
});
Greet.displayName = "Greet";
export default Greet;
