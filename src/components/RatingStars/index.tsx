import { useState } from "react";
import { Star } from "phosphor-react";

interface LabelProps {
  name: string;
}

export function RatingStars({ name }: LabelProps) {
  const [rating, setRating] = useState<Number | 0>(0);
  const [hover, setHover] = useState<Number | 0>(0);

  console.log(rating);

  return (
    <label
      htmlFor=""
      className="w-full p-2 flex flex-col bg-zinc-300 rounded-lg font-semibold text-black"
    >
      {name}
      <div className="flex flex-row">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <div className="flex flex-col">
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
            </div>
          );
        })}
      </div>
    </label>
  );
}
