import Image from "next/image";
import React from "react";

const TextureType = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-7 flex-wrap">
      {data.map((item, index) => (
        <div className="flex flex-col items-center gap-4" key={index}>
          <div className="relative w-20 md:w-44 aspect-square rounded-full border-2 border-white">
            <Image src={item.img} alt={item.name} fill />
          </div>
          <p className="text-sm md:text-xl text-white font-bold">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TextureType;
