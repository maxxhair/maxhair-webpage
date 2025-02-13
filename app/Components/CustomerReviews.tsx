import React, { useEffect, useState } from "react";
import { firaSans } from "../util/fonts";
import ReviewCard from "./ReviewCard";
import { Button, Modal, Textarea } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import StarRating from "./StarRating";
import { useParams } from "next/navigation";
import axiosInstance from "../util/axiosInstance";
import { getProductReviews, reviewAverage } from "../util/serverSideProps";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { isEmpty } from "lodash";

interface Props {
  productReviews: any[];
  fetchReviews: () => void;
  setProductReviews: (value: any) => void;
}

const CustomerReviews: React.FC<Props> = ({
  productReviews,
  fetchReviews,
  setProductReviews
}) => {
  const { id } = useParams();
  const loggedUser = useSelector((state: RootState) => state.user.user);
  const [reviewModelOpen, setReviewModalOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [showmore, setShowMore] = useState<boolean>(false);
  const [reviewTodelete, setReviewTodelete] = useState(null);

  const handleReviewModalOpen = () => {
    setReviewModalOpen(true);
  };

  const handleReviewModalClose = () => {
    setReviewModalOpen(false);
  };

  const handleSubmitReview = async () => {
    try {
      const data = {
        rating: rating,
        comment: review
      };
      const res = await axiosInstance.post(`reviews/${id}`, data);
      fetchReviews();
      handleReviewModalClose();
      setRating(0);
      setReview("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowMore = () => {
    setShowMore(!showmore);
  };

  const handleDeleteReview = async () => {
    try {
      const res = await axiosInstance.delete(`reviews/${reviewTodelete}`);
      setProductReviews(
        productReviews.filter((review: any) => review._id !== reviewTodelete)
      );
      // fetchReviews();
      setShowDeletePopup(false);
    } catch (error) {
      console.log(error);
    }
  };

  const avgRating =
    productReviews?.length > 0 ? reviewAverage(productReviews) : 0;

  return (
    <div className="text-sm md:px-16 px-8">
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
            {productReviews?.length > 0 && reviewAverage(productReviews)}
          </p>
          <StarRating ratingValue={(avgRating as any) || 0} readOnly={true} />
          <p className="text-xs lg:text-sm">
            Based on {productReviews?.length} reviews
          </p>
        </div>
        {!isEmpty(loggedUser) && (
          <button
            type="submit"
            className="h-10 text-white font-medium px-5 text-center bg-neutral-800 focus:ring-4 mt-auto text-xs lg:text-sm"
            onClick={handleReviewModalOpen}
          >
            Write A Review
          </button>
        )}
      </div>
      {productReviews &&
        productReviews
          ?.slice(0, showmore ? productReviews.length : 4)
          .map((prodReview: any, index: number) => (
            <ReviewCard
              key={index}
              prodReview={prodReview}
              fetchReviews={fetchReviews}
              onDelete={(reviewId: string) => {
                setShowDeletePopup(true);
                setReviewTodelete(reviewId);
              }}
            />
          ))}
      <div
        className="w-full mx-auto my-4 text-md md:text-lg text-blue-500 text-center hover:underline cursor-pointer"
        onClick={handleShowMore}
      >
        {productReviews?.length > 4 && (!showmore ? "Show More" : "Show Less")}
      </div>
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
            <Textarea
              rows={5}
              onChange={(e) => setReview(e.target.value)}
              value={review}
            />
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
      <Modal
        show={showDeletePopup}
        onClose={() => setShowDeletePopup(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Review?
            </h3>
            <div className="flex items-center justify-center gap-3">
              <Button color="failure" onClick={handleDeleteReview}>
                Yes, I&apos;m sure
              </Button>
              <Button onClick={() => setShowDeletePopup(false)}>
                No, Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CustomerReviews;
