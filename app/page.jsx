import Faq from "./Components/Faq";
import Greet from "./Components/Greet";
import OfferSpace from "./Components/OfferSpace";
import Blogs from "./Components/Blogs";
import Reviews from "./Components/Reviews";
import ShopByTypes from "./Components/ShopByTypes";
import NewCollection from "./Components/NewCollection";
import ShopByProducts from "./Components/ShopByProducts";
import ShopByTextures from "./Components/ShopByTextures";

export default function Home() {
  return (
    <>
      <div className="lg:h-[calc(110vh+60vh)] md:h-[calc(110vh+55vh)] h-[calc(110vh+50vh)] bg-[#FAFAFA]">
        <div className="stickydiv top-[80px] ">
          <Greet />
          <ShopByTextures />
        </div>
      </div>
      <OfferSpace />
      <ShopByProducts />
      <NewCollection />
      <ShopByTypes />
      <Reviews />
      <Blogs />
      <Faq />
    </>
  );
}
