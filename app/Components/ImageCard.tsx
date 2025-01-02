import Image from "next/image";
import React from "react";
import { prodimg } from "../util/images";

interface Props {
  item: any;
  width: number;
  height: number;
}

const ImageCard: React.FC<Props> = ({ item, width, height }) => {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl =
    item?.images && item?.images.length > 0
      ? `${baseUrl}/${item?.images[0]}`
      : prodimg;

  return <Image src={imageUrl} alt="" width={width} height={height} className="border-4 border-white" />;
};

export default ImageCard;
