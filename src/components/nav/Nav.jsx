import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Nav = ({ isDropdown, setIsDropdown }) => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="services">
            <Link onClick={() => setIsDropdown((prev) => !prev)}>
              Services{" "}
              {isDropdown ? (
                <FaAngleUp style={{ fontSize: "22px", paddingLeft: "8px" }} />
              ) : (
                <FaAngleDown style={{ fontSize: "22px", paddingLeft: "8px" }} />
              )}
            </Link>
            <ul className={isDropdown ? "sub-menu" : "dropped-down"}>
              <li>
                <Link to="/for-buy">Buy</Link>
              </li>
              <li>
                <Link to="/for-rent">Rent</Link>
              </li>
              <li>
                <Link to="/agents">Consultation</Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/explore">Explore Lands</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
