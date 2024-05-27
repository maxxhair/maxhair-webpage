import { firaSans } from "../util/fonts";
import Rating from "./Rating";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <div className="m-8 text-sm">
      <p
        className={`${firaSans.className} text-xl lg:text-3xl mt-16 font-bold`}
      >
        Customer Reviews
      </p>
      <div className="flex justify-between ">
        <div className="flex mt-8 ">
          <p
            className={`${firaSans.className} text-3xl lg:text-5xl font-bold mt-2`}
          >
            4.9
          </p>
          <Rating count={5} value={5} className="m-2 mt-auto" />
          <p className="m-2 mt-auto text-xs lg:text-sm">
            Based on 1611 3 reviews
          </p>
        </div>

        <button
          type="submit"
          className="  h-10 text-white font-medium px-5  text-center bg-neutral-800 focus:ring-4 mt-auto text-xs lg:text-sm "
        >
          Write A Review
        </button>
      </div>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </div>
  );
};

export default CustomerReviews;
