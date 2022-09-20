import { useState } from "react";
import { Star } from "phosphor-react";

interface LabelProps {
  id: string;
  name: string;
}

export function RatingStars() {
  const [rating, setRating] = useState<Number | 0>(0);
  const [hover, setHover] = useState<Number | 0>(0);

  console.log(rating);

  return (
    <div className="flex flex-row">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <Star
              className="hover:cursor-pointer"
              size={24}
              weight={ratingValue <= (hover || rating) ? "fill" : "bold"}
              color={ratingValue <= (hover || rating) ? "#FFFF00" : "#000000"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
}
