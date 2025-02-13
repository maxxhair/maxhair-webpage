import Image from "next/image";
import { firaSans } from "../util/fonts";
import StarRating from "./StarRating";
import { reviewAverage } from "../util/serverSideProps";

const StockCard = ({ image, name, stock, productReviews }) => {
  const avgRating =
    productReviews?.length > 0 ? reviewAverage(productReviews) : 0;

  return (
    <div className="w-full flex items-center border-b-2 ">
      {/* <Image src={image} alt="product-image-error" width={80} height={100} /> */}
      <div className="flex lg:flex-row flex-col w-full justify-between items-center m-4 ">
        <div
          className="flex flex-row lg:flex-col flex-1 gap-3 lg:items-start items-center  
        "
        >
          <p className={`${firaSans.className} text-sm lg:text-xl font-bold`}>
            {name}
          </p>
          <p>Only {stock} left</p>
        </div>
        <div className="flex items-center justify-center h-full gap-7">
          <StarRating ratingValue={(avgRating as any) || 0} readOnly={true} />
          <p>{productReviews?.length} Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
