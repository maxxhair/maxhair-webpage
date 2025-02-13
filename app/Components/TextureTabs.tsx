"use client";
import React, { useState } from "react";
import TextureType from "./TextureType";
import { textureTypesData } from "../util/staticData";

const TextureTabs = () => {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="flex items-center flex-wrap justify-center gap-3 md:gap-5 my-10 z-[1]">
        {textureTypesData.map((textureType) => (
          <button
            key={textureType.id}
            className={
              selected === textureType.id
                ? "px-16 py-2  border-2 border-[#885C46] text-sm md:text-lg bg-[#885C46] text-white font-bold uppercase"
                : "px-16 py-2 bg-transparent border-2 border-[#242424] text-sm md:text-lg text-[#242424] font-bold uppercase"
            }
            onClick={() => setSelected(textureType.id)}
          >
            {textureType.type}
          </button>
        ))}
      </div>
      <div className="flex justify-center md:my-6 my-3 w-full z-[1]">
        {textureTypesData
          .filter((textureType) => textureType.id === selected)
          .map((texture, index) => (
            <TextureType data={texture.data} key={index} />
          ))}
      </div>
    </>
  );
};

export default TextureTabs;
