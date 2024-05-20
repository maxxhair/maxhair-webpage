"use client";

import { useEffect } from "react";

function Calc() {
  useEffect(() => {
    function setScrollVar() {
      const scrollTop = document.documentElement.scrollTop;
      document.documentElement.style.setProperty(
        "--fromTop",
        scrollTop < 200 ? scrollTop : 200
      );
    }
    window.addEventListener("scroll", setScrollVar);
    setScrollVar();
    return () => {
      window.removeEventListener("scroll", setScrollVar);
    };
  }, []);

  return <></>;
}

export default Calc;
