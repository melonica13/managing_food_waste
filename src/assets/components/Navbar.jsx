import React from "react";
import { LeafyGreen } from "lucide-react";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <LeafyGreen className="logo-icon" />
          <span className="logo-text">foodify</span>
        </div>
        <div className="navbar-menu">
          <Link to="/todays-menu" className="menu-item">
            Today's Menu
          </Link>
          <a
            href="#vision"
            className="menu-item"
            onClick={scrollToSection("vision")}
          >
            Our Vision
          </a>
          <a
            href="#get-involved"
            className="menu-item"
            onClick={scrollToSection("get-involved")}
          >
            Get Involved
          </a>
          <a href="#contact" className="menu-item">
            Contact
          </a>
          <Link to="/profile" className="menu-item">
            <Profile />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
