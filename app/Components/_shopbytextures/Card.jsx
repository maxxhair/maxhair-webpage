/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { firaSans } from "../../util/fonts";
import { productImage5 } from "../../util/images";

function Card({ obj, selected, index }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl =
    obj.image_url && obj.image_url.length > 0
      ? `${baseUrl}/uploads/${obj.image_url}`
      : productImage5;

  return (
    <div
      className={` border flex flex-col justify-center transition-all duration-200 cursor-pointer ${
        selected === index
          ? " border-[#242424] "
          : "border-transparent scale-75"
      }`}
    >
      <div>
        <Image
          src={imageUrl}
          alt=""
          width={300}
          height={selected === index ? 500 : 450}
          className={`w-full transition-all duration-200 rounded-sm  object-cover`}
        />
      </div>
      <div
        className={`flex flex-col justify-center transition-all duration-200  items-center gap-[0.5] md:gap-1 md:pb-7 pb-5 md:pt-3 pt-2 ${
          selected === index
            ? "border-[#242424] bg-[#F9F6F3]"
            : "border-transparent"
        }`}
      >
        <span
          className={`${
            firaSans.className
          } p-[10px] transition-all text-center duration-200 capitalize ${
            selected === index
              ? " md:title-medium text-[#242424] title-small"
              : "md:label-medium label-small"
          }`}
        >
          {obj.title}
        </span>

        <Link
          href="shop"
          className={`text-[#FAFAFA] bg-[#242424] transition-all duration-200 md:body-medium body-small w-fit py-[5px] px-[10px]  ${
            selected === index ? "" : "hidden"
          } `}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}

export default Card;
