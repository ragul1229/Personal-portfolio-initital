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

const Projects = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="logo">Portfolio</span>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Who Am I?</Link></li>
          <li><Link to="/projects" className="active">Portfolio</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Projects Section */}
      <section className="portfolio-section">
        <h2>My Projects</h2>
        <p>Here are a few projects I've worked on recently. Hover to see details.</p>

        <div className="project-grid">
          {/* Chess Game */}
          <div className="project-card" style={{ backgroundImage: `url(${chessImg})` }}>
            <div className="project-content">
              <h3>♟️ Chess-Game</h3>
              <p>A modern web-based Chess game built to challenge your strategy and logic. Built with HTML, CSS, and JavaScript.</p>
              <a href="https://github.com/ragul1229/Chess-Game" target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </div>

          {/* Rock Paper Scissors */}
          <div className="project-card" style={{ backgroundImage: `url(${rpsImg})` }}>
            <div className="project-content">
              <h3>✊ Rock-Paper-Scissors</h3>
              <p>A fun interactive JavaScript game that lets you challenge the computer in classic RPS logic.</p>
              <a href="https://github.com/ragul1229/rock-paper-scissors-game" target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </div>
            <div className="project-card" style={{ backgroundImage: `url(${portfolioImg})` }}>
            <div className="project-content">
              <h3>🌐 Personal Portfolio</h3>
              <p>My personal portfolio website built with HTML, CSS, JavaScript, Framer Motion, and 3D effects.</p>
              <a href="https://github.com/ragul1229/Personal-portfolio-initital" target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </div>
           {/* Calculator */}
  <div className="project-card" style={{ backgroundImage: `url(${calculatorImg})` }}>
    <div className="project-content">
      <h3>🧮 Calculator-JS</h3>
      <p>A vibrant, browser-based calculator app built using HTML, CSS, and JavaScript. Perfect for quick operations.</p>
      <a href="https://github.com/ragul1229/Calculator-JS" target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  </div>
   {/* Guess a Number */}
  <div className="project-card" style={{ backgroundImage: `url(${guessImg})` }}>
    <div className="project-content">
      <h3>🔢 Guess-a-Number</h3>
      <p>A JavaScript-based guessing game where users try to guess a random number between 1 and 100.</p>
      <a href="https://github.com/ragul1229/Guess-a-Number" target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  </div>
  {/* Blood Donation App */}
  <div className="project-card" style={{ backgroundImage: `url(${bloodImg})` }}>
    <div className="project-content">
      <h3>🩸 BloodDonation-FE</h3>
      <p>A minimal front-end web app for blood donation awareness and information, built in your first year.</p>
      <a href="https://github.com/ragul1229/BloodDonation-FE" target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  </div>
  
  {/* Play Buddy */}
  <div className="project-card" style={{ backgroundImage: `url(${playbuddyImg})` }}>
    <div className="project-content">
      <h3>🤝 Play-Buddy</h3>
      <p>A web platform to help nearby sports teams connect, find opponents, and organize friendly matches.</p>
      <a href="https://github.com/ragul1229/Play-Buddy" target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  </div>

  {/* React Landing Page */}
  <div className="project-card" style={{ backgroundImage: `url(${landingImg})` }}>
    <div className="project-content">
      <h3>🎨 React Landing Page</h3>
      <p>A responsive landing page built using React, showcasing modern UI/UX principles. Implemented reusable components, state management, and smooth navigation.</p>
      <a href="https://github.com/ragul1229/react-landing-page" target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  </div>

  {/* React Checkout Page */}
  <div className="project-card" style={{ backgroundImage: `url(${checkoutImg})` }}>
    <div className="project-content">
      <h3>🛒 React Checkout Page</h3>
      <p>A dynamic e-commerce checkout page built in React. Features include cart management, form validation, and interactive UI components for seamless order processing.</p>
      <a href="https://github.com/ragul1229/react-checkout-page" target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  </div>


          {/* Repeat the same pattern for other cards */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
