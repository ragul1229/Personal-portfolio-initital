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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Who Am I?</Link></li>
          <li><Link to="/interport">Projects</Link></li>
          <li><Link to="/service" className="active">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">What I Do</h2>
        <p className="section-subtitle">
          I build robust, scalable, and intuitive digital solutions. My expertise lies in
          creating seamless user experiences powered by modern technology.
        </p>

        <div className="services-grid">
          {/* Front-End Development */}
          <div className="service-card">
            <i className="bx bx-code-alt"></i>
            <h3>Front-End Development</h3>
            <p>
              Crafting responsive and engaging user interfaces using React, HTML, CSS,
              and JavaScript to deliver exceptional user experiences.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn">Get a Quote</Link>
              <Link to="/interport#frontend" className="btn btn-secondary">View Work</Link>
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="service-card">
            <i className="bx bx-brain"></i>
            <h3>AI & Machine Learning</h3>
            <p>
              Designing and implementing intelligent systems for data analysis,
              automation, and predictive modeling using Python and popular ML frameworks.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn">Get a Quote</Link>
              <Link to="/interport#ai" className="btn btn-secondary">View Work</Link>
            </div>
          </div>

          {/* Full-Stack Solutions */}
          <div className="service-card">
            <i className="bx bx-devices"></i>
            <h3>Full-Stack Solutions</h3>
            <p>
              Delivering end-to-end web applications by integrating front-end and
              back-end logic, including API development, database management, and
              authentication.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn">Get a Quote</Link>
              <Link to="/interport#fullstack" className="btn btn-secondary">View Work</Link>
            </div>
          </div>

          {/* Custom Web Design */}
          <div className="service-card">
            <i className="bx bx-customize"></i>
            <h3>Custom Web Design</h3>
            <p>
              Creating unique, professional, and mobile-first websites that are tailored
              to personal branding and optimized for a seamless user experience across
              all devices.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn">Get a Quote</Link>
              <Link to="/interport#portfolio" className="btn btn-secondary">View Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
