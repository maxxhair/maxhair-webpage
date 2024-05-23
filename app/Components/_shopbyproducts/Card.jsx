import Image from "next/image";
import Link from "next/link";
import { firaSans, firaSansMedium } from "../../util/fonts";
import { prodimg } from "../../util/images";

function Card({ name, category, link, image }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || "";

  const imageUrl = image && image.length > 0 ? `${baseUrl}/${image}` : prodimg;

  return (
    <div className="bg-[#F6F6F6] flex flex-col gap-[10px] h-auto w-[300px] px-[20px] py-[20px] justify-evenly items-center">
      <div className="">
        <Image src={imageUrl} alt="" width={300 - 20} height={200} />
      </div>
      <span
        className={`${firaSans.className} lg:title-medium md:label-medium label-small truncate w-[80%] text-center`}
      >
        {name}
      </span>
      <span
        className={`${firaSans.className} lg:label-medium md:body-medium body-small`}
      >
        {category}
      </span>
      <Link
        href={link}
        className="bg-[#242424] text-[#FAFAFA] lg:label-large md:label-medium label-small uppercase w-fit py-[10px] px-[30px]"
      >
        Explore
      </Link>
    </div>
  );
}

export default Card;
