"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type DivAnimationProps = {
  color: string;
};

function DivAnimation({ color }: DivAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create a parallax effect by mapping scrollYProgress to larger y values
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  // Add a laggy effect using useSpring
  const ySpring = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: "0%" }}
      className="h-full w-full"
      style={{
        backgroundColor: color,
        y: ySpring,
      }}
    ></motion.div>
  );
}

export default DivAnimation;
