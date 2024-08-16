import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  ratingValue: number;
  setRating?: (newRating: number) => void;
  readOnly?: boolean;
  count?: number;
  filledColor?: string;
}

const StarRating: React.FC<Props> = ({
  ratingValue,
  setRating,
  readOnly = false,
  count = 5,
  filledColor = "#1b1b1b"
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div className="flex items-center gap-2">
      {Array(count ? count : 5)
        .fill(0)
        .map((_, idx) => (
          <label
            key={idx}
            className={readOnly ? "cursor-default" : "cursor-pointer"}
            onMouseEnter={() => !readOnly && setHoverRating(idx + 1)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
          >
            <input
              type="radio"
              name="rating"
              onChange={() => !readOnly && setRating && setRating(idx + 1)}
              value={idx + 1}
              checked={ratingValue === idx + 1}
              disabled={readOnly}
              className="hidden"
            />
            <FaStar
              color={
                idx < (hoverRating || ratingValue) ? `${filledColor}` : "#ddd"
              }
              fontSize={"1.5rem"}
            />
          </label>
        ))}
    </div>
  );
};

export default StarRating;
