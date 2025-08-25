import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";

const Contact = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwlopra", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (err) {
      alert("Error submitting form.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="logo">Portfolio.</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Who Am I?</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact" className="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Contact Form */}
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Toast */}
      {toastVisible && <div id="toast">Message sent successfully!</div>}
    </div>
  );
};

export default Contact;
