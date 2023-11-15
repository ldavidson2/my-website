import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import WorkExperience from "./components/WorkExperience.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Navigation /> <About /></>}></Route>
          <Route path="/skills" element={<><Navigation /> <Skills /></>}></Route>
          <Route path="/workExperience" element={<><Navigation /> <WorkExperience /></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
