import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/index";
import About from "./components/about";
import Projects from "./components/projects";
import Service from "./components/service";
import Contact from "./components/contact";

function App() {
  return (
    <>
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
