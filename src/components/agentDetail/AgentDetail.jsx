import React, { useState } from "react";
import "./agentsDetail.css";
import PromptConsultation from "../promptConsultation/PromptConsultation";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PopupPrompt from "../promptConsultation/PopupPrompt";
const Detail = ({ agents }) => {
  const [isShowPrompt, setIsShowPrompt] = useState(false);
  const {
    role,
    photo,
    fullname,
    profile_description,
    specialties,
    address,
    phones,
    email,
    bio,
  } = agents;
  console.log(agents);
  const navigate = useNavigate();
  return (
    <article className="detail">
      <h1>
        <span onClick={() => navigate(-1)}>Go Back</span>
        <span>{profile_description?.toUpperCase()}</span>
      </h1>
      <div className="detail-content">
        <div className="left-side">
          <div className="detail-img">
            <img src={photo?.href} alt={fullname} />
          </div>
          <div className="inquire">
            <button
              className="inquire-btn"
              onClick={() => setIsShowPrompt(true)}
            >
              INQUIRE NOW
            </button>
            {isShowPrompt ? <PopupPrompt setIsShowPrompt={setIsShowPrompt} /> : null}
          </div>
        </div>
        <div className="right-side">
          <div className="head">
            <h2>{fullname}</h2>
            <h1>{role}</h1>
          </div>
          <div className="data">
            <table>
              <tbody>
                <tr>
                  <td className="td-head">specialties:</td>
                  <td className="td-details">
                    {specialties ? specialties.join(", ") : "Not Available"}
                  </td>
                </tr>
                <tr>
                  <td className="td-head">Specialization: </td>
                  <td className="td-details">{`${
                    address?.city === true ? address?.city : "Not Available"
                  } / ${
                    address?.state_code === true
                      ? address?.state_code
                      : "Not Available"
                  } / ${
                    address?.country === true ? address.country : "Not Available"
                  }`}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div className="detail-contact">
            <a
              className="contact-desc"
              href={`tel: ${phones?.[0].number}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaPhone />
            </a>
            <a
              className="contact-desc"
              href={`mailto: ${email}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              className="contact-desc"
              href={`https://wa.me/`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="desc">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Detail;
