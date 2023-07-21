import React from "react";
import PromptConsultation from "./PromptConsultation";

const PopupPrompt = ({ setIsShowPrompt }) => {
  return (
    <section className="prompt">
      <div className="close" onClick={() => setIsShowPrompt(false)}>
        X
      </div>
      <PromptConsultation />
    </section>
  );
};

export default PopupPrompt;
