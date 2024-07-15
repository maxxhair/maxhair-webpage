"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

type ImageAnimationProps = {
  image: StaticImageData;
  alternative: string;
};

function ImageAnimation({ image, alternative }: ImageAnimationProps) {
  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.div
      ref={ref}
      className="h-full w-full"
      style={{
        y,
      }}
    >
      <Image src={image} alt={alternative} />
    </motion.div>
  );
}

export default ImageAnimation;
