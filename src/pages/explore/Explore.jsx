import React, { useEffect } from "react";
import "./explore.css";
import PromptConsultation from "../../components/promptConsultation/PromptConsultation"
const Explore = () => {
  useEffect(() => {
    window.scrollTo({ top: "60px" });
  })
  return (
    <main className="explore-container">
      <aside className="explore-head">
        <div className="explore-title">
          <h1>AREA GUID</h1>
          <p>Explore America</p>
        </div>
      </aside>
      <aside className="explore-consultations">
        <PromptConsultation/>
      </aside>
    </main>
  );
};

export default Explore;
