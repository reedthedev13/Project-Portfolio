import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
