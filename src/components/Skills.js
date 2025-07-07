import React, { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
      if (element) {
        const top = element.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight - 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
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
      className={` w-full transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-gray-900`}
    >
      <div className="max-w-6xl mx-auto px-4 py-8 rounded-md">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-md border border-gray-700 py-3 text-gray-300 font-semibold 
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-indigo-400 cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
