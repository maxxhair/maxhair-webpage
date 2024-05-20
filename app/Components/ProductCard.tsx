import Image from "next/image";
import { prodimg } from "../util/images";
import { Fira_Sans, Prompt } from "next/font/google";

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const ProductCard = () => {
  return (
    <div className={`${prompt.className}  prodcard pt-8 h-auto`}>
      <Image src={prodimg} alt="img-err" className=" m-auto" />

      <p className=" align-middle justify-center flex text-zinc-500 text-sm">
        Natural
      </p>
      <p
        className={`${firaSans.className} align-middle justify-center flex text-xl font-semibold`}
      >
        Machine Weft | Curly
      </p>
      <p className="align-middle justify-center flex font-semibold ">$ 440</p>
      <div className="flex space-x-20 ml-8 mr-8 border-b-2 text-sm ">
        <p>Saloon Installed</p>
        <p>Double Drawn</p>
      </div>
    </div>
  );
};
export default ProductCard;
