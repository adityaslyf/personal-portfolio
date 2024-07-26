import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero/hero";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills"; // Assuming you combine Frontend and Backend into Skills
import Experiences from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
// import Project from  '../src/components/test/project'

function App() {
  return (
    <Router basename="/personal-portfolio">
      <div className="w-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} /> {/* Route for skills */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
        {/* <Project /> */}
      </div>
    </Router>
  );
}

export default App;
