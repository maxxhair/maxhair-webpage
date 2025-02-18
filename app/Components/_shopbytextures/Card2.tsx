/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { firaSans } from "../../util/fonts";
import { productImage5 } from "../../util/images";

function Card2({ obj, selected, index }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl =
    obj.image_url && obj.image_url.length > 0
      ? `${baseUrl}/uploads/${obj.image_url}`
      : productImage5;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-end md:items-center w-full h-full max-h-[80vh] relative">
      {/* Text and Button Section */}

      {/* Image */}
      <Image
        src={imageUrl}
        alt={obj.title || "Image"}
        width={500}
        height={500}
        className="rounded-lg object-contain h-full w-full slide-image"
        style={{
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out"
        }}
      />
    </div>
  );
}

export default Card2;