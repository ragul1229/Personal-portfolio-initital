import React from "react";
import { Link } from "react-router-dom";
import "../styles/service.css";
import Navbar from "./Navbar";

// Icons: We'll assume Boxicons (bx) or similar library is linked in index.html,
// or we can use generic placeholders. Sticking with the existing 'bx' classes.

function Service() {
  return (
    <div className="service-page-wrapper">
      <Navbar />

      <section className="services-section">
        
        {/* Header Section */}
        <div className="services-header">
          <h2 className="section-title">
            Freelancing Services I Offer<span className="accent-dot">.</span>
          </h2>
          <p className="section-subtitle">
            I help businesses and individuals grow online with modern, intelligent
            solutions, from high-performance web applications to cutting-edge AI integration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          
          {/* Card 1: Full-Stack Development */}
          <div className="service-card">
            <i className="bx bx-code-alt card-icon"></i>
            <h3>Full-Stack Development</h3>
            <p>
              Building robust, scalable applications using the MERN stack (MongoDB, Express, React, Node.js). Seamlessly integrate front-end design with powerful back-end logic.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

          {/* Card 2: AI/ML Integration & Generative AI */}
          <div className="service-card">
            <i className="bx bx-atom card-icon"></i>
            <h3>AI/ML Integration</h3>
            <p>
              Integrating Large Language Models (LLMs) and custom Machine Learning solutions into your existing products to automate tasks, analyze data, and create smarter user experiences.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

          {/* Card 3: Bug Fixing & Optimization */}
          <div className="service-card">
            <i className="bx bx-bug card-icon"></i>
            <h3>Bug Fixing & Optimization</h3>
            <p>
              Diagnosing complex issues, improving website performance, speed, and responsiveness, and ensuring flawless functionality across all modern devices and browsers.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

          {/* Card 4: E-Commerce Development */}
          <div className="service-card">
            <i className="bx bx-cart-alt card-icon"></i>
            <h3>E-Commerce Development</h3>
            <p>
              Developing secure, scalable online stores using custom MERN solutions or platforms like WooCommerce, complete with inventory management and payment integration.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

          {/* Card 5: Portfolio / Personal Websites */}
          <div className="service-card">
            <i className="bx bx-briefcase-alt-2 card-icon"></i>
            <h3>Portfolio / Personal Sites</h3>
            <p>
              Designing and developing professional personal or portfolio websites that effectively showcase your projects and attract clients and employers.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>
          
          {/* Card 6: CMS/WordPress Development (Optional but good to keep) */}
          <div className="service-card">
            <i className="bx bx-wordpress card-icon"></i>
            <h3>CMS & WordPress Solutions</h3>
            <p>
              Custom WordPress theme development, setup, plugin integration, and maintenance for simple content management and blogging platforms.
            </p>
            <div className="btn-group">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Work
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Service;
