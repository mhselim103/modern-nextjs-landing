import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="text-custom">
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="text-black">
          <FaStar />
        </li>
      );
    }
  }
  return (
    <div>
      <ul className="flex gap-1">{totalRating}</ul>
    </div>
  );
};

export default Rating;
