import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
          <div>
            <div className="project-links">
              <a
                href="{project.githubLink"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Code
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
