"use client";

import Select from "react-select";
import {
  categoriesOptions,
  productOptions,
  textureOptions
} from "../util/staticData";
import React from "react";

export const CategorySelect: React.FC<{}> = () => {
  return (
    <div className="w-[90%] mx-auto">
      <p className="label-medium">Category</p>
      <Select
        options={categoriesOptions}
        isMulti
        className="w-full"
        defaultValue={[categoriesOptions[0]]}
      />
    </div>
  );
};

export const ProductSelect = () => {
  return (
    <div className="w-[90%] mx-auto">
      <p className="label-medium">Product</p>
      <Select
        options={productOptions}
        isMulti
        className="w-full"
        defaultValue={[productOptions[0]]}
      />
    </div>
  );
};

export const TextureSelect = () => {
  return (
    <div className="w-[90%] mx-auto">
      <p className="label-medium">Texture</p>
      <Select
        options={textureOptions}
        isMulti
        className="w-full"
        defaultValue={[textureOptions[0]]}
      />
    </div>
  );
};
