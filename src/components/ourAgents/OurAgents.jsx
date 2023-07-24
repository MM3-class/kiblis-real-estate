import React, { useEffect, useState } from "react";
import "./ourAgents.css";
import AGENTS_API from "../../Api/AGENTS_API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const OurAgents = () => {
  const [agentsData, setAgentsData] = useState([]);

  const options = {
    method: "GET",
    params: {
      postal_code: "11234",
      offset: "0",
      limit: "20",
      types: "agent",
      sort: "recent_activity_high",
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
    slidesToShow: 2,
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
  useEffect(() => {
    const getAgentsData = async () => {
      try {
        const response = await AGENTS_API("/list", options);
        const data = await response.data;
        setAgentsData(data.agents.slice(0, 4));
        console.log("AGENTS...", agentsData.agents);
      } catch (err) {
        console.log("IMG AGENTS...", err.message);
      }
    };
    getAgentsData();
  }, []);
  return (
    <>
      <div className="left-side">
        <h1>WE ARE TO MAKE THE BEST OFFER FOR YOU</h1>
        <p>
          With over 30 languages at the disposal our team is proficient in every
          aspect of the real estate business. Here you find an agent to
          cooperate with.
        </p>
        <Link to="/agents" className="agency-btn">
          SHOW ALL
        </Link>
      </div>
      <div className="right-side">
        <Slider {...settings}>
          {agentsData?.map((agent) => (
            <div className="img-field" key={agent.id}>
              <Link
                to={`agents/agentsDetails/${agent.advertiser_id}/${agent.nrds_id}`}
              >
                <img src={agent.photo.href} alt={agent.fullname} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default OurAgents;
