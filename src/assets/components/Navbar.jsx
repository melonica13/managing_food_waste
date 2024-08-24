import React from 'react';
import { LeafyGreen } from 'lucide-react';
import Profile from './Profile';
import TodaysMenu from './Menu';

const Navbar = () => {
  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <LeafyGreen className="logo-icon" />
          <span className="logo-text">foodify</span>
        </div>
        <div className="navbar-menu">
          <TodaysMenu/>
          <a href="#vision" className="menu-item" onClick={scrollToSection('vision')}>Our Vision</a>
          <a href="#get-involved" className="menu-item" onClick={scrollToSection('get-involved')}>Get Involved</a>
          <a href="#contact" className="menu-item">Contact</a>
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
