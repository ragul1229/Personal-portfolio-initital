import React from "react";
import Navbar from "./Navbar";

const projectsData = [
  {
    title: "🧪 Flaky Test Detector & Explainer",
    category: "AI & Software Testing",
    desc: "An AI-powered testing tool that identifies unreliable test cases by analyzing repeated test executions and inconsistent pass/fail results. Provides failure insights and possible explanations to improve software testing reliability.",
    tags: [
      "Python",
      "FastAPI",
      "LLM API",
      "Streamlit",
      "SQLite",
      "Automated Testing",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "🏛️ Smart Grievance Redressal and Monitoring System",
    category: "MERN Stack Developer",
    desc: "A MERN-based web application that enables citizens to submit and track public grievances. Provides department-wise complaint assignment, status monitoring, and centralized administration to improve transparency and accountability.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Auth",
      "Role-Based Access",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "🎓 EduMentor – AI-Powered Study Assistant",
    category: "AI & Full Stack Developer",
    desc: "An AI-powered learning platform that allows students to upload study materials, generate summaries, and create quizzes. Helps simplify learning through automated content analysis and interactive assessments.",
    tags: [
      "Python",
      "React.js",
      "LLM API",
      "Document Parsing",
      "REST APIs",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "🎟️ Eventure – Event Management Platform",
    category: "Full Stack Developer",
    desc: "A full-stack event management application with Admin, Organizer, and User roles. Supports event creation, management, approval, and user registration through a centralized platform.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RBAC",
      "REST APIs",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "📧 ReachInbox Scheduler",
    category: "Full Stack & Automation",
    desc: "An email scheduling application designed to organize and automate email delivery by allowing users to schedule messages for specific dates and times.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Task Scheduling",
      "Email Automation",
    ],
    codeLink: "",
    demoLink: "",
  },
  {
    title: "⚽ Play-Buddy – Sports Team Finder",
    category: "Full Stack Web Developer",
    desc: "A web application that helps users discover nearby sports teams and connect with players to organize games and sports activities.",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Location Discovery",
      "Responsive UI",
    ],
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
    padding: "40px 5% 60px",
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
            Explore my AI, full-stack, MERN, and web automation projects.
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
                          Live Demo
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