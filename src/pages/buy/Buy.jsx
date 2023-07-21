import React, { useEffect, useState } from "react";
import PROPERTIES_API from "../../Api/PROPERTIES_API";
import "./buy.css";
import Pagination from "../../components/pagination/Pagination";
import ErrorRequest from "../../components/errorRequest/ErrorRequest";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
const Buy = () => {
  const [buyList, setBuyList] = useState([]);
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
  useEffect(() => {
    const getSaleData = async () => {
      try {
        const response = await PROPERTIES_API("/list-for-sale", options);
        const data = await response.data;
        setBuyList(data);
        console.log("FOR_BUY...", buyList?.listings);
        window.scrollTo({ top: "60px" });
      } catch (err) {
        setError(err.message);
        console.log("BUY...", err.message);
      }
    };
    getSaleData();
  }, []);
  return (
    <main className="for-rent">
      <div className="navigate">
        <span onClick={() => navigate(-1)}>Go Back</span>
        <p className="property-header"></p>
      </div>
      <div className="rent-header">
        <h1>BUY YOUR PROPERTY IN NEW YORK</h1>
      </div>
      <section className="properties">
        {error && (<ErrorRequest error={error}/>)}
        {buyList.listings ? (
          <div className="pagination-container">
            <Pagination data={buyList} />
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </main>
  );
};

export default Buy;
