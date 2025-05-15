import React from "react";
import projectstyles from "../styles/projects.css";
import ProjectCard from "../components/ProjectCard";
import GolfScoreCardImage from "../assets/GolfScoreCardSS.webp";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Golf Score Card",
      description:
        "A online tool that gives you the ability to score and store 18 hole golf rounds.",
      technologies: ["ReactJS", "TailwindCSS"],
      image: GolfScoreCardImage,
      githubLink: "https://github.com/reedthedev13/Golf-Scorecard-",
      liveDemo: "https://golf-score-card-zeta.vercel.app/",
    },
    {
      id: 2,
      title: "Personal Finance Dashboard",
      description:
        "Includes: Expense tracking, monthly budget visualization, and CSV import",
      technologies: ["React", "Chart.js", "TailWindCSS", "GO"],
      image: "n/a",
      githubLink: "n/a",
      liveDemo: "n/a",
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description:
        "Fully functional 14-day weather forecast for St.Louis, Missouri",
      technologies: ["React", "JavaScript", "TailwindCSS", "API integration"],
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
