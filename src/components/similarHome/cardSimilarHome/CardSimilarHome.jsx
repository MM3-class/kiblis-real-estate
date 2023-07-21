import React from "react";
import { Link } from "react-router-dom";
import "./cardSimilarHome.css";
import imageNotAvailable from "../../../assets/image-not-available.jpg";

const CardSimilarHome = ({ property }) => {
  const { list_price, primary_photo, location, href, description } = property;

  return (
    <Link to={href} target="_blank">
      <div className="card-similar-home">
        <div className="similar-home-img">
              <img src={primary_photo.href ? primary_photo.href : imageNotAvailable} alt="" key={primary_photo.href} />
        </div>
        <div className="similar-home-desc">
          <p>{list_price ? `${list_price} $`: "call Agent"} </p>
          <p>{location.address.city}, { location.address.line}</p>
          <small>{description.beds} Bed</small>
          <small>{description.baths} Bath</small>
          <small>{description.sqft ?  "Sqft" : ""}</small>
        </div>
      </div>
    </Link>
  );
};

export default CardSimilarHome;
