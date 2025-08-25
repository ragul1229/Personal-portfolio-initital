import React from "react";
import { Link } from "react-router-dom";
import ragulImg from "../assets/ragul.jpg";
import "../styles/index.css";
// Make sure to add this import for the social media icons

const Home = () => {
  return (
    <div>
      {/* Bar Animation Background */}
      <div className="bars-animation">
        <div className="bar" style={{ "--i": 6 }}></div>
        <div className="bar" style={{ "--i": 5 }}></div>
        <div className="bar" style={{ "--i": 4 }}></div>
        <div className="bar" style={{ "--i": 3 }}></div>
        <div className="bar" style={{ "--i": 2 }}></div>
        <div className="bar" style={{ "--i": 1 }}></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <span className="logo">Portfolio</span>
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Who Am I?</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <section className="home">
        <div className="home-info">
          <h1>Ragul</h1>
          <h2>I'm a FullStack Developer</h2>
          <p>
            Hi, I'm <strong>Ragul J</strong>, an enthusiastic and dedicated
            third-year Artificial Intelligence Engineering student with a
            passion for building intelligent systems and creative web interfaces.
            I enjoy working on real-world projects, from AI-powered assistants
            to YouTube clone frontends, blending logic with design.
          </p>

          <div className="btn-sci">
            {/* Download CV button */}
            <a
              href="/ragul-resume-main.pdf" // Use this relative path after placing the PDF in the public folder
              download="ragul-resume-main"
              className="btn"
            >
              Download CV
            </a>

            {/* Social icons */}
            <div className="sci">
              <a
                href="https://github.com/ragul1229"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ragul29/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://leetcode.com/u/ragulintech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-code-alt"></i>
              </a>
              <a
                href="https://www.instagram.com/rxgul/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="home-img">
          <div className="img-box">
            <img src={ragulImg} alt="Ragul" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;