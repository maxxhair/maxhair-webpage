"use client";

import { useRef } from "react";

function Random() {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    const container = containerRef.current;
    if (container) {
      const isHorizontalEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth;
      if (isHorizontalEnd) {
      } else {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
      // Stop the event from propagating to parent elements
      e.stopPropagation();
    }
  };

  return (
    <div
      className="flex overscroll-none w-screen h-screen"
      id="horizontal"
      onWheel={handleWheel}
      ref={containerRef}
    >
      {Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="w-[100px] h-[100px]">
          Item {index + 1}
        </div>
      ))}
    </div>
  );
}

export default Random;
