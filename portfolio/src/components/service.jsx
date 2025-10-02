import React from "react";
import { Link } from "react-router-dom";
import "../styles/service.css"; // your css file

function Service() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <a className="logo">Portfolio.</a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Who Am I?</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/service" className="active">
              Service
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Freelancing Services I Offer</h2>
        <p className="section-subtitle">
          I help businesses and individuals grow online with high-quality web solutions, from responsive websites to e-commerce platforms and bug fixes.
        </p>

        <div className="services-grid">
          {/* Front-End Development */}
          <div className="service-card">
            <i className="bx bx-code-alt"></i>
            <h3>Front-End Development</h3>
            <p>
              Building responsive and engaging user interfaces using React, HTML, CSS, and JavaScript to create seamless user experiences.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

          {/* WordPress Development */}
          <div className="service-card">
            <i className="bx bx-wordpress"></i>
            <h3>WordPress Development</h3>
            <p>
              Creating professional WordPress websites, custom themes, plugin integration, and WooCommerce stores tailored to your business needs.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

          {/* Bug Fixing & Optimization */}
          <div className="service-card">
            <i className="bx bx-bug"></i>
            <h3>Bug Fixing & Optimization</h3>
            <p>
              Fixing website issues, improving performance, responsiveness, and ensuring smooth functionality for all devices and browsers.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

          {/* E-Commerce Development */}
          <div className="service-card">
            <i className="bx bx-cart-alt"></i>
            <h3>E-Commerce Development</h3>
            <p>
              Developing fully functional online stores with WordPress/WooCommerce or custom React/Node solutions, including payment gateway integration.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

          {/* Portfolio / Personal Websites */}
          <div className="service-card">
            <i className="bx bx-briefcase-alt-2"></i>
            <h3>Portfolio / Personal Websites</h3>
            <p>
              Designing and developing professional personal or portfolio websites that highlight your work and help you get noticed by clients.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
