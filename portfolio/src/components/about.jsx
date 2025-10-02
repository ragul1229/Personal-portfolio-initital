import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

// Import your images
import profileImg from "../assets/ragul.jpg";
import aiProjectImg from "../assets/ai-project.jpg";
import skillsImg from "../assets/skills.jpg";
import elcodamicsImg from "../assets/elcodamics.jpg"; // Add an image for your internship/company


const About = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="logo">Portfolio</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" className="active">
              Who Am I?
            </Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* About Section */}
      <main className="about-container">
        {/* Left Sidebar (Fixed) */}
        <aside className="profile-sidebar">
          <img src={profileImg} alt="Ragul J" className="profile-img" />
          <h2>Ragul J</h2>
          <p>Full-Stack Developer | AI Enthusiast</p>
          <ul>
            <li>📍 Coimbatore, India</li>
            <li>
              <a href="mailto:jsragul1229@gmail.com">jsragul1229@gmail.com</a>
            </li>
            <li>
              <a
                href="https://github.com/ragul1229"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ragul29"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </aside>

        {/* Right Content (Scrollable) */}
        <div className="content-wrapper">
          <h1 className="main-heading">My Professional Profile</h1>

          {/* Intro Section */}
          <section className="info-section fade-in">
            <h2>
              Hello, I'm <span className="highlight">Ragul J</span>
            </h2>
            <p>
              A passionate and results-driven{" "}
              <span className="highlight">Full-Stack Developer</span>{" "}
              specializing in Generative AI. As a{" "}
              <strong>third-year AI & Data Science student</strong>, I focus on
              building intelligent applications that blend innovation with
              seamless user experiences.
            </p>
            <p>
              My expertise lies in developing{" "}
              <strong>end-to-end AI-powered solutions</strong> using modern
              full-stack technologies. I integrate{" "}
              <strong>Large Language Models (LLMs)</strong>, craft APIs, and
              design user-focused interfaces to solve real-world problems.
            </p>
          </section>

          {/* Professional Experience Section */}
          <section className="info-section card fade-in">
            <img
              src={elcodamicsImg}
              alt="Elcodamics Internship"
              className="card-img small-img"
            />
            <div>
              <h2>Professional Experience</h2>
              <ul>
                <li>
                  Currently interning at <strong>Elcodamics</strong>, contributing to AI & web development projects.
                </li>
                <li>
                  Developing features for full-stack applications using{" "}
                  <strong>React.js, Node.js, PHP and MongoDB</strong>.
                </li>
                <li>
                  Integrating AI-powered solutions into practical tools, including automation and optimization modules.
                </li>
                <li>
                  Collaborating with senior developers to enhance system architecture and code efficiency.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects Section */}
          <section className="info-section card fade-in">
            <img
              src={aiProjectImg}
              alt="AI Project"
              className="card-img small-img"
            />
            <div>
              <h2>AI & Development Solutions</h2>
              <ul>
                <li>
                  Built a{" "}
                  <span className="highlight">
                    voice-controlled AI assistant
                  </span>{" "}
                  demonstrating skills in AI integration and intuitive design.
                </li>
                <li>
                  Developed an{" "}
                  <span className="highlight">ML-powered outpass system</span>{" "}
                  that streamlines and secures college administration.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section className="info-section card fade-in">
            <img
              src={skillsImg}
              alt="Skills & Tools"
              className="card-img small-img"
            />
            <div>
              <h2>Core Competencies</h2>
              <p>
                Skilled in <strong>Generative AI</strong>,{" "}
                <strong>Prompt Engineering</strong>, and{" "}
                <strong>AI model integration</strong>. Proficient with:
              </p>
              <ul className="skills-list">
                <li>React.js, Node.js, Express.js</li>
                <li>MongoDB, MySQL, Flask</li>
                <li>Python, Machine Learning</li>
                <li>Three.js, Framer Motion</li>
              </ul>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="info-section fade-in">
            <h2>Key Achievements</h2>
            <ul className="skills-list">
              <li>🏆 Built and deployed 5+ real-world AI & web projects</li>
              <li>📚 Internship experience in full-stack development</li>
              <li>🎤 Presented research paper on AI-driven smart systems</li>
              <li>🤝 Active contributor on GitHub & open-source projects</li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="info-section fade-in">
            <h2 className="highlight">Let’s Build Something Great Together</h2>
            <p>
              I’m eager to collaborate with forward-thinking teams and apply my
              skills in <strong>Generative AI</strong> &{" "}
              <strong>Full-Stack Development</strong> to create impactful
              solutions.
            </p>
            <p>
              Please feel free to{" "}
              <Link to="/contact" className="highlight">
                get in touch
              </Link>{" "}
              — I’d love to discuss how I can add value to your team.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
