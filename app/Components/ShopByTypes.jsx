import Image from "next/image";
import { firaSans } from "../util/fonts";
import { prodimg } from "../util/images";
import Link from "next/link";

function ShopByTypes() {
  return (
    <div className="flex flex-col bg-[#885C46] min-h-[800px] h-[90vh] w-full justify-evenly items-center md:py-[40px] py-[20px] px-[20px]">
      <span
        className={`${firaSans.className} font-[700] text-[#FAFAFA] lg:headline-large md:headline-medium headline-small text-center lg:w-[60%] md:w-[80%] w-full`}
      >
        Shop By Types
      </span>
      <div className="flex h-[70%] gap-[30px] justify-center lg:w-[60%] md:w-[80%] w-full">
        <div className=" w-[calc(50%-30px)] h-full p-[20px] relative">
          <Image
            src={prodimg}
            alt=""
            className=" absolute top-0 left-0 h-full w-full object-cover "
          />
          <div className="flex flex-col absolute top-[30px] left-[30px] ">
            <span
              className={`${firaSans.className} lg:title-large md:title-medium title-small text-black `}
            >
              Front Lace Wig
            </span>
            <Link
              href=""
              className="border-b-2 border-black w-fit pb-[5px] font-[600]"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[calc(50%-30px)] gap-[30px] h-full ">
          <div className="w-full h-[calc(50%)] relative p-[20px]">
            <Image
              src={prodimg}
              alt=""
              className=" absolute top-0 left-0 h-full w-full object-cover "
            />
            <div className="flex flex-col absolute bottom-[30px] left-[30px] ">
              <span
                className={`${firaSans.className} lg:title-large md:title-medium title-small text-black `}
              >
                Front Lace Wig
              </span>
              <Link
                href=""
                className="border-b-2 border-black w-fit pb-[5px] font-[600]"
              >
                Shop now
              </Link>
            </div>
          </div>
          <div className="w-full h-[calc(50%)] relative p-[20px]">
            {" "}
            <Image
              src={prodimg}
              alt=""
              className=" absolute top-0 left-0 h-full w-full object-cover "
            />
            <div className="flex flex-col absolute bottom-[30px] left-[30px] ">
              <span
                className={`${firaSans.className} lg:title-large md:title-medium title-small text-black `}
              >
                Front Lace Wig
              </span>
              <Link
                href=""
                className="border-b-2 border-black w-fit pb-[5px] font-[600]"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopByTypes;
