import { ProjectCard } from "../components/ProjectCard";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A sleek e-commerce app built with React and TailwindCSS.",
      image: project1,
      demo: "#",
      github: "#",
    },
    {
      title: "Project Two",
      description: "A fast API backend built with Go and PostgreSQL.",
      image: project2,
      demo: "#",
      github: "#",
    },
    {
      title: "Project Three",
      description: "A real-time chat application using Socket.io and Node.js.",
      image: project3,
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-24 py-20 bg-gray-900 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </section>
  );
};
