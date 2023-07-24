import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";
import { FaAngleDown, FaAngleUp, FaBars } from "react-icons/fa";
import { useRef } from "react";

const Nav = ({ isDropdown, setIsDropdown }) => {
  const navRef = useRef();
  const toggleMenu = () => {
    navRef.current.classList.toggle("toggle-menu");
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="header-nav" ref={navRef}>
        <ul>
          <li onClick={toggleMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={toggleMenu}>
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
                <Link to="/for-buy" onClick={toggleMenu}>Buy</Link>
              </li>
              <li>
                <Link to="/for-rent" onClick={toggleMenu}>Rent</Link>
              </li>
              <li>
                <Link to="/agents" onClick={toggleMenu}>Consultation</Link>
              </li>
            </ul>
          </li>
          <li onClick={toggleMenu}>
            <NavLink to="/explore">Explore Lands</NavLink>
          </li>
        </ul>
        <button className="close-menu" onClick={toggleMenu}>
          X
        </button>
      </nav>
      <button className="menu-icon">
        <FaBars onClick={toggleMenu} />
      </button>
    </header>
  );
};

export default Nav;
