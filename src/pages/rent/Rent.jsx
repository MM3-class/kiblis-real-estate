import React, { useEffect, useState } from "react";
import "./rent.css";
import PROPERTIES_API from "../../Api/PROPERTIES_API";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Pagination from "../../components/pagination/Pagination";
import ErrorRequest from "../../components/errorRequest/ErrorRequest";
const Rent = () => {
  const [rentList, setRentList] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
  const getSaleData = async () => {
    try {
      const response = await PROPERTIES_API("/list-for-rent", options);
      const data = await response.data;
      setRentList(data);
      window.scrollTo({ top: "60px" });
      console.log("FOR_RENT...", rentList?.listings);
    } catch (err) {
      setError(err.message);
      console.log("RENT...", err.message);
    }
  };
  useEffect(() => {
    getSaleData();
  }, []);
  return (
    <main className="for-rent">
      <div className="navigate">
        <span onClick={() => navigate(-1)}>Go Back</span>
        <p className="property-header"></p>
      </div>
      <div className="rent-header">
        <h1>PROPERTY FOR RENT IN NEW YORK</h1>
      </div>
      <section className="properties">
        {error && (<ErrorRequest error={error}/>)}
        {rentList.listings ? (
          <div className="pagination-container">
            <Pagination data={rentList} />
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </main>
  );
};

export default Rent;
