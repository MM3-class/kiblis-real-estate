import React, { useEffect, useState } from "react";
import "./reviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaStar} from "react-icons/fa"
import ReviewsPopup from "./reviewsPopup/ReviewsPopup";

const Reviews = ({reviews}) => {
    const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState({});
    useEffect(() => {
        // NO SCROLLING BODY WHILE POPUP ACTIVATED
        isOpen && ( document.body.style.overflow = "hidden");
        !isOpen && (document.body.style.overflow = "unset")
    }, [isOpen])
   
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1333,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 903,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; 
  const starArray = [...Array(5).keys()].map(i => i + 1);

const openModal = (item) => {
  setIsOpen(true)
  setSelected(item)    
}
const closeModal = () => {
  setIsOpen(false)
}
  return (
    <div className="reviews-container">
      <h1>REVIEWS</h1>
      <div className="reviews-content">
        <Slider {...settings}>
          {reviews?.map((review) => (
            <div className="single-review" key={review.id}>
              <div className="read-more-titles">
                <h3>{review.name || review.display_name || "Client"}</h3>
                 {review.describe_yourself && (<small>{review.describe_yourself}</small>)}
                <p>
                  {review.comment} <span className="overlay"></span>
                </p>
              </div>
              <div className="read-more-btn">
                <div className="rating">
                    {starArray.map((item, index) => (
                        <FaStar key={index} color={review.rating >= item ? "var(--primary-color)" : "lightgrey" }/>
                    ))}
                </div>
                <button onClick={() => openModal(review)}>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
          {isOpen && (<ReviewsPopup selected={selected} closeModal={closeModal} />) }
    </div>
  );
};

export default Reviews;
