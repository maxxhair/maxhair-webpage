"use client";
import React, { useState } from "react";
import TextureType from "./TextureType";
import { textureTypesData } from "../util/staticData";

const TextureTabs = () => {
  const [selected, setSelected] = useState(1);
  return (
    <>
      <div className="flex items-center gap-3 md:gap-10 my-10">
        {textureTypesData.map((textureType) => (
          <button
            key={textureType.id}
            className={
              selected === textureType.id
                ? "px-6 py-2  border border-black text-sm md:text-lg bg-black text-white font-bold"
                : "px-6 py-2 bg-transparent border border-white text-sm md:text-lg text-white font-bold"
            }
            onClick={() => setSelected(textureType.id)}
          >
            {textureType.type}
          </button>
        ))}
      </div>
      <div className="my-6 w-fit max-w-4xl mx-auto">
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
