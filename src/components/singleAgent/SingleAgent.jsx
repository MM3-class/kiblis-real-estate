import React from "react";
import "./single-agent.css"
import { Link } from "react-router-dom";
const SingleAgent = ({ agent }) => {
  const { advertiser_id, nrds_id, photo , full_name, title, recently_sold } = agent;

  return (
    <Link to={`/agents/agentsDetails/${advertiser_id}/${nrds_id}`}>
      <div className="agent-img">
        <img src={photo && photo.href} alt={full_name} width="300px" loading="lazy" />
      </div>
      <div className="agent-head">
        <h3>{full_name}</h3>
        <p>{title}</p>
        <p>Sold Target: {recently_sold.count}</p>
        <p>Last Sold: {recently_sold.last_sold_date}</p>
      </div>
    </Link>
  );
};

export default SingleAgent;
