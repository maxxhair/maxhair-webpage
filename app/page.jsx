import Header from "./Components/Header";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Greet from "./Components/Greet";
import OfferSpace from "./Components/OfferSpace";
import Random from "./Components/Random";
import Providers from "./util/Providers";

export default function Home() {
  return (
    <Providers>
      <div className="h-[calc(140vh+580px)] bg-[#FAFAFA]">
        <div className="stickydiv top-0 ">
          <Header />
          <Greet />
          <OfferSpace />
        </div>
      </div>
      {/* <Random /> */}
      <Faq />
      <Footer />
    </Providers>
  );
}
