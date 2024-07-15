"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <motion.div
      ref={ref}
      className="h-full w-full"
      style={{
        backgroundColor: color,
        y,
      }}
    ></motion.div>
  );
}

export default DivAnimation;
