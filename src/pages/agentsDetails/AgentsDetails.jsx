import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./agentsDetails.css";
import AGENTS_API from "../../Api/AGENTS_API";
import Detail from "../../components/agentDetail/AgentDetail";
import AgentsReview from "../../components/agentsReviews/AgentsReview";
const AgentsDetails = () => {
  const [agents, setAgents] = useState({});
  const { advertiser_id, nrds_id } = useParams();

  const options = {
    method: "GET",
    params: {
      advertiser_id: advertiser_id,
      nrds_id: nrds_id,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "realtor.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await AGENTS_API("/get-profile", options);
        const data = await response.data;
        setAgents(data);
        window.scrollTo({ top: "60px" });
        console.log("AGENTS DETAILS...", data);
      } catch (err) {
        console.log("ERROR AGENTS", err.message);
      }
    };

    getDetail();
  }, []);

  return (
    <section className="agents-details">
      <Detail agents={agents} />
      <AgentsReview advertiser_id= {advertiser_id}/>
    </section>
  );
};

export default AgentsDetails;
