"use client";

import Select from "react-select";
import {
  categoriesOptions,
  colorOptions,
  productOptions,
  sizeOptions,
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

export const ColorsSelect = () => {
  return (
    <div className="w-[90%] mx-auto">
      <p className="label-medium">Color</p>
      <Select
        options={colorOptions}
        isMulti
        className="w-full"
        defaultValue={[colorOptions[0]]}
      />
    </div>
  );
};

export const SizesSelect = () => {
  return (
    <div className="w-[90%] mx-auto">
      <p className="label-medium">Size</p>
      <Select
        options={sizeOptions}
        isMulti
        className="w-full"
        defaultValue={[sizeOptions[0]]}
      />
    </div>
  );
};
