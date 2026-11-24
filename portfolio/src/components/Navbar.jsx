import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Download, Menu, Moon, Sun, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/about#skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/service", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const resumeHref = `${import.meta.env.BASE_URL}Ragul_UIUX_Resume.pdf`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [theme, setTheme] = useState(() => (
    window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark"
  ));
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    const updateScroll = () => {
      setIsScrolled(window.scrollY > 12);
      setShowTop(window.scrollY > 500);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <ScrollProgress />
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <nav className="nav-inner" aria-label="Main navigation">
          <NavLink className="brand" to="/" onClick={closeMenu} aria-label="Ragul, home">
            <span className="brand-mark">RJ</span>
            <span>ragul<span className="gradient-text">.</span></span>
          </NavLink>

          <AnimatePresence initial={false}>
            {(isOpen || !isMobile) && (
              <Motion.ul
                className="nav-links"
                id="primary-navigation"
                initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {links.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      onClick={closeMenu}
                      className={({ isActive }) => {
                        const [path, section] = to.split("#");
                        const isSectionActive = section
                          ? location.pathname === path && location.hash === `#${section}`
                          : isActive && !(
                            path === "/about" &&
                            ["#skills", "#experience"].includes(location.hash)
                          );
                        return `nav-link${isSectionActive ? " active" : ""}`;
                      }}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </Motion.ul>
            )}
          </AnimatePresence>

          <div className="nav-actions">
            <button
              className="icon-button"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="button button-secondary button-small nav-resume" href={resumeHref} download="Ragul_UIUX_Resume.pdf">
              <Download size={15} />
              Resume
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {showTop && (
          <Motion.button
            className="back-to-top"
            type="button"
            aria-label="Back to top"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
          >
            <ArrowUp size={18} />
          </Motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
