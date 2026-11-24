import { useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "./Navbar";
import Reveal from "./Reveal";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("https://formspree.io/f/xpwlopra", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setStatus("error");
        setFeedback("Your message could not be sent. Please email me directly instead.");
        return;
      }

      form.reset();
      setStatus("success");
      setFeedback("Thanks for reaching out. Your message has been sent.");
    } catch {
      setStatus("error");
      setFeedback("A network error prevented your message from sending. Please email me directly.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="page-content">
        <header className="page-header">
          <Reveal>
            <p className="eyebrow">Contact · Coimbatore, India</p>
            <h1 className="page-title">
              Have a challenge in mind? <span className="gradient-text">Let’s talk.</span>
            </h1>
            <p className="page-intro">
              I’m ready to collaborate on your next full-stack or AI solution.
              Send me a message, and let’s get started.
            </p>
          </Reveal>
        </header>

        <div className="contact-layout">
          <Reveal className="contact-card">
            <h2>Send me a message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" autoComplete="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Your email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea id="contact-message" name="message" rows="6" required />
              </div>
              <button className="button button-primary" type="submit" disabled={status === "sending"}>
                <Send size={16} />
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {feedback && (
                <p className={`form-feedback${status === "error" ? " is-error" : ""}`} role={status === "error" ? "alert" : "status"}>
                  {feedback}
                </p>
              )}
            </form>
          </Reveal>

          <Reveal className="contact-card" delay={0.1}>
            <p className="eyebrow">Direct contact</p>
            <h2>Find me here</h2>
            <div className="contact-links">
              <a className="contact-link" href="mailto:jsragul1229@gmail.com">
                <Mail size={18} /> jsragul1229@gmail.com <ArrowUpRight size={14} />
              </a>
              <a className="contact-link" href="tel:+918807026900">
                <Phone size={18} /> +91 8807026900
              </a>
              <div className="contact-link">
                <MapPin size={18} /> Coimbatore, India
              </div>
              <a className="contact-link" href="https://www.linkedin.com/in/ragul29" target="_blank" rel="noopener noreferrer">
                <BriefcaseBusiness size={18} /> LinkedIn <ArrowUpRight size={14} />
              </a>
              <a className="contact-link" href="https://github.com/ragul1229" target="_blank" rel="noopener noreferrer">
                <Code2 size={18} /> GitHub <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="contact-note">
              I aim to return project inquiries and collaboration requests
              within 24 hours.
            </p>
          </Reveal>
        </div>
      </main>
      <footer className="site-footer">
        <span>RAGUL J · CONTACT</span>
        <a href="mailto:jsragul1229@gmail.com">jsragul1229@gmail.com</a>
      </footer>
    </>
  );
};

export default Contact;
