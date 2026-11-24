import { createElement } from "react";
import { ArrowRight, Atom, Bug, BriefcaseBusiness, Code2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Reveal from "./Reveal";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building robust, scalable applications using the MERN stack, React, Node.js, and Spring Boot—connecting polished front-end interfaces with back-end logic.",
  },
  {
    icon: Atom,
    title: "AI & GenAI Integration",
    description:
      "Integrating Large Language Models, custom AI workflows, and automation tools into products to streamline tasks, analyze data, and elevate user experiences.",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Optimization",
    description:
      "Diagnosing code issues, debugging API bottlenecks, improving page responsiveness, and strengthening test coverage and application reliability.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Web Apps",
    description:
      "Developing secure online stores and custom web platforms with product catalogs, shopping carts, authentication, and payment integrations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Portfolio & Landing Pages",
    description:
      "Designing and developing professional portfolios and landing pages to showcase projects, build a personal brand, and connect with employers or clients.",
  },
];

const Service = () => (
  <>
    <Navbar />
    <main className="page-content">
      <header className="page-header">
        <Reveal>
          <p className="eyebrow">Ways I can help</p>
          <h1 className="page-title">
            Digital products, thoughtfully <span className="gradient-text">engineered.</span>
          </h1>
          <p className="page-intro">
            I help businesses and individuals build scalable web applications,
            intelligent AI-driven solutions, and high-performance digital
            platforms.
          </p>
        </Reveal>
      </header>

      <section className="service-grid" aria-label="Development services">
        {services.map(({ icon, title, description }, index) => (
          <Reveal className="service-card" key={title} delay={(index % 2) * 0.08}>
            <span className="service-icon">{createElement(icon, { size: 20 })}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="service-actions">
              <Link className="button button-primary button-small" to="/contact">
                Discuss a project <ArrowRight size={14} />
              </Link>
              <Link className="button button-secondary button-small" to="/projects">
                See work
              </Link>
            </div>
          </Reveal>
        ))}
      </section>
    </main>
    <footer className="site-footer">
      <span>RAGUL J · SERVICES</span>
      <Link to="/contact">Get in touch <ArrowRight size={13} /></Link>
    </footer>
  </>
);

export default Service;
