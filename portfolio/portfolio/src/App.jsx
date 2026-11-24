import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/index";
import About from "./components/about";
import Projects from "./components/projects";
import Service from "./components/service";
import Contact from "./components/contact";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <Link className="logo" to="/">
          Portfolio
        </Link>
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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
