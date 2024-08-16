import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import StarRating from "./StarRating";
import { RootState } from "../store";
import { LoggedUser } from "../types";
import { useState } from "react";
import { Modal, Textarea } from "flowbite-react";
import axiosInstance from "../util/axiosInstance";

interface Props {
  prodReview: {
    _id: string;
    rating: number;
    comment: string;
    user: {
      fullName: string;
      email: string;
    };
    createdAt: string;
  };
  fetchReviews: () => void;
  onDelete: (reviewId: string) => void;
}

const ReviewCard: React.FC<Props> = ({
  prodReview,
  fetchReviews,
  onDelete
}) => {
  const currentUser = useSelector(
    (state: RootState) => state.user.user as LoggedUser
  );
  const [openEditReviewModel, setOpenEditReviewModel] = useState(false);
  const [rating, setRating] = useState(prodReview?.rating);
  const [review, setReview] = useState(prodReview?.comment);

  const handleOpenEditReviewModal = () => {
    setOpenEditReviewModel(true);
  };
  const handleCloseEditReviewModal = () => {
    setOpenEditReviewModel(false);
  };

  const handleUpdateModel = async () => {
    try {
      const data = {
        rating: rating,
        comment: review
      };
      const res = await axiosInstance.put(`reviews/${prodReview._id}`, data);
      fetchReviews();
      handleCloseEditReviewModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="reviewcard border-b-2 text-xs lg:text-sm">
      <p className="mt-5">{prodReview?.user?.fullName}</p>
      <p className="mt-2">
        {new Date(prodReview?.createdAt).toLocaleDateString()}
      </p>
      <StarRating ratingValue={prodReview?.rating} readOnly={true} />
      <div className="w-full flex items-center justify-between my-3">
        <p>{prodReview?.comment}</p>
        {currentUser &&
          currentUser?.user?.fullName === prodReview?.user?.fullName && (
            <div className="flex items-center gap-3 mb-2">
              <FiEdit
                fontSize={"1.25rem"}
                className="cursor-pointer"
                onClick={handleOpenEditReviewModal}
              />
              <MdDelete
                fontSize={"1.5rem"}
                className="text-red-600 cursor-pointer"
                onClick={() => onDelete(prodReview._id)}
              />
            </div>
          )}
      </div>
      <Modal
        show={openEditReviewModel}
        dismissible
        onClose={handleCloseEditReviewModal}
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
            onClick={handleUpdateModel}
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReviewCard;
