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
      <div id="greet" className="bg-[#FAFAFA]">
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
