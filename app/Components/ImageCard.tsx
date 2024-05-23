import Image from "next/image";
import React from "react";
import { prodimg } from "../util/images";

interface Props {
  item: any;
}

const ImageCard: React.FC<Props> = ({ item }) => {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl =
    item?.images && item?.images.length > 0
      ? `${baseUrl}/${item?.images[0]}`
      : prodimg;

  return <Image src={imageUrl} alt="" width={380} height={480} />;
};

export default ImageCard;
