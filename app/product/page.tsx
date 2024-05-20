import Image from "next/image";
import { Fira_Sans, Prompt } from "next/font/google";
import ReviewCard from "../Components/ReviewCard";
import ProductCard from "../Components/ProductCard";
import { plus, deliveryImg, productImage, logo } from "../util/images";
import SizeButton from "../Components/SizeButton";
import ChooseButton from "../Components/ChooseButton";

const firaSans = Fira_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div
      className={`${prompt.className} bg-white text-black w-4/5 sm:w-screen 2xl:w-4/5 2xl:m-auto`}
    >
      <div className="md:flex flex-row inline">
        <div className=" md:w-6/12 p-8 sm:m-auto xl:m-0 sm:w-3/5">
          <Image src={productImage} alt="img-error" />
        </div>
        <div className="md:w-6/12 p-8 sm:m-auto sm:text-xs xl:text-sm ">
          <p className="text-sm font-semibold">HomeBulk Hair</p>
          <p className="text-sm font-semibold mt-5">Select Size</p>
          <div className=" space-x-4 flex mt-3">
            <SizeButton size={16} />
            <SizeButton size={18} />
            <SizeButton size={20} />
            <SizeButton size={22} />
            <SizeButton size={24} />
            <SizeButton size={26} />
            <SizeButton size={28} />
            <SizeButton size={32} />
          </div>
          <p className="text-sm font-semibold mt-4">Color</p>
          <div className="space-x-4 flex mt-3">
            <ChooseButton desc="Natural" />
            <ChooseButton desc="#P4/22" />
            <ChooseButton desc="#613" />
            <ChooseButton desc="#24" />
          </div>
          <p className="text-sm font-semibold mt-4">Type</p>
          <div className="space-x-4 flex mt-3">
            <ChooseButton desc="Single Drawn" />
          </div>
          <p className="text-sm font-semibold mt-4">Texture</p>
          <div className="space-x-4 flex mt-3">
            <ChooseButton desc="Straight/Wavy" />
            <ChooseButton desc="Straight" />
            <ChooseButton desc="Jackson" />
          </div>
          <div className="flex space-x-3 mt-4">
            <Image src={deliveryImg} alt="img-err" />
            <p className=" sm:mt-1 ">Free Delivery & Easy Returns</p>
          </div>
          <div className="sm:review-card">
            <button
              type="submit"
              className=" w-11/12 text-white font-medium text-sm px-5 py-3.5 text-center bg-neutral-800 focus:ring-4 mt-8 "
            >
              ADD TO CART ( $258 )
            </button>
          </div>
          <div className="flex mt-4 border  border-neutral-200 rounded w-11/12">
            <Image src={logo} alt="img-err" className="m-3 w-16" />
            <p className="text-sm p-5 font-semibold">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>
          </div>
          <p className=" text-lg font-semibold mt-4">Description</p>
          <div className="mt-3 w-11/12 text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>

            <p className="mt-1.5">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>

            <p className="mt-1.5">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>

            <p className="mt-1.5">
              Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
              tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
              rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
              nam quis non at bibendum nulla nulla
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex mt-10 sm:inline">
        <div className=" lg:w-5/12 lg:p-8 lg:pr-32 font-semibold sm:w-screen sm:p-12">
          <p>
            Lorem ipsum dolor sit amet consectetur. Etiam urna elit dictum
            tortor.Sagittis neque a habitant commodo sit nisl. Sit facilisis
            rhoncus bibendum aliquam montes magna blandit lobortis quis. Eget
            nam quis non at bibendum nulla nulla
          </p>
        </div>
        <div className="w-7/12 h-auto sm:text-xs xl:text-sm">
          <div className="flex w-full justify-between ml-12 border-b-2 mr-10 lg:h-9 sm:h-6">
            <p>Features</p>
            <Image src={plus} alt="img-err" className="w-3" />
          </div>
          <div className="flex w-full justify-between ml-12 border-b-2 mr-10 lg:h-9 mt-4 sm:h-6">
            <p>Benefits</p>
            <Image src={plus} alt="img-err" className="w-3" />
          </div>
          <div className="flex w-full justify-between ml-12 border-b-2 mr-10 lg:h-9 mt-4 sm:h-6">
            <p>Materials & Technology</p>
            <Image src={plus} alt="img-err" className="w-3" />
          </div>
          <div className="flex w-full justify-between ml-12 border-b-2 mr-10 lg:h-9 mt-4 sm:h-6">
            <p>Delivery & Returns</p>
            <Image src={plus} alt="img-err" className="w-3" />
          </div>
          <div className="flex w-full justify-between ml-12 border-b-2 mr-10 lg:h-9 mt-4 sm:h-6">
            <p>Maxx Hair Performance Guarantee</p>
            <Image src={plus} alt="img-err" className="w-3" />
          </div>
        </div>
      </div>
      <div>
        <p className={`${firaSans.className} text-3xl mt-20 ml-8 font-bold`}>
          Most Popular
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div>
        <p className={`${firaSans.className} text-3xl mt-16 ml-8 font-bold`}>
          Repeat Orders
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="mt-16 ml-8 mr-8">
        <p className={`${firaSans.className} text-3xl  font-bold`}>
          Customer Reviews
        </p>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
