import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import aiProjectImg from "../assets/ai-project.jpg";
import grievanceImg from "../assets/projectsImg.jpg";
import studyImg from "../assets/skills.jpg";
import eventImg from "../assets/landing.png";
import inboxImg from "../assets/checkout.jpg";
import playBuddyImg from "../assets/playbuddy.jpg";
import Navbar from "./Navbar";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Flaky Test Detector & Explainer",
    category: "AI · SOFTWARE TESTING",
    description:
      "An AI-powered testing tool that identifies unreliable test cases by analyzing repeated test executions and inconsistent pass/fail results. It provides failure insights and possible explanations to improve testing reliability.",
    tags: ["Python", "FastAPI", "LLM API", "Streamlit", "SQLite", "Automated Testing"],
    image: aiProjectImg,
    alt: "Flaky Test Detector project preview",
  },
  {
    title: "Smart Grievance Redressal System",
    category: "FULL-STACK · MERN",
    description:
      "A MERN-based application for citizens to submit and track public grievances, with department-wise assignment, status monitoring, and centralized administration.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "Role-Based Access"],
    image: grievanceImg,
    alt: "Grievance Redressal project preview",
  },
  {
    title: "EduMentor — AI Study Assistant",
    category: "AI · FULL-STACK",
    description:
      "An AI-powered learning platform where students can upload study materials, generate summaries, and create quizzes through automated content analysis and interactive assessments.",
    tags: ["Python", "React.js", "LLM API", "Document Parsing", "REST APIs"],
    image: studyImg,
    alt: "EduMentor study assistant project preview",
  },
  {
    title: "Eventure — Event Management",
    category: "FULL-STACK · PLATFORM",
    description:
      "A full-stack event management application with Admin, Organizer, and User roles. Supports event creation, management, approval, and user registration.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "REST APIs"],
    image: eventImg,
    alt: "Eventure event management project preview",
  },
  {
    title: "ReachInbox Scheduler",
    category: "FULL-STACK · AUTOMATION",
    description:
      "An email scheduling application designed to organize and automate email delivery by allowing users to schedule messages for specific dates and times.",
    tags: ["React.js", "Node.js", "Express.js", "Task Scheduling", "Email Automation"],
    image: inboxImg,
    alt: "ReachInbox Scheduler project preview",
  },
  {
    title: "Play-Buddy — Sports Team Finder",
    category: "FULL-STACK · COMMUNITY",
    description:
      "A web application that helps users discover nearby sports teams and connect with players to organize games and sports activities.",
    tags: ["React.js", "Node.js", "MongoDB", "Location Discovery", "Responsive UI"],
    image: playBuddyImg,
    alt: "Play-Buddy sports team finder project preview",
  },
];

const Projects = () => (
  <>
    <Navbar />
    <main className="page-content">
      <header className="page-header">
        <Reveal>
          <p className="eyebrow">Selected work · 01—06</p>
          <h1 className="page-title">
            Projects that bring <span className="gradient-text">ideas to life.</span>
          </h1>
          <p className="page-intro">
            A collection of work across AI, full-stack development, software
            testing, and automation. Each project explores a practical problem
            through code.
          </p>
        </Reveal>
      </header>

      <section className="project-grid" aria-label="Portfolio projects">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.08}>
            <article className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <h2>{project.title}</h2>
                  <ArrowDownRight size={20} aria-hidden="true" color="var(--accent)" />
                </div>
                <p>{project.description}</p>
                <div className="tag-list" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal className="cta-panel">
        <div>
          <p className="eyebrow">More on GitHub</p>
          <h2>Explore my repositories and ongoing work.</h2>
        </div>
        <a
          className="button button-primary"
          href="https://github.com/ragul1229"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code2 size={17} /> GitHub profile <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </main>
    <footer className="site-footer">
      <span>RAGUL J · PROJECTS</span>
      <Link to="/contact">Have a project in mind? <ArrowUpRight size={13} /></Link>
    </footer>
  </>
);

export default Projects;
