import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink className="logo" to="/" onClick={() => setIsOpen(false)}>
        Portfolio
      </NavLink>

      <button
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul
        className={`nav-links ${isOpen ? "open" : ""}`}
        id="primary-navigation"
      >
        <li>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Who Am I?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <button
        className={`nav-backdrop ${isOpen ? "open" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
