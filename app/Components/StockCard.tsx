import Image from "next/image";
import Rating from "./Rating";
import { firaSans } from "../util/fonts";

const StockCard = ({ image, name, stock }) => {
  return (
    <div className="w-full h-32 flex border-b-2 ">
      <Image src={image} alt="product-image-error" width={80} height={140} />
      <div className="flex lg:flex-row flex-col w-full justify-between m-4 ">
        <div
          className="flex flex-row lg:flex-col w-full gap-3 lg:items-start items-center 
        "
        >
          <p className={`${firaSans.className} text-sm lg:text-xl font-bold`}>
            {name}
          </p>
          <p>Only {stock} left</p>
        </div>
        <div className="flex">
          <Rating count={5} value={4.5} className="mt-auto" />
          <p className=" mt-auto ml-3">15185 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
