import { useState } from "react";
import { Star } from "phosphor-react";

export function StarsAvaliation() {
  const [value, setValue] = useState<String | null>(null);
  const star1 = document.getElementById("star1");

  star1?.addEventListener("onclick", (event) => {
    console.log(event);
  });

  return (
    <div className="flex flex-row">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
              onClick={() => setValue(ratingValue)}
            />
            <Star
              size={24}
              weight="bold"
              color={ratingValue < value ? "#000000" : ""}
            />
          </label>
        );
      })}
    </div>
  );
}
