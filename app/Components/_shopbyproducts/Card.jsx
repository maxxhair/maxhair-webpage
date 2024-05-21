import Image from "next/image";
import Link from "next/link";
import { firaSans } from "../../util/fonts";

function Card({ name, number, link, image }) {
  return (
    <div className="bg-[#F6F6F6] flex flex-col h-[450px] w-[300px] p-[20px] pt-[30px] justify-evenly items-center">
      <div className="h-[180px] w-[140px]">
        <Image src={image} alt="" />
      </div>
      <span
        className={`${firaSans.className} lg:label-large md:label-medium label-small`}
      >
        {name}
      </span>
      <span
        className={`${firaSans.className} lg:body-large md:body-medium body-small`}
      >
        {number} Products
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