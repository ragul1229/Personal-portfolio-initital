import { createElement } from "react";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Code2, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Reveal from "./Reveal";
import elcodamicsImg from "../assets/elcodamics.jpg";

const responsibilities = [
  {
    icon: Code2,
    title: "React interface development",
    description:
      "Built front-end interfaces from technical requirements and translated specifications into reusable React.js components. Focused on a clear visual hierarchy and consistent styling so the interfaces remained understandable and cohesive.",
    details: [
      "Implemented screens and interface elements from provided requirements.",
      "Structured repeated UI patterns as reusable React components.",
      "Worked to keep layout, styling, and interaction patterns consistent.",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Form validation and error handling",
    description:
      "Added input validation and structured error handling to forms. This work focused on making invalid or incomplete input easier to catch and application feedback clearer to users.",
    details: [
      "Validated user input at the interface level.",
      "Handled form errors in a structured way rather than leaving ambiguous feedback.",
      "Worked on interface reliability and the user experience around form submission.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Backend APIs and access control",
    description:
      "Developed PHP-based REST APIs and implemented authentication and authorization workflows using JWT and role-based access control.",
    details: [
      "Created REST API functionality using PHP.",
      "Implemented JWT-based authentication workflows.",
      "Applied role-based access control to distinguish permitted user actions.",
    ],
  },
  {
    icon: UsersRound,
    title: "Agile collaboration and quality",
    description:
      "Worked with senior developers and QA during Agile sprints. Collaborated on debugging UI defects and performance bottlenecks, then helped resolve the issues identified by the team.",
    details: [
      "Worked from requirements alongside senior developers and QA.",
      "Participated in sprint-based development and feedback cycles.",
      "Helped identify, debug, and resolve interface defects and performance bottlenecks.",
    ],
  },
];

const Experience = () => (
  <>
    <Navbar />
    <main className="page-content">
      <header className="page-header">
        <Reveal>
          <p className="eyebrow">Professional experience · 01 role</p>
          <h1 className="page-title">
            Experience shaped by <span className="gradient-text">building and collaboration.</span>
          </h1>
          <p className="page-intro">
            A detailed view of my internship responsibilities, the engineering
            work I contributed to, and the technologies I used. This page
            focuses on my professional experience; education and project
            showcases have their own sections.
          </p>
        </Reveal>
      </header>

      <section className="experience-overview" aria-labelledby="internship-heading">
        <Reveal className="experience-overview-main panel">
          <div className="experience-company experience-company-large">
            <img src={elcodamicsImg} alt="Elcodamics" />
            <div>
              <p className="timeline-meta">AUG 2025 — NOV 2025 · ONSITE</p>
              <h2 id="internship-heading">Full Stack Developer Intern</h2>
              <p>Elcodamics</p>
            </div>
          </div>
          <p className="experience-summary">
            During this internship, I worked across front-end implementation
            and backend functionality. I built React interfaces from
            requirements, developed PHP REST APIs, and contributed to
            validation, authentication, and access-control workflows. The work
            also involved collaborating with senior developers and QA to
            debug and resolve issues during Agile sprints.
          </p>
          <div className="experience-facts">
            <div>
              <span className="timeline-meta">ROLE</span>
              <strong>Full Stack Developer Intern</strong>
            </div>
            <div>
              <span className="timeline-meta">WORKPLACE</span>
              <strong>Elcodamics · Onsite</strong>
            </div>
            <div>
              <span className="timeline-meta">PERIOD</span>
              <strong>August – November 2025</strong>
            </div>
          </div>
          <div className="tag-list" aria-label="Technologies and practices">
            {["React.js", "PHP", "REST APIs", "JWT Authentication", "Role-Based Access", "Agile Sprints"].map((item) => (
              <span className="project-tag" key={item}>{item}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="experience-side panel" delay={0.1}>
          <p className="eyebrow">Role overview</p>
          <h2>Work across the application.</h2>
          <p>
            The internship connected interface work with API and authentication
            tasks. I also worked with the development and QA team to address
            issues found during implementation.
          </p>
          <div className="experience-side-stat">
            <BriefcaseBusiness size={18} />
            <span>Front end <strong>+</strong> backend <strong>+</strong> quality</span>
          </div>
          <p className="experience-note">
            This summary describes responsibilities from my internship; it
            does not add unsupported performance metrics or project claims.
          </p>
        </Reveal>
      </section>

      <section className="section-block" aria-labelledby="contributions-heading">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Responsibilities · In detail</p>
            <h2 id="contributions-heading">
              What I worked on, <span className="gradient-text">area by area.</span>
            </h2>
          </div>
          <p>
            The role combined UI implementation, API development, access
            control, and team-based debugging.
          </p>
        </Reveal>

        <div className="responsibility-grid">
          {responsibilities.map(({ icon, title, description, details }, index) => (
            <Reveal className="panel responsibility-card" key={title} delay={(index % 2) * 0.08}>
              <div className="responsibility-heading">
                <span className="service-icon">{createElement(icon, { size: 20 })}</span>
                <span className="card-index">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="experience-reflection panel">
        <div>
          <p className="eyebrow">How the work came together</p>
          <h2>Requirements → implementation → feedback → refinement.</h2>
        </div>
        <p>
          I translated requirements into interface components and API
          functionality, then worked with developers and QA to identify issues
          and refine the implementation. That combination gave me practical
          exposure to front-end development, backend access workflows, and
          collaborative software delivery.
        </p>
      </Reveal>

      <Reveal className="cta-panel">
        <div>
          <p className="eyebrow">More of my work</p>
          <h2>Explore the projects where I apply these engineering interests.</h2>
        </div>
        <Link className="button button-primary" to="/projects">
          Browse projects <ArrowRight size={17} />
        </Link>
      </Reveal>
    </main>
    <footer className="site-footer">
      <span>RAGUL J · EXPERIENCE</span>
      <span>Elcodamics · August – November 2025</span>
    </footer>
  </>
);

export default Experience;
