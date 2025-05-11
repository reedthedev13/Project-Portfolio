import React from "react";
import Styles from "../styles/styles.css";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Golf ScoreCard",
      description:
        "A online tool that gives you the ability to score and store 18 hole golf rounds.",
      technologies: ["React", "TailwindCSS", "Go"],
      image: "n/a",
      githubLink: "n/a",
      liveDemo: "n/a",
    },
    {
      id: 2,
      title: "Weather Forcast App",
      description:
        "A fully functional 14-day weather forecast app for St.Louis, Missouri",
      technologies: [
        "React",
        "TailWindCSS",
        "Public Weather API integration with GO",
      ],
      image: "n/a",
      githubLink: "n/a",
      liveDemo: "n/a",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
