import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Reveal from "./Reveal";
import profileImg from "../assets/ragul.jpg";

const skillGroups = [
  {
    title: "Programming languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    title: "Frontend development",
    skills: ["React.js", "HTML5", "CSS3", "Material-UI (MUI)", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "RESTful APIs", "JWT Authentication"],
  },
  {
    title: "Databases & storage",
    skills: ["MongoDB", "SQLite", "MySQL", "Query Optimization"],
  },
  {
    title: "AI & data science",
    skills: ["Data Analysis", "Python Data Stack", "Prompt Engineering", "LLM Integration", "Automated Classification"],
  },
  {
    title: "Testing & reliability",
    skills: ["Flaky Test Detection", "Automated Testing", "PyTest", "JUnit", "Debugging & Profiling"],
  },
  {
    title: "Tools & practices",
    skills: ["Git", "GitHub", "Apache Maven", "Agile Sprints", "VS Code", "Postman"],
  },
];

const education = [
  {
    years: "2023 – 2027",
    title: "B.Tech — Artificial Intelligence and Data Science",
    school: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    result: "CGPA: 8.3 / 10",
  },
  {
    years: "2021 – 2023",
    title: "HSC — Class XII",
    school: "SB Matriculation Higher Secondary School, Musiri, Trichy, Tamil Nadu",
    result: "Score: 84%",
  },
];

const certifications = [
  { provider: "freeCodeCamp", title: "JavaScript Algorithms & Data Structures" },
  { provider: "freeCodeCamp", title: "Responsive Web Design" },
  { provider: "IBM", title: "Web Development Fundamentals" },
  { provider: "Certification", title: "Python 101 for Data Science" },
];

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const sectionId = hash.slice(1);
    if (!sectionId) return undefined;

    const timer = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
  <>
    <Navbar />
    <main className="page-content">
      <header className="page-header">
        <Reveal>
          <p className="eyebrow">About · Background · Interests</p>
          <h1 className="page-title">
            A curious engineer with a <span className="gradient-text">systems mindset.</span>
          </h1>
          <p className="page-intro">
            I’m Ragul J, an Artificial Intelligence and Data Science student
            interested in how useful software is designed, built, tested, and
            improved.
          </p>
        </Reveal>
      </header>

      <section className="about-layout" aria-label="Personal introduction">
        <Reveal className="panel about-copy">
          <div className="about-profile">
            <img src={profileImg} alt="Ragul J" />
            <div>
              <p className="eyebrow">Developer · Learner · Builder</p>
              <h2>Ragul J</h2>
              <p>AI &amp; Data Science Student | Full-Stack &amp; AI Systems Developer</p>
            </div>
          </div>
          <p>
            I build intelligent, full-stack software applications and AI-driven
            testing tools. My background in Artificial Intelligence and Data
            Science informs the way I explore practical AI, while hands-on
            software projects have helped me work across responsive interfaces,
            APIs, databases, and automated testing.
          </p>
          <p>
            I’m especially interested in full-stack development, AI automation,
            and software reliability. I enjoy learning unfamiliar technologies,
            breaking down real-world problems, and turning what I learn into
            working projects.
          </p>
          <p>
            My development approach is to understand the problem first, make
            functionality clear to the user, and pay attention to maintainable
            implementation and useful feedback when something goes wrong.
          </p>
          <div className="hero-actions">
            <a className="button button-primary button-small" href="https://github.com/ragul1229" target="_blank" rel="noopener noreferrer">
              <Code2 size={15} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a className="button button-secondary button-small" href="https://www.linkedin.com/in/ragul29/" target="_blank" rel="noopener noreferrer">
              <BriefcaseBusiness size={15} /> LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        <div className="detail-stack">
          <Reveal className="panel detail-card">
            <h3><MapPin size={16} color="var(--accent)" /> Based in</h3>
            <p>Coimbatore, Tamil Nadu, India</p>
          </Reveal>
          <Reveal className="panel detail-card" delay={0.08}>
            <h3>Technical interests</h3>
            <div className="tag-list">
              {["Full-stack development", "AI automation", "Software reliability"].map((item) => (
                <span className="project-tag" key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="panel detail-card" delay={0.14}>
            <h3>Career direction</h3>
            <p>
              Growing as a software engineer by applying full-stack development,
              backend engineering, and practical AI to useful products.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-block" id="skills" aria-labelledby="skills-heading">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Technical toolkit</p>
            <h2 id="skills-heading">
              Technologies and practices I <span className="gradient-text">work with.</span>
            </h2>
          </div>
          <p>Grouped by area—without arbitrary proficiency scores.</p>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal className="panel skill-group" key={group.title} delay={(index % 2) * 0.08}>
              <h3>{group.title}</h3>
              <div className="skill-chips">
                {group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-block" id="education" aria-labelledby="education-heading">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Academic background</p>
            <h2 id="education-heading">
              Learning that supports <span className="gradient-text">the work I do.</span>
            </h2>
          </div>
        </Reveal>
        <div className="education-grid">
          {education.map((item, index) => (
            <Reveal className="panel education-card" key={item.title} delay={index * 0.08}>
              <p className="timeline-meta">{item.years} · EDUCATION</p>
              <h3>{item.title}</h3>
              <p>{item.school}</p>
              <span className="skill-chip">{item.result}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-layout" aria-label="Certifications and research">
        <Reveal className="panel detail-card">
          <h2><GraduationCap size={18} color="var(--accent)" /> Certifications</h2>
          <ul className="certificate-list">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <strong>{cert.title}</strong>
                <span>{cert.provider}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="panel detail-card">
          <p className="eyebrow">Research publication</p>
          <h2>Hostel Management System</h2>
          <p>
            Published in the International Journal of Research Publication and
            Reviews (IJRPR), Volume 6, Issue 5, 2025.
          </p>
        </Reveal>
      </section>
    </main>
    <footer className="site-footer">
      <span>RAGUL J · ABOUT</span>
      <span>Learning through building.</span>
    </footer>
  </>
  );
};

export default About;
