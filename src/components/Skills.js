import React, { useState, useEffect } from "react";
import MotionWrapper from "../assets/MotionWrapper";

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    "React",
    "Typescript",
    "JavaScript",
    "Go",
    "Python",
    "HTML",
    "TailWindCSS",
    "CSS",
    "Node.js",
    "Git",
    "Gin",
    "SQL",
  ];

  return (
    <section
      id="skills"
      className={`w-full transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }  from-gray-900 to-gray-800 py-16`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-tighter drop-shadow-xl">
          Skills
          <div className="mx-auto h-1 w-24 bg-teal-400 rounded"></div>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <MotionWrapper
              key={index}
              className="text-center text-gray-200 font-medium py-3 px-4 bg-gray-700/40 backdrop-blur-md border border-gray-600 rounded-xl shadow-sm cursor-pointer"
              whileHover={{ y: -10, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {skill}
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
