import './css/style.css';
import React from "react";
import "./css/responsive.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import PageDetails from "./pages/PageDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./components/AboutMe/Education";
import PersonalInfo from "./components/AboutMe/PersonalInfo";
import ProjectExperience from './components/AboutMe/ProjectExperience';

export const FormContext = React.createContext();


function App() {
  return (
    <div className="container wrapper">
      <Router>
        <Sidebar className="sidebar" />

        <main className="content">
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projectexperience" element={<ProjectExperience />} />
            <Route path="/personalinfo" element={<PersonalInfo />} />
            <Route path="/" element={<PageDetails />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
