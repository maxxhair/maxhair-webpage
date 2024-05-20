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
      document.documentElement.style.setProperty(
        "--colorToChange",
        scrollTop < 100 ? "#FAFAFA" : "#242424"
      );
    }
    window.addEventListener("scroll", setScrollVar);
    setScrollVar();
    return () => {
      window.removeEventListener("scroll", setScrollVar);
    };
  }, []);

  return null;
}

export default Calc;
