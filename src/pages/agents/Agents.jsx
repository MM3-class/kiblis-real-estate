import React, { useEffect, useState } from "react";
import "./agents.css";
import SingleAgent from "../../components/singleAgent/SingleAgent";
import AGENTS_API from "../../Api/AGENTS_API";
import Loader from "../../components/loader/Loader";
import ErrorRequest from "../../components/errorRequest/ErrorRequest";
const Agents = () => {
  const [agentsData, setAgentsData] = useState([]);
  const [error, setError] = useState(null);
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
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await AGENTS_API("/list", options);
        const data = await response.data;
        setAgentsData(data);
        console.log("AGENTS LIST...", data);
        window.scrollTo({ top: "60px" });
      } catch (err) {
        setError(err.message);
        console.log("ERROR AGENTS API...", err.message);
      }
    };
    getData();
  }, []);
  return (
    <section className="agents-container">
      <div className="agents-component">
        <div className="agents-head">
          <h2 className="agents-title">OUR AGENTS</h2>
          <p>Team of real estate experts</p>
        </div>
      </div>
      <h1>OUR AGENTS is: {agentsData.matching_rows}</h1>
      <article className="agents">
        {error && (
          <ErrorRequest error={error}/>
        ) }
        {agentsData.agents ?
          agentsData.agents?.map((agent) => (
            <div className="agent" key={agent.id}>
              <SingleAgent agent={agent} />
            </div>
          )) : (<Loader />)}
      </article>
    </section>
  );
};

export default Agents;
