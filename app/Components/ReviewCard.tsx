import StarRating from "./StarRating";

const ReviewCard = () => {
  return (
    <div className="reviewcard border-b-2 text-xs lg:text-sm">
      <p className="mt-5">Rhianno - Verified Buyer</p>
      <p className="mt-2">09/05/24</p>
      <StarRating ratingValue={3} readOnly={true} />
      <p className="mt-5 mb-8">Amazing Quality</p>
    </div>
  );
};

export default ReviewCard;
