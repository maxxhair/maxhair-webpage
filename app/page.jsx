import Faq from "./Components/Faq";

import Greet from "./Components/Greet";
import OfferSpace from "./Components/OfferSpace";
import Random from "./Components/Random";
import Blogs from "./Components/Blogs";
import Reviews from "./Components/Reviews";
import ShopByTypes from "./Components/ShopByTypes";

export default function Home() {
  return (
    <>
      <div className="lg:h-[calc(80vh+60vh)] md:h-[calc(75vh+55vh)] h-[calc(55vh+50vh)] bg-[#FAFAFA]">
        <div className="stickydiv top-[80px] ">
          <Greet />
          <OfferSpace />
        </div>
      </div>
      {/* <Random /> */}
      <ShopByTypes />
      <Reviews />
      <Blogs />
      <Faq />
    </>
  );
}
