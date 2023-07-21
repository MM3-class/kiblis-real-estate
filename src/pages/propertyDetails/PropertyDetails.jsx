import React, { useEffect, useState } from "react";
import PROPERTIES_API from "../../Api/PROPERTIES_API";
import { useNavigate, useParams } from "react-router-dom";
import { PropertyDetail } from "../../components/propertyDetail/PropertyDetail";
import "./propertyDetails.css"
const PropertyDetails = () => {
  const [propertyDetail, setPropertyDetail] = useState({});
  const { property_id } = useParams();
  const navigate = useNavigate()
  const options = {
    method: "GET",
    params: {
      property_id: property_id,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY ,
      "X-RapidAPI-Host": "realtor.p.rapidapi.com",
    },
  };
  useEffect(() => {
    window.scrollTo({ top: "60px" });
    const getPropertyDetails = async () => {
      try {
        const response = await PROPERTIES_API("/v3/detail", options);
        const data = await response.data;
        setPropertyDetail(data.data.home);
        console.log("DETAILS DATA", data.data.home);
      } catch (err) {
        console.log("DETAILS...", err.message);
      }
    };
    getPropertyDetails();
  }, [property_id]);
  return (
    <main className="property-details">
      <span className="goBack" onClick={() => navigate(-1)}>Go Back</span><h1 className="property-title">PropertyDetails</h1>
      <PropertyDetail propertyDetail={propertyDetail} key={propertyDetail.property_id}/>
    </main>
  );
};

export default PropertyDetails;
