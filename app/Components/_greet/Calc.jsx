"use client";

import { useEffect, useRef } from "react";

function Calc() {
  const didRun = useRef(false);
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
      document.documentElement.style.setProperty(
        "--shopButtonDisplay",
        scrollTop >= 200 ? "none" : "all"
      );
    }
    if (!didRun.current) {
      const element = document.getElementById("greet");
      const height = parseFloat(window.getComputedStyle(element).height);
      element.style.height = height * 2.3 + "px";
      console.log(element.style.height);
      didRun.current = true;
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
