import React, { useState, useEffect } from "react";
import Styles from "../styles/styles.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
      if (element) {
        const top = element.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "GO" },
    { name: "Python" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "TailwindCSS" },
    { name: "Node.js" },
  ];

  return (
    <section
      id="skills"
      className={`skills-section ${isVisible ? "visible" : ""}`}
    >
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ "--skill-color": skill.color }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-dots">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`dot ${
                    i < Math.floor(index / 2) + 3 ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
