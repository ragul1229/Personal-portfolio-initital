import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <span className="logo">Portfolio</span>

      {/* Hamburger */}
      <div className={`hamburger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => (isActive ? "active" : "")}
          >Home</NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => (isActive ? "active" : "")}
          >Who Am I?</NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => (isActive ? "active" : "")}
          >Projects</NavLink>
        </li>
        <li>
          <NavLink 
            to="/service" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => (isActive ? "active" : "")}
          >Service</NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => (isActive ? "active" : "")}
          >Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
