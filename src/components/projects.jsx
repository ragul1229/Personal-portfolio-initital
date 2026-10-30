import React from "react";
import Navbar from "./Navbar";

const projectsData = [
  {
    title: "🧠 SourceProof",
    category: "AI Engineer",
    desc: "An evidence-grounded AI research agent that answers research questions using evidence retrieved from uploaded documents.",
    tags: [
      "Python",
      "FastAPI",
      "LLM API",
      "Embeddings",
      "BM25",
      "Qdrant/pgvector",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "🧩 RepoMind",
    category: "AI Engineer",
    desc: "An AI-powered codebase understanding and debugging agent that indexes source files and retrieves relevant code for debugging questions.",
    tags: [
      "Python",
      "FastAPI",
      "LLM API",
      "Code Parsing",
      "Embeddings",
      "Git",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "⚙️ FlowForge",
    category: "Full Stack Developer",
    desc: "A visual workflow automation platform that allows users to create automated processes using interconnected nodes.",
    tags: [
      "React",
      "TypeScript",
      "React Flow",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "💰 FinSight",
    category: "Full Stack Developer",
    desc: "A personal finance analytics platform for managing transactions, monitoring budgets, and analyzing spending patterns.",
    tags: [
      "React",
      "TypeScript",
      "Spring Boot/Node.js",
      "PostgreSQL",
      "Charting Library",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "📡 OpenSignal",
    category: "MERN Stack Developer",
    desc: "A real-time infrastructure incident platform for reporting and monitoring infrastructure incidents using an interactive map.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "Leaflet",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "🎓 SkillBridge",
    category: "MERN Stack Developer",
    desc: "A collaborative learning and mentorship platform connecting learners with mentors through skill-based discovery.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "JWT",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "🛡️ Sentinel",
    category: "Spring Boot Developer",
    desc: "An intelligent API security and reliability platform for managing authentication, request limits, and service reliability.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JUnit",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "📦 Smart Inventory and Order Management System",
    category: "Spring Boot Developer",
    desc: "An inventory and order management application to track products, stock levels, and order status.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Redis",
      "Spring Security",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "♿ AccessAble",
    category: "UI/UX Designer",
    desc: "An accessibility-first digital experience design that helps teams identify and prioritize usability barriers.",
    tags: ["Figma", "FigJam", "axe DevTools", "WCAG Guidance"],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "🩺 MediFlow",
    category: "UI/UX Designer",
    desc: "A patient-centered appointment booking experience designed for discovering healthcare providers and managing visits.",
    tags: ["Figma", "FigJam", "Interactive Prototyping"],
    codeLink: "",
    demoLink: "",
  },
];

const styles = {
  page: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
  },
  container: {
    fontFamily: "'Poppins', sans-serif",
    padding: 0,
    margin: 0,
    textAlign: "center",
    backgroundColor: "#fdfdfd",
    color: "#333",
    minHeight: "100vh",
  },
  contentWrapper: {
    padding: "120px 5% 60px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    color: "#007bff",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
    gap: "20px",
    marginTop: "40px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },
  categoryBanner: {
    minHeight: "110px",
    padding: "16px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eef6ff",
    color: "#0056b3",
    fontSize: "15px",
    fontWeight: 600,
    textAlign: "center",
  },
  content: {
    padding: "20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  projectTitle: {
    color: "#0056b3",
    margin: "0 0 10px",
    fontSize: "19px",
    lineHeight: 1.4,
    overflowWrap: "anywhere",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.7,
    margin: "0 0 14px",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },
  tag: {
    display: "inline-block",
    padding: "4px 8px",
    fontSize: "12px",
    backgroundColor: "#d1e8ff",
    color: "#004b91",
    borderRadius: "5px",
    overflowWrap: "anywhere",
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px",
  },
  link: {
    display: "inline-block",
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "14px",
    padding: "8px 14px",
    backgroundColor: "#0056b3",
    borderRadius: "6px",
  },
};

const Projects = () => {
  return (
    <div style={styles.page}>
      <Navbar />

      <section style={styles.container} aria-labelledby="projects-heading">
        <div style={styles.contentWrapper}>
          <h2 id="projects-heading" style={styles.heading}>
            My Projects
          </h2>

          <p style={styles.subtitle}>
            Explore my AI, full-stack, MERN, Spring Boot, and UI/UX projects.
          </p>

          <div style={styles.grid}>
            {projectsData.map((project) => (
              <article key={project.title} style={styles.card}>
                <div style={styles.categoryBanner}>
                  {project.category}
                </div>

                <div style={styles.content}>
                  <div>
                    <h3 style={styles.projectTitle}>{project.title}</h3>

                    <p style={styles.description}>{project.desc}</p>

                    <div style={styles.tags}>
                      {project.tags.map((tag) => (
                        <span key={tag} style={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(project.codeLink || project.demoLink) && (
                    <div style={styles.links}>
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.link}
                          aria-label={`View code for ${project.title}`}
                        >
                          View Code
                        </a>
                      )}

                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.link}
                          aria-label={`View demo for ${project.title}`}
                        >
                          {project.category === "UI/UX Designer"
                            ? "View Prototype"
                            : "Live Demo"}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;