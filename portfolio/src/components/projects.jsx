import React from "react";
import { Link } from "react-router-dom";
import "../styles/project.css";

// Import images
import chessImg from "../assets/chess.jpg";
import rpsImg from "../assets/rps.jpg";
import portfolioImg from "../assets/portfolio.png";
import calculatorImg from "../assets/calculator.jpg";
import guessImg from "../assets/guess.jpg";
import bloodImg from "../assets/blood.jpg";
import playbuddyImg from "../assets/playbuddy.jpg";
import landingImg from "../assets/landing.png";
import checkoutImg from "../assets/checkout.jpg";
import projectsImg from "../assets/projectsImg.jpg";

const Projects = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="logo">Portfolio</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Who Am I?</Link>
          </li>
          <li>
            <Link to="/projects" className="active">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Projects Section */}
      <section className="portfolio-section">
        <h2>My Projects</h2>
        <p>
          Here are a few projects I've worked on recently. Hover to see details.
        </p>

        <div className="project-grid">
          {/* Blood Donation App */}
          <div
            className="project-card"
            style={{ backgroundImage: `url(${bloodImg})` }}
          >
            <div className="project-content">
              <h3>🩸 BloodDonation-FE</h3>
              <p>
                A minimal front-end web app for blood donation awareness and
                information, built in your first year.
              </p>
              <a
                href="https://github.com/ragul1229/BloodDonation-FE"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Play Buddy */}
          <div
            className="project-card"
            style={{ backgroundImage: `url(${playbuddyImg})` }}
          >
            <div className="project-content">
              <h3>🤝 Play-Buddy</h3>
              <p>
                A web platform to help nearby sports teams connect, find
                opponents, and organize friendly matches.
              </p>
              <a
                href="https://github.com/ragul1229/Play-Buddy"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* React Landing Page */}
          <div
            className="project-card"
            style={{ backgroundImage: `url(${landingImg})` }}
          >
            <div className="project-content">
              <h3>🎨 React Landing Page</h3>
              <p>
                A responsive landing page built using React, showcasing modern
                UI/UX principles. Implemented reusable components, state
                management, and smooth navigation.
              </p>
              <a
                href="https://github.com/ragul1229/react-landing-page"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <div
            className="project-card"
            style={{ backgroundImage: `url(${projectsImg})` }}
          >
            <div className="project-content">
              <h3>⚡ 10 JavaScript Projects</h3>
              <p>
                A collection of 10 beginner-to-advanced JavaScript projects,
                showcasing core concepts like DOM manipulation, events, timers,
                and interactive UI design.
              </p>
              <a
                href="https://github.com/ragul1229/10-JavaScript-Projects"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* React Checkout Page */}
          <div
            className="project-card"
            style={{ backgroundImage: `url(${checkoutImg})` }}
          >
            <div className="project-content">
              <h3>🛒 React Checkout Page</h3>
              <p>
                A dynamic e-commerce checkout page built in React. Features
                include cart management, form validation, and interactive UI
                components for seamless order processing.
              </p>
              <a
                href="https://github.com/ragul1229/react-checkout-page"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Repeat the same pattern for other cards */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
