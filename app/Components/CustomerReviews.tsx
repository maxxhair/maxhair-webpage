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
      <div className="flex flex-col gap-3 lg:flex-row justify-between">
        <div className="flex gap-3 mt-4 lg:mt-8 items-center">
          <p
            className={`${firaSans.className} text-3xl lg:text-5xl font-bold `}
          >
            4.9
          </p>
          <Rating count={5} value={5} className="" />
          <p className="text-xs lg:text-sm">Based on 1611 3 reviews</p>
        </div>

        <button
          type="submit"
          className="h-10 text-white font-medium px-5 text-center bg-neutral-800 focus:ring-4 mt-auto text-xs lg:text-sm"
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
