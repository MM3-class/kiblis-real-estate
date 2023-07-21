import React, { useEffect } from "react";
import "./forBuy.css";
import PROPERTIES_API from "../../Api/PROPERTIES_API";
import propertyImg from "../../assets/agents-img/agent-1.jpg";
import {
  FaBath,
  FaBed,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMarker,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
const ForSale = () => {
  const options = {
    method: "GET",
    params: {
      state_code: "NY",
      city: "New York City",
      limit: "200",
      offset: "0",
      sort: "relevance",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "realtor.p.rapidapi.com",
    },
  };
  /* useEffect(() => {
        const getSaleData = async () => {
          const response = await PROPERTIES_API("list-for-sale", options);
          const data = await response.data;
          console.log("FOR_SALE...", data);
    window.scrollTo({top: "60px"});
          return data;
        };
        getSaleData();
      }); */
  return (
    <section className="for-buy">
      <h1 className="property-header">For Buy</h1>
      <div className="property">
        <div className="single-property">
          <div className="property-img">
            <img src={propertyImg} alt="" />
          </div>

          <div className="property-info">
            <h3 className="address">the address sky view</h3>
            <p>
              <span>{<FaMapMarkerAlt />}</span> Down Town New York
            </p>
            <p>Apartment</p>
            <div className="property-info-details">
              <p>
                <span>{<FaBed />}</span>2
              </p>
              <p>
                <span>{<FaBath />}</span>1
              </p>
              <p>
                <span>{<FaMarker />}</span>1518 sq.ft
              </p>
            </div>
            <h3 className="price">AED 399.000</h3>
          </div>
          <div className="property-contact">
            <a
              className="property-contact-desc"
              href={`tel: `}
              target="_blank"
              rel="noreferrer"
            >
              <FaPhone />
            </a>
            <a
              className="property-contact-desc"
              href={`mailto: `}
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              className="property-contact-desc"
              href={`https://wa.me/`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="single-property">
          <div className="property-img">
            <img src={propertyImg} alt="" />
          </div>
          <div className="property-info"></div>
          <div className="property-contact"></div>
        </div>
        <div className="single-property">
          <div className="property-img">
            <img src={propertyImg} alt="" />
          </div>
          <div className="property-info"></div>
          <div className="property-contact"></div>
        </div>
        <div className="single-property">
          <div className="property-img">
            <img src={propertyImg} alt="" />
          </div>
          <div className="property-info"></div>
          <div className="property-contact"></div>
        </div>
      </div>
    </section>
  );
};

export default ForSale;
