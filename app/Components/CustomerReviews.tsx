import { useState } from "react";
import { firaSans } from "../util/fonts";
import ReviewCard from "./ReviewCard";
import { Modal, RatingStar, Textarea } from "flowbite-react";
import StarRating from "./StarRating";

const CustomerReviews = () => {
  const [reviewModelOpen, setReviewModalOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");

  const handleReviewModalOpen = () => {
    setReviewModalOpen(true);
  };

  const handleReviewModalClose = () => {
    setReviewModalOpen(false);
  };

  const handleSubmitReview = () => {
    try {
      console.log(review, rating);
    } catch (error) {
      console.log(error);
    }
  };

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
          <StarRating ratingValue={5} readOnly={true} />
          <p className="text-xs lg:text-sm">Based on 16113 reviews</p>
        </div>
        <button
          type="submit"
          className="h-10 text-white font-medium px-5 text-center bg-neutral-800 focus:ring-4 mt-auto text-xs lg:text-sm"
          onClick={handleReviewModalOpen}
        >
          Write A Review
        </button>
      </div>
      {[1, 2, 3, 4].map((index) => (
        <ReviewCard key={index} />
      ))}
      <Modal
        show={reviewModelOpen}
        dismissible
        onClose={handleReviewModalClose}
      >
        <Modal.Header className="text-3xl">Write Your Review</Modal.Header>
        <Modal.Body>
          <div className="">
            <p className="lg:text-lg">Rate Here:</p>
            <StarRating ratingValue={rating} setRating={setRating} />
          </div>
          <div className="mt-8">
            <p className="lg:text-lg">Write your opinion:</p>
            <Textarea rows={5} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="h-10 text-white font-medium px-5 text-center bg-neutral-800 focus:ring-4 mt-auto text-xs lg:text-sm"
            onClick={handleSubmitReview}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomerReviews;
