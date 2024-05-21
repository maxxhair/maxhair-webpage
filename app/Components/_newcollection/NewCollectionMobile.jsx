import { firaSansMedium } from "../../util/fonts";
import ProductCard from "../ProductCard";

function NewCollectionMobile({ cards }) {
  return (
    <div className="lg:hidden flex flex-col md:gap-[40px] gap-[20px] p-[40px] justif-center items-center bg-[#FAFAFA]">
      <span
        className={` ${firaSansMedium.className} lg:headline-large md:headline-medium headline-small text-[#242424]`}
      >
        New Collection
      </span>
      {cards.map((_, index) => {
        return (
          <div
            key={index + "---"}
            className="group relative flex flex-col justify-center lg:w-[400px] md:w-[300px] w-[200px] overflow-hidden "
          >
            <ProductCard />
          </div>
        );
      })}
    </div>
  );
}

export default NewCollectionMobile;
