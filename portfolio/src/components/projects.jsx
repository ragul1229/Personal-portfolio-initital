import React from "react";
import Navbar from "./Navbar";

// Import images
import bloodImg from "../assets/blood.jpg";
import playbuddyImg from "../assets/playbuddy.jpg";
import landingImg from "../assets/landing.png";
import checkoutImg from "../assets/checkout.jpg";
import projectsImg from "../assets/projectsImg.jpg";

const projectsData = [
  {
    title: "🩸 BloodDonation-FE",
    desc: "A minimal front-end web app for blood donation awareness and information, built in first year.",
    img: bloodImg,
    tags: ["React", "HTML", "CSS", "Frontend"],
    codeLink: "https://github.com/ragul1229/BloodDonation-FE",
  },
  {
    title: "🤝 Play-Buddy",
    desc: "A web platform to help nearby sports teams connect, find opponents, and organize friendly matches.",
    img: playbuddyImg,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    codeLink: "https://github.com/ragul1229/Play-Buddy",
  },
  {
    title: "🎨 React Landing Page",
    desc: "A responsive landing page built using React, showcasing modern UI/UX principles with reusable components.",
    img: landingImg,
    tags: ["React", "CSS", "UI/UX"],
    codeLink: "https://github.com/ragul1229/react-landing-page",
  },
  {
    title: "⚡ 10 JavaScript Projects",
    desc: "A collection of 10 beginner-to-advanced JavaScript projects, showcasing DOM manipulation, events, timers, and interactive UI design.",
    img: projectsImg,
    tags: ["JavaScript", "HTML", "CSS", "DOM"],
    codeLink: "https://github.com/ragul1229/10-JavaScript-Projects",
  },
  {
    title: "🛒 React Checkout Page",
    desc: "A dynamic e-commerce checkout page built in React. Features include cart management, form validation, and interactive UI components.",
    img: checkoutImg,
    tags: ["React", "JavaScript", "E-commerce", "UI"],
    codeLink: "https://github.com/ragul1229/react-checkout-page",
  },
];

const Projects = () => {
  const containerStyle = {
    fontFamily: "'Poppins', sans-serif",
    padding: "0",
    maxWidth: "100%",
    margin: "0",
    textAlign: "center",
    backgroundColor: "#fdfdfd", // Light background
    color: "#333", // Darker text for readability
    minHeight: "100vh",
  };

  const contentWrapperStyle = {
    padding: "120px 5% 60px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "40px",
  };

  const cardStyle = {
    backgroundColor: "#ffffff", // Light card background
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "15px 20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const tagStyle = {
    display: "inline-block",
    marginRight: "6px",
    marginBottom: "6px",
    padding: "4px 8px",
    fontSize: "12px",
    backgroundColor: "#d1e8ff", // Soft blue
    color: "#007bff", // Blue text
    borderRadius: "5px",
  };

  const linkStyle = {
    marginRight: "10px",
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "14px",
    padding: "6px 12px",
    backgroundColor: "#007bff", // Primary button color
    borderRadius: "6px",
    transition: "background 0.3s",
  };

  return (
    <div style={{ margin: 0, padding: 0, minHeight: "100vh" }}>
      <Navbar />
      <section style={containerStyle}>
        <div style={contentWrapperStyle}>
          <h2 style={{ color: "#007bff", marginBottom: "10px" }}>My Projects</h2>
          <p style={{ fontSize: "16px", color: "#555" }}>
            Here are a few projects I've worked on recently. Hover on a card to see details.
          </p>

          <div style={gridStyle}>
            {projectsData.map((proj, idx) => (
              <div
                key={idx}
                style={cardStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img src={proj.img} alt={proj.title} style={imgStyle} />
                <div style={contentStyle}>
                  <div>
                    <h3 style={{ color: "#007bff", marginBottom: "8px" }}>
                      {proj.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#555" }}>{proj.desc}</p>
                    <div style={{ marginTop: "10px" }}>
                      {proj.tags.map((tag, i) => (
                        <span key={i} style={tagStyle}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: "12px" }}>
                    {proj.codeLink && (
                      <a
                        href={proj.codeLink}
                        target="_blank"
                        rel="noreferrer"
                        style={linkStyle}
                      >
                        View Code
                      </a>
                    )}
                    {proj.demoLink && (
                      <a
                        href={proj.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        style={linkStyle}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
