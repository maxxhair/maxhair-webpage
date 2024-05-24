import Image from "next/image";
import Rating from "./Rating";
import { Fira_Sans, Prompt } from "next/font/google";

const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const StockCard = (props) => {
  return (
    <div className="w-full h-32 flex border-b-2 ">
      <Image
        src={props.image}
        alt="product-image-error"
        className="w-20 h-28"
      />
      <div className="flex w-full justify-between m-4">
        <div className="lg:flex flex-row lg:flex-col w-full">
          <p className={`${firaSans.className} text-sm lg:text-xl font-bold`}>
            Bulk Hair
          </p>
          <p>Only 3 left</p>
        </div>
        <div className="flex">
          <Rating count={5} value={5} className=" mt-auto" />
          <p className=" mt-auto ml-3">15185 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
