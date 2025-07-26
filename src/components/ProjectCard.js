import React from "react";
import MotionWrapper from "../assets/MotionWrapper";

const ProjectCard = ({ project }) => {
  return (
    <MotionWrapper>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md transition hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
        {/* Image */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-[10px] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-[2px] rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto">
            <div className="flex gap-2">
              {project.githubLink &&
                project.githubLink.trim() !== "" &&
                project.githubLink !== "N/A" && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 border border-blue-500 px-2 py-1 rounded hover:bg-blue-500 hover:text-white transition"
                  >
                    View Code
                  </a>
                )}
              {project.liveDemo &&
                project.liveDemo.trim() !== "" &&
                project.liveDemo !== "N/A" && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-500 border border-green-500 px-2 py-1 rounded hover:bg-green-500 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                )}
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default ProjectCard;
