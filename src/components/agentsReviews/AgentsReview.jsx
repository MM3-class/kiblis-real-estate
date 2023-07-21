import React, { useEffect, useState } from "react";
import AGENTS_API from "../../Api/AGENTS_API";
import "./agentsReview.css";
import Reviews from "../reviews/Reviews";

const AgentsReview = ({ advertiser_id }) => {
  const [reviews, setReviews] = useState([]);
  const options = {
    method: "GET",
    params: {
      advertiser_id: advertiser_id,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "realtor.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const getMoreAgents = async () => {
      try {
        const response = await AGENTS_API("/get-reviews", options);
        const data = await response.data;
        setReviews(data);
        console.log("REVIEWS", reviews);
      } catch (err) {
        console.log("ERROR", err.message);
      }
    };
    getMoreAgents();
  }, [advertiser_id]);
  return (
    <article className="similarAgents">
      <div className="horizontal">{(<Reviews reviews={reviews} />) }</div>
    </article>
  );
};

export default AgentsReview;
