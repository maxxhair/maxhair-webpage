import Image from "next/image";
import Rating from "./Rating";
import { Fira_Sans, Prompt } from "next/font/google";

const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"]
});

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"]
});

interface Props {
  image: string;
  name: string;
  stock: number;
}

const StockCard: React.FC<Props> = ({ image, name, stock }) => {
  return (
    <div className="w-full h-32 flex border-b-2 ">
      <Image src={image} alt="product-image-error" className="w-20 h-28" />
      <div className="flex w-full justify-between m-4">
        <div className="lg:flex flex-row lg:flex-col w-full">
          <p className={`${firaSans.className} text-sm lg:text-xl font-bold`}>
            {name}
          </p>
          <p>Only {stock} left</p>
        </div>
        <div className="flex">
          <Rating count={5} value={4.5} className=" mt-auto" />
          <p className=" mt-auto ml-3">15185 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default StockCard;