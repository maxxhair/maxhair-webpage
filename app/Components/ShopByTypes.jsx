import Image from "next/image";
import { firaSans } from "../util/fonts";
import { productImage5 } from "../util/images";
import TextureTabs from "./TextureTabs";

function ShopByTypes() {
  const list = [
    { name: "Front Lace Wig", link: "", image: productImage5 },
    { name: "Single Drawn", link: "", image: productImage5 },
    { name: "Double Drawn", link: "", image: productImage5 }
  ];
  return (
    <div className="flex flex-col bg-[#885C46]  w-full justify-evenly items-center md:py-[40px] py-[20px] px-[20px]">
      <span
        className={`${firaSans.className} font-[700] text-[#FAFAFA] lg:headline-large md:headline-medium headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        All About Textures
      </span>
      <TextureTabs />
    </div>
  );
}

export default ShopByTypes;
