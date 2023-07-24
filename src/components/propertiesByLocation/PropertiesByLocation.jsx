import React, { useEffect, useState } from "react";
import "./propertiesByLocation.css";
import LOCATIONS from "../../Api/LOCATIONS_API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../loader/Loader";

function PropertiesByLocation() {
  const [propertiesFiltered, setPropertiesFiltered] = useState([])
  const [propertyValue, setPropertyValue] = useState("Rancho Cucamonga")

  const options = {
    method: "GET",
    params: { input: propertyValue.toLowerCase() },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "realtor.p.rapidapi.com",
    },
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    const getLocations = async () => {
      try {
        const response = await LOCATIONS("/auto-complete", options);
        const data = await response.data;
        console.log("LOCATIONS", data);
        setPropertiesFiltered(data.autocomplete.slice(0, 5))
      } catch (err) {
        console.log("ERROR", err.message);
      }
    };
    getLocations()
  }, [propertyValue]);

  return (
    <div className="prefer-location">
      <h1>Which Location You Prefer</h1>

      <div className="btns-location">
        <button
          value="Rancho Cucamonga"
          onClick={(e) => setPropertyValue(e.target.value)}
          name="Rancho Cucamonga"
          className={`btn-location ${propertyValue && "location-active"}`}
        >
          Rancho Cucamonga
        </button>
        <button
          value="New York"
          onClick={(e) => setPropertyValue(e.target.value)}
          name="New York"
          className={`btn-location ${propertyValue && "location-active"}`}
        >
          New York
        </button>
        <button
          value="California"
          onClick={(e) => setPropertyValue(e.target.value)}
          name="California"
          className={`btn-location ${propertyValue && "location-active"}`}
        >
          California
        </button>
        <button
          value="Florida"
          onClick={(e) => setPropertyValue(e.target.value)}
          name="Florida"
          className={`btn-location ${propertyValue && "location-active"}`}
        >
          Florida
        </button>
      </div>
      <div className="locations-field">

        <Slider {...settings}>
        {propertiesFiltered ? propertiesFiltered.map((location, index) => (
          <div className="location" key={index}>
            <iframe
              src={`https://maps.google.com/maps?q=${location?.centroid.lat},${location?.centroid.lon}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="property-location"
              id="iframe"
            />
          </div>
        )) : (<Loader />)}
        </Slider>
      </div>
    </div>
  );
}

export default PropertiesByLocation;
