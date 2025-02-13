import Faq from "./Components/Faq";
import Greet from "./Components/Greet";
import Blogs from "./Components/Blogs";
import ShopByTypes from "./Components/ShopByTypes";
import NewCollection from "./Components/NewCollection";
import ShopByProducts from "./Components/ShopByProducts";
import ShopByTextures from "./Components/ShopByTextures";
import GreetMobile from "./Components/GreetMobile";
import Slider2 from "./Components/_shopbytextures/Slider2";

export default function Home() {
  return (
    <section className="mt-20 xl:mt-24">
      <Greet />
      <GreetMobile />
      {/* <ShopByTextures /> */}
      <Slider2 />
      <ShopByProducts />
      <NewCollection />
      <ShopByTypes />
      
      <Blogs />
      <Faq />
    </section>
  );
}
