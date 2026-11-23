import React from "react";
import { Link } from "react-router-dom";
import "../styles/service.css";
import Navbar from "./Navbar";

function Service() {
  return (
    <div className="service-page-wrapper">
      <Navbar />

      <main className="services-section">
        {/* Header Section */}
        <div className="services-header">
          <h1 className="section-title">
            Freelancing Services I Offer<span className="accent-dot">.</span>
          </h1>
          <p className="section-subtitle">
            I help businesses and individuals build scalable web applications, intelligent AI-driven solutions, and high-performance digital platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          
          {/* Card 1: Full-Stack Development */}
          <div className="service-card">
            <i className="bx bx-code-alt card-icon" aria-hidden="true"></i>
            <h3>Full-Stack Development</h3>
            <p>
              Building robust, scalable applications using the MERN stack, React, Node.js, and Spring Boot. Seamlessly connecting high-performance front-end interfaces with powerful back-end logic.
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
            <i className="bx bx-atom card-icon" aria-hidden="true"></i>
            <h3>AI & GenAI Integration</h3>
            <p>
              Integrating Large Language Models (LLMs), custom AI workflows, and automation tools into your products to streamline tasks, analyze data, and elevate user experiences.
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
            <i className="bx bx-bug card-icon" aria-hidden="true"></i>
            <h3>Bug Fixing & Optimization</h3>
            <p>
              Diagnosing complex code issues, debugging API bottlenecks, improving page speed and responsiveness, and ensuring robust test coverage and application reliability.
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
            <i className="bx bx-cart-alt card-icon" aria-hidden="true"></i>
            <h3>E-Commerce & Web Apps</h3>
            <p>
              Developing secure, feature-rich online stores and custom web platforms equipped with product catalogs, shopping carts, secure authentication, and payment integrations.
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
            <i className="bx bx-briefcase-alt-2 card-icon" aria-hidden="true"></i>
            <h3>Portfolio & Landing Pages</h3>
            <p>
              Designing and developing sleek, professional portfolios and landing pages tailored to showcase your projects, build your personal brand, and attract clients or employers.
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
      </main>
    </div>
  );
}

export default Service;