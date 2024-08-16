/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { firaSans } from "../../util/fonts";
import { productImage5 } from "../../util/images";

function Card({ obj, selected, index }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl =
    obj.image_url && obj.image_url.length > 0
      ? `${baseUrl}/${obj.image_url}`
      : productImage5;

  return (
    <div
      className={` lg:w-[400px] md:w-[300px] w-[250px] border-2 flex flex-col justify-center transition-all duration-200 cursor-pointer ${
        selected === index ? " border-[#242424] " : "border-transparent"
      }`}
    >
      <div>
        <Image
          src={imageUrl}
          alt=""
          width={400}
          height={selected === index ? 500 : 450}
          className={`w-full transition-all duration-200 rounded-sm  object-cover`}
        />
      </div>
      <div
        className={`flex flex-col justify-center transition-all duration-200 border-t-2  items-center gap-[0.5] md:gap-1 pb-[15px] ${
          selected === index
            ? "border-[#242424] bg-[#F2ECE2]"
            : "border-transparent"
        }`}
      >
        <span
          className={`${
            firaSans.className
          } p-[10px] transition-all duration-200 capitalize ${
            selected === index
              ? "lg:title-large md:title-medium text-[#242424] title-small"
              : "lg:label-large md:label-medium label-small"
          }`}
        >
          {obj.title}
        </span>

        <Link
          href="shop"
          className={`text-[#FAFAFA] bg-[#242424] transition-all duration-200 lg:label-large md:label-medium label-small uppercase w-fit py-[5px] px-[10px] md:py-[10px] md:px-[30px] ${
            selected === index ? "opacity-100" : "opacity-0"
          } `}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}

export default Card;
