"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

type ImageAnimationProps = {
  image: StaticImageData;
  alternative: string;
};

function ImageAnimation({ image, alternative }: ImageAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["80%", "0%"]);
  const ySpring = useSpring(y, { stiffness: 100, damping: 20 });

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this value to suit when the animation should start
  });

  return (
    <motion.div
      ref={(node) => {
        ref.current = node;
        inViewRef(node);
      }}
      initial={{ opacity: 0, scale: 0.9, y: "0%" }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="h-full w-full"
      style={{ y: ySpring }}
    >
      <Image src={image} alt={alternative} />
    </motion.div>
  );
}

export default ImageAnimation;
