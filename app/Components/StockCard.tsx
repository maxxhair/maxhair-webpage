import Image from "next/image";
import { firaSans } from "../util/fonts";
import StarRating from "./StarRating";
import { reviewAverage } from "../util/serverSideProps";

const StockCard = ({ image, name, stock, productReviews }) => {
  const avgRating =
    productReviews?.length > 0 ? reviewAverage(productReviews) : 0;

  return (
    <div className="w-full h-32 flex border-b-2 ">
      <Image src={image} alt="product-image-error" width={80} height={100} />
      <div className="flex lg:flex-row flex-col w-full justify-between m-4 ">
        <div
          className="flex flex-row lg:flex-col w-full gap-3 lg:items-start items-center 
        "
        >
          <p className={`${firaSans.className} text-sm lg:text-xl font-bold`}>
            {name}
          </p>
          <p>Only {stock} left</p>
        </div>
        <div className="flex items-end justify-center h-full gap-4">
          <StarRating ratingValue={(avgRating as any) || 0} readOnly={true} />
          <p className=" mt-auto ml-3">{productReviews?.length} Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
