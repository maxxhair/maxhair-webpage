import Image from "next/image";
import { firaSans } from "../util/fonts";
import { design1, design2 } from "../util/images";
import TextureTabs from "./TextureTabs";

function ShopByTypes() {
  return (
    <div className="flex flex-col bg-[#E3D6C5] w-full justify-evenly items-center md:py-[40px] py-[20px] px-[20px] relative">
      <span
        className={`${firaSans.className} font-[700] text-[#30201A] md:headline-medium headline-small text-center w-full`}
      >
        All About Textures
      </span>
      <TextureTabs />
      <Image
        src={design1}
        alt=""
        className="absolute md:block hidden top-0 h-full  right-0"
      />
      <Image
        src={design2}
        alt=""
        className="absolute md:block hidden top-0  h-full left-0"
      />
    </div>
  );
}

export default ShopByTypes;
