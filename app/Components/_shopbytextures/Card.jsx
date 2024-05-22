import Link from "next/link";
import Image from "next/image";
import { firaSans } from "../../util/fonts";

function Card({ obj, selected, index }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl =
    obj.image_url && obj.image_url.length > 0
      ? `${baseUrl}/${obj.image_url}`
      : prodimg;

  return (
    <div
      className={` w-[400px] h-full flex flex-col justify-center cursor-pointer`}
    >
      <div>
        <Image
          src={imageUrl}
          alt=""
          width={400}
          height={selected === index ? 500 : 450}
          className={`w-full transition-all ${
            selected === index ? "h-[500px]" : "h-[450px]"
          } object-cover`}
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-[10px] p-[20px] ${
          selected === index && "border-2 border-t-0 border-[#242424]"
        }`}
      >
        <span
          className={`${firaSans.className} ${
            selected === index
              ? "lg:title-large md:title-medium title-small"
              : "lg:label-large md:label-medium label-small"
          }`}
        >
          {obj.title}
        </span>
        {selected === index && (
          <Link
            href="shop"
            className="bg-[#242424] text-[#FAFAFA] lg:label-large md:label-medium label-small uppercase w-fit py-[10px] px-[30px]"
          >
            Buy Now
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
