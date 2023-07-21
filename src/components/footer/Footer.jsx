import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <aside className="more">
          <div className="more-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="more-description">
            <small>
              Homeverse.io is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the...{" "}
              <br />
              <Link to="/about-us">View More</Link>
            </small>
          </div>
        </aside>
        <aside className="contact">
          <legend>Contact Us</legend>
          <ul>
            <li>
              <a href="tel: +971561113080" className="contact-me">
                025-777-3067
              </a>
            </li>
            <li>
              <a href="mailto: mmhassaan3@gmail.com" className="contact-me">
                admin@thehomeverse.io
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/Deam+home+villas+San+Diego,+CA,+USA/@32.8644779,-117.2994795,12z/data=!3m1!4b1?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="contact-me"
              >
                Dream home villas San Diego, CA, USA
              </a>
            </li>
          </ul>
        </aside>
        <aside className="follow">
          <legend>Follow Me</legend>
          <div className="icons">
            <div className="instagram">
              <FaInstagram style={{ fontSize: "30px" }} />
            </div>
            <div className="youtube">
              <FaYoutubeSquare style={{ fontSize: "30px" }} />
            </div>
            <div className="twitter">
              <FaTwitterSquare style={{ fontSize: "30px" }} />
            </div>
          </div>
        </aside>
      </div>
      <div className="copy-right">
        <small>© 2022 Dandelion | All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
