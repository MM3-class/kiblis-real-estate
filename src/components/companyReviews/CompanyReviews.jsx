import React, { useEffect, useState } from "react";
import REVIEWS from "../../Api/reviews.json";
import Reviews from "../reviews/Reviews";

const CompanyReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews(REVIEWS.reviews);
  }, []);

  return (
    <div>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default CompanyReviews;
