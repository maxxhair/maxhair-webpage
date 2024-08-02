import Faq from "./Components/Faq";
import Greet from "./Components/Greet";
import Blogs from "./Components/Blogs";
import ShopByTypes from "./Components/ShopByTypes";
import NewCollection from "./Components/NewCollection";
import ShopByProducts from "./Components/ShopByProducts";
import ShopByTextures from "./Components/ShopByTextures";

export default function Home() {
  return (
    <section className="mt-20 xl:mt-28">
      <Greet />
      <ShopByTextures />
      <ShopByProducts />
      <NewCollection />
      <ShopByTypes />
      <Blogs />
      <Faq />
    </section>
  );
}
