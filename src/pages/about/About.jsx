import React, { useEffect } from "react";
import "./about.css";
import OurAgents from "../../components/ourAgents/OurAgents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LOGO from "../../assets/logo.png";
import consultingA from "../../assets/consulting-1.jpg";
import consultingB from "../../assets/consulting-2.jpg";
import consultingC from "../../assets/consulting-3.jpg";
import consultingD from "../../assets/consulting-4.jpg";
import consultingE from "../../assets/consulting-5.jpg";
import logos from "../../assets/Logos/logos";
import Reviews from "../../components/reviews/Reviews";
import PromptConsultation from "../../components/promptConsultation/PromptConsultation";
import CompanyReviews from "../../components/companyReviews/CompanyReviews";
const About = () => {
  useEffect(() => {
    window.scrollTo({top: "60px"})
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <main className="about-container">
      <section className="about-header">
        <div className="about-title">
          <h1>Who We Are</h1>
          <p>Get to Know Our Team</p>
        </div>
      </section>
      <section className="presentation">
        <div className="presentation-logo">
          <img src={LOGO} alt="logo" />
        </div>
        <h1 className="presentation-head">
          A REAL ESTATE AGENCY FOR THOSE WHO VALUE TIME, MONEY, AND UP-TO-DATE
          INFORMATION
        </h1>
        <div className="presentation-desc">
          <div className="presentation-left">
            <h2>
              KIBILLIS IS A SUBSIDIARY OF KIBILLIS HOLDING AND HAS A STRONG
              SUPPORT FROM ITS SISTER COMPANIES
            </h2>
            <h4>
              KIBILLIS HOLDING is a promising name in the UAE real estate
              market, a group of companies under the umbrella brand, KIBILLIS,
              which covers all the needs of commercial and private property
              investors.
            </h4>
          </div>
          <div className="presentation-right">
            <div className="presentation-right-1">
              <h3>KIBILLIS MANAGEMENT</h3>
              <p>
                A property management company that ensures the property is taken
                care of, repaired, and leased to bring profit to the landlord.
              </p>
            </div>
            <div className="presentation-right-2">
              <h3>KIBILLIS DESIGN</h3>
              <p>
                A design bureau and custom-made furniture production company in
                New York.
              </p>
            </div>
            <div className="presentation-right-3">
              <h3>KIBILLIS CORPORATE</h3>
              <p>
                Consulting and legal support on visa issues and business
                registration processes in the USA.
              </p>
            </div>
            <div className="presentation-right-4">
              <h3>KIBILLIS HOLIDAYS</h3>
              <p>
                Short-term rentals: holiday homes and serviced apartments, for
                vacation and business trips.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services">
        <h1>OUR SERVICES</h1>
        <div className="our-services-content">
          <div className="our-services-content-dec  reverse">
            <div className="our-services-img">
              <img src={consultingA} alt="" />
            </div>
            <div className="our-services-title">
              <p>1</p>
              <h3>CONSULTING</h3>
              <ul>
                <li>Buying, Selling, Renting</li>
                <li>Residential and Commercial Property</li>
                <li>Physical or Legal Entities</li>
              </ul>
            </div>
          </div>
          <div className="our-services-content-dec">
            <div className="our-services-title">
              <p>2</p>
              <h3>PURCHASING SUPPORT ACTIVITIES</h3>
              <ul>
                <li>
                  Taking Care of All Financials (opening bank account,
                  transferring funds, currency exchange etc.)
                </li>
                <li>Assistance in Arranging a Mortgage</li>
                <li>Supporting Documents</li>
                <li>Property Insurance Support</li>
              </ul>
            </div>
            <div className="our-services-img">
              <img src={consultingB} alt="" />
            </div>
          </div>
          <div className="our-services-content-dec reverse">
            <div className="our-services-img">
              <img src={consultingC} alt="" />
            </div>
            <div className="our-services-title">
              <p>3</p>
              <h3>AFTER-SALES SERVICE</h3>
              <ul>
                <li>Assistance in Activation of Utility Services</li>
                <li>Resident Visa Support</li>
                <li>
                  Necessary Professional Support to Ensure Smooth Running of
                  Business
                </li>
              </ul>
            </div>
          </div>
          <div className="our-services-content-dec">
            <div className="our-services-title">
              <p>4</p>
              <h3>SELECTING AND VIEWING PROPERTY</h3>
              <ul>
                <li>Search by Designated Parameters</li>
                <li>Negotiating Deals Together</li>
                <li>
                  Consultant’s Responsibility to Guide in Every Step of The
                  Purchase Process
                </li>
              </ul>
            </div>
            <div className="our-services-img">
              <img src={consultingD} alt="" />
            </div>
          </div>
          <div className="our-services-content-dec reverse">
            <div className="our-services-img">
              <img src={consultingE} alt="" />
            </div>
            <div className="our-services-title">
              <p>5</p>
              <h3>PROPERTY AND BUSINESS MANAGEMENT</h3>
              <ul>
                <li>In-house Property Management</li>
                <li>Short-Term Rent</li>
                <li>Long-Term Rent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="agency">
        <OurAgents />
      </section>
      <section className="in-numbers">
        <div className="in-numbers-content">
          <h1 className="in-numbers-head">IN NUMBERS</h1>
          <div className="in-numbers-desc">
            <div className="language">
              <h3>30+</h3>
              <p>LANGUAGEs</p>
            </div>
            <div className="specialist">
              <h3>500+</h3>
              <p>SPECIALISTS</p>
            </div>
            <div className="offers">
              <h3>5000+</h3>
              <p>OFFERS IN THE DATABASE</p>
            </div>
            <div className="deals">
              <h3>6000+</h3>
              <p>NUMBERS OF DEALS</p>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="partner-head">
          <h1>OUR PARTNERS</h1>
        </div>
        <div className="partner-img">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <img src={logo} key={index} alt={`logo ${index}`} />
            ))}
          </Slider>
        </div>
      </section>
      <section className="reviews">
        <CompanyReviews />
      </section>
      <section className="consultation">
        <PromptConsultation />
      </section>
    </main>
  );
};

export default About;
