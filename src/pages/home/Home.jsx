import "./home.css";
import exploring from "../../assets/exploring.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import team from "../../assets/teamWork.jpg";
import sale from "../../assets/buy&sale.jpg";
import { FaArrowRight } from "react-icons/fa";
import PropertiesByLocation from "../../components/propertiesByLocation/PropertiesByLocation";
import OurAgents from "../../components/ourAgents/OurAgents";
import PopupPrompt from "../../components/promptConsultation/PopupPrompt";
import CompanyReviews from "../../components/companyReviews/CompanyReviews";
const Home = () => {
  const [isShowPrompt, setIsShowPrompt] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: "60px" });
    // NO SCROLLING BODY WHILE POPUP ACTIVATED
    isShowPrompt && (document.body.style.overflow = "hidden");
    !isShowPrompt && (document.body.style.overflow = "unset");
  }, [isShowPrompt]);

  return (
    <main className="home">
      <section className="hero">
        <div className="fade">
          <h2>KIBLLIS</h2>
          <p>Innovative Real Estate Agency in California</p>
        </div>
      </section>

      <section className="experts">
        <div className="experts-img">
          <img src={team} alt="our-team" />
        </div>
        <div className="experts-desc">
          <h1 className="experts-head">REAL ESTATE EXPERTS</h1>
          <p className="experts-details">
            <span>
              We understand the fact that modern people strive for maximum
              comfort.
            </span>{" "}
            <br />
            <br />
            A harmonious environment, communication with professionals, accurate
            and timely information, commitment, reliable and convenient
            technological solutions that save the resources that are important
            to them.
            <br />
            <br />
            <span>We have implemented all these in AX CAPITAL</span>
          </p>
          <button className="enquire-btn" onClick={() => setIsShowPrompt(true)}>
            ENQUIRE NOW
          </button>
          <div className="team-info">
            <div className="info">
              <h3>5000+</h3>
              <small>OFFERS IN THE DATABASE</small>
            </div>
            <div className="info">
              <h3>30+</h3>
              <small>LANGUAGES</small>
            </div>
            <div className="info">
              <h3>500+</h3>
              <small>SPECIALISTS</small>
            </div>
          </div>
        </div>
      </section>
      {isShowPrompt ? <PopupPrompt setIsShowPrompt={setIsShowPrompt} /> : null}

      <section className="properties-home">
        <div className="left-side">
          <Link className="rent" to="/for-rent">
            RENT <FaArrowRight />
          </Link>
          <Link className="sale" to="/for-buy">
            BUY <FaArrowRight />
          </Link>
          <p>
            With a comprehensive portfolio of properties and countless offers,
            we cover all your real estate needs.
          </p>
        </div>
        <div className="right-side">
          <img src={sale} alt="" />
        </div>
      </section>
      <section className="agency">
        <OurAgents />
      </section>
      <section className="propertiesByLocation">
        <PropertiesByLocation />
      </section>
      <section className="explore-america">
        <aside className="explore-left">
          <img src={exploring} alt="explore" />
        </aside>
        <aside className="explore-right">
          <h1>Explore America</h1>
          <p>
            Choose a district with the most attractive environment. Click below
            to learn more.
          </p>
          <button onClick={() => navigate("/explore")}>AREA GUIDES</button>
        </aside>
      </section>
      <section className="enquire-now">
        <div className="dem-background"></div>
        <div className="enquire-left">
          <h1>PROMPT CONSULTATION</h1>
          <p>Fill in the form and our agent will contact you shortly.</p>
          <button onClick={() => setIsShowPrompt(true)}>ENQUIRE NOW</button>
          {isShowPrompt ? (
            <PopupPrompt setIsShowPrompt={setIsShowPrompt} />
          ) : null}
        </div>
      </section>
      <section className="reviews">
        <CompanyReviews />
      </section>
    </main>
  );
};

export default Home;
