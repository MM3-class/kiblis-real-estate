import React from "react";
import {
  FaBath,
  FaBed,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMarker,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import "./singleProperty.css";
import imageNotAvailable from "../../assets/image-not-available.jpg";
import { Link } from "react-router-dom";
const SingleProperty = ({ property }) => {
  const { address, baths, beds, price, sqft, photo, address_new, prop_status, property_id } =
    property;
  return (
    <>
    <Link key={property_id} to={`propertyDetails/${property_id}`} className="single-property">
      <div className="property-img">
        <img src={photo ? photo : imageNotAvailable} alt="" />
      </div>

      <div className="property-info">
        <h3 className="address">{address}</h3>
        <p>
          <span className="map-icon">{<FaMapMarkerAlt />}</span>
          {address_new?.city}
        </p>
        <p>{prop_status?.replace("_", " ")}</p>
        <div className="property-info-details">
          <p>
            <span>{<FaBed />}</span>
            {beds}
          </p>
          <p>
            <span>{<FaBath />}</span>
            {baths}
          </p>
          <p>
            <span>{<FaMarker />}</span>
            {sqft}
          </p>
        </div>
        <h3 className="price">{price}</h3>
      </div>
      <div className="property-contact">
        <a
          className="property-contact-desc"
          href="tel: +971561113080"
          target="_blank"
          rel="noreferrer"
        >
          <FaPhone />
        </a>
        <a
          className="property-contact-desc"
          href="mailto: mmhassaan3@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          className="property-contact-desc"
          href="https://wa.me/+971561113080"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </Link>
    </>
  );
};

export default SingleProperty;
