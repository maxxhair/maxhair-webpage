import Header from "./Components/Header";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Greet from "./Components/Greet";
import OfferSpace from "./Components/OfferSpace";
import Random from "./Components/Random";
import Blogs from "./Components/Blogs";

export default function Home() {
  return (
    <>
      <div className="lg:h-[calc(80vh+80px+60vh)] md:h-[calc(90vh+80px+55vh)] h-[calc(80vh+80px+50vh)] bg-[#FAFAFA]">
        <div className="stickydiv top-[80px] ">
          <Greet />
          <OfferSpace />
        </div>
      </div>
      {/* <Random /> */}
      <Blogs />
      <Faq />
      {/* <Footer /> */}
    </>
  );
}
