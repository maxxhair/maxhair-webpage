import Faq from "./Components/Faq";
import Greet from "./Components/Greet";
import Blogs from "./Components/Blogs";
import ShopByTypes from "./Components/ShopByTypes";
import NewCollection from "./Components/NewCollection";
import ShopByProducts from "./Components/ShopByProducts";
import ShopByTextures from "./Components/ShopByTextures";
import GreetMobile from "./Components/GreetMobile";

export default function Home() {
  return (
    <section className="mt-20 xl:mt-24">
      <Greet />
      <GreetMobile />
      <ShopByTextures />
      <ShopByProducts />
      <NewCollection />
      <ShopByTypes />
      <Blogs />
      <Faq />
    </section>
  );
}
