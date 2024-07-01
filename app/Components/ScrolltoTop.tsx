"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrolltoTop = () => {
  const path = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return;
};

export default ScrolltoTop;
