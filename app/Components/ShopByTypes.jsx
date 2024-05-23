import Image from "next/image";
import { firaSans } from "../util/fonts";
import { prodimg } from "../util/images";
import Link from "next/link";

function ShopByTypes() {
  const list = [
    { name: "Front Lace Wig", link: "", image: prodimg },
    { name: "Single Drawn", link: "", image: prodimg },
    { name: "Double Drawn", link: "", image: prodimg }
  ];
  return (
    <div className="flex flex-col bg-[#885C46] min-h-[800px] h-[90vh] w-full justify-evenly items-center md:py-[40px] py-[20px] px-[20px]">
      <span
        className={`${firaSans.className} font-[700] text-[#FAFAFA] lg:headline-large md:headline-medium headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        Shop By Types
      </span>
      <div className="flex h-[70%] gap-[30px] justify-center lg:w-[60%] md:w-[80%] w-full">
        <div className="w-full h-full relative p-[20px]">
          <Image
            src={list[1].image}
            alt=""
            className=" absolute top-0 left-0 h-full w-full object-cover "
          />
          <div className="flex flex-col absolute bottom-[30px] left-[30px] ">
            <span
              className={`${firaSans.className} lg:title-large md:title-medium title-small text-white `}
            >
              {list[1].name}
            </span>
            <Link
              href={list[1].link}
              className="border-b-2 border-transparent transition-all hover:border-white w-fit pb-[5px] font-[600] text-white"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="w-full h-full relative p-[20px]">
          {" "}
          <Image
            src={list[2].image}
            alt=""
            className=" absolute top-0 left-0 h-full w-full object-cover "
          />
          <div className="flex flex-col absolute bottom-[30px] left-[30px] ">
            <span
              className={`${firaSans.className} lg:title-large md:title-medium title-small text-white `}
            >
              {list[2].name}
            </span>
            <Link
              href={list[2].name}
              className="border-b-2 border-transparent transition-all hover:border-white w-fit pb-[5px] font-[600] text-white"
            >
              Shop now
            </Link>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ShopByTypes;
