import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  AtSign,
  BriefcaseBusiness,
  Code2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import ragulImg from "../assets/ragul.jpg";
import Navbar from "./Navbar";
import Reveal from "./Reveal";

const roles = ["Full-Stack Developer", "Java Developer", "AI Enthusiast"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <>
      <Navbar />
      <main className="page-content">
        <section className="hero subtle-grid" aria-labelledby="hero-title">
          <Motion.div
            className="hero-content"
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
              },
            }}
          >
            <Motion.p
              className="eyebrow"
              variants={{
                hidden: { y: 12 },
                show: { y: 0, transition: { duration: 0.55 } },
              }}
            >
              AI &amp; Data Science · Coimbatore, India
            </Motion.p>
            <Motion.h1
              id="hero-title"
              variants={{
                hidden: { y: 20 },
                show: {
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              Hi, I’m Ragul<span>.</span>
            </Motion.h1>
            <Motion.div
              className="hero-role"
              variants={{
                hidden: { y: 14 },
                show: { y: 0, transition: { duration: 0.55 } },
              }}
              aria-live="polite"
            >
              <span className="role-prefix">I build as a</span>
              <AnimatePresence mode="wait" initial={false}>
                <Motion.span
                  key={roles[roleIndex]}
                  className="gradient-text"
                  initial={reduceMotion ? false : { y: 9 }}
                  animate={{ y: 0 }}
                  exit={reduceMotion ? undefined : { y: -9 }}
                  transition={{ duration: 0.28 }}
                >
                  {roles[roleIndex]}
                </Motion.span>
              </AnimatePresence>
            </Motion.div>
            <Motion.p
              className="hero-copy"
              variants={{
                hidden: { y: 14 },
                show: { y: 0, transition: { duration: 0.55 } },
              }}
            >
              I’m an aspiring AI and full-stack developer who enjoys turning
              ideas into intelligent, scalable, and user-friendly applications.
              My work brings together Python, artificial intelligence, and
              modern web development.
            </Motion.p>
            <Motion.div
              className="hero-actions"
              variants={{
                hidden: { y: 14 },
                show: { y: 0, transition: { duration: 0.55 } },
              }}
            >
              <Link className="button button-primary" to="/projects">
                Explore projects <ArrowRight size={17} />
              </Link>
              <Link className="button button-secondary" to="/contact">
                Contact me <ArrowDownRight size={17} />
              </Link>
            </Motion.div>
            <Motion.div
              className="social-row"
              variants={{
                hidden: { y: 8 },
                show: { y: 0, transition: { duration: 0.5 } },
              }}
            >
              <a
                className="social-link"
                href="https://github.com/ragul1229"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={16} /> GitHub
              </a>
              <span className="social-divider" aria-hidden="true" />
              <a
                className="social-link"
                href="https://www.linkedin.com/in/ragul29/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BriefcaseBusiness size={16} /> LinkedIn
              </a>
              <span className="social-divider" aria-hidden="true" />
              <a
                className="social-link"
                href="https://leetcode.com/u/ragulintech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={16} /> LeetCode
              </a>
              <a
                className="social-link"
                href="https://www.instagram.com/rxgul/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AtSign size={16} />
              </a>
            </Motion.div>
          </Motion.div>

          <Reveal className="hero-visual">
            <div className="orbit-ring" aria-hidden="true" />
            <Motion.div
              className="hero-image-frame"
              initial={reduceMotion ? false : { scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: reduceMotion ? 0 : 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img src={ragulImg} alt="Ragul J" fetchPriority="high" />
            </Motion.div>
            <Motion.div
              className="floating-note"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="floating-note-icon">
                <Sparkles size={17} />
              </span>
              <span>
                <strong>Curious by design</strong>
                <small>AI · full-stack · reliability</small>
              </span>
            </Motion.div>
          </Reveal>
        </section>

        <section className="section-block" aria-labelledby="focus-heading">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">01 / What I’m about</p>
              <h2 id="focus-heading">
                Thoughtful software,{" "}
                <span className="gradient-text">from UI to systems.</span>
              </h2>
            </div>
            <p>
              I enjoy working across the stack—from responsive interfaces to
              backend services, test reliability, and practical AI features.
            </p>
          </Reveal>

          <div className="bento-grid">
            <Reveal className="panel bento-card wide">
              <span className="card-index">01 — BUILD</span>
              <h3>Full-stack foundations</h3>
              <p>
                Building web applications with React, Node.js, Express, and
                Spring Boot, connecting clear interfaces with dependable APIs.
              </p>
            </Reveal>
            <Reveal className="panel bento-card narrow" delay={0.08}>
              <span className="card-index">02 — EXPLORE</span>
              <h3>Applied AI</h3>
              <p>
                Exploring LLM integration, data analysis, and AI-assisted
                workflows through hands-on projects.
              </p>
            </Reveal>
            <Reveal className="panel bento-card third">
              <span className="card-index">03 — IMPROVE</span>
              <h3>Software reliability</h3>
              <p>
                Interested in automated testing, debugging, and tools that help
                teams understand unstable behavior.
              </p>
            </Reveal>
            <Reveal className="panel bento-card third" delay={0.08}>
              <span className="card-index">04 — LEARN</span>
              <h3>Always curious</h3>
              <p>
                Studying Artificial Intelligence and Data Science while building
                practical software and expanding my engineering range.
              </p>
            </Reveal>
            <Reveal className="panel bento-card third" delay={0.16}>
              <span className="card-index">05 — NEXT</span>
              <h3>See what I’ve built</h3>
              <p>
                Browse my project work across AI, full-stack apps, and
                automation.
              </p>
              <Link
                className="social-link"
                to="/projects"
                style={{ marginTop: "1rem" }}
              >
                View projects <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>
        </section>

        <Reveal className="cta-panel">
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>Have an interesting problem to solve?</h2>
          </div>
          <Link className="button button-primary" to="/contact">
            Start a conversation <ArrowRight size={17} />
          </Link>
        </Reveal>
      </main>
      <footer className="site-footer">
        <span>RAGUL J · DEVELOPER PORTFOLIO</span>
        <span>Built with curiosity and care.</span>
      </footer>
    </>
  );
};

export default Home;
