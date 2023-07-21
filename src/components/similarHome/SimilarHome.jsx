import React, { useEffect, useState } from "react";
import "./similarHome.css";
import PROPERTIES_API from "../../Api/PROPERTIES_API";
import Slider from "react-slick";
import CardSimilarHome from "./cardSimilarHome/CardSimilarHome";
const SimilarHome = ({ property_id }) => {
  const [similarHome, setSimilarHome] = useState([]);
  const options = {
    method: "GET",
    params: {
      property_id: property_id,
      limit: "10",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "realtor.p.rapidapi.com",
    },
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  useEffect(() => {
    const getSimilarProperties = async () => {
      try {
        const response = await PROPERTIES_API("/v2/list-similar-homes", options);
        const data = await response.data;
        setSimilarHome(data?.data.home.related_homes.results);
        console.log("similarHome", similarHome);
      } catch (err) {
        console.log("Similar", err.message);
      }
    };
    getSimilarProperties();
  }, [property_id]);

  return (
    <div className="similar-home">
      <h1 className="similar-home-head">Similar Properties</h1>
      <div className="similar-details">
        <Slider {...settings}>

        {similarHome?.map((property) => (
            <CardSimilarHome property={property} key={property.property_id} />
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimilarHome;
