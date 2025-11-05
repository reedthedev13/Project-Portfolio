import { ProjectCard } from "../components/ProjectCard";
import { motion } from "framer-motion";
import SaaS from "../assets/SaasSS.png";
import Finance from "../assets/FinanceSS.png";
import Fitness from "../assets/FitnessSS.png";
import toDo from "../assets/ToDoSS.png";
import Notes from "../assets/NotesSS.png";
import Jobs from "../assets/JobSS.png";
import Weather from "../assets/WeatherSS.png";
import Stocks from "../assets/StockSS.png";
import Golf from "../assets/Golf.png";

export const Projects = () => {
  const projects = [
    {
      title: "Project Management SaaS Clone",
      description: "A sleek e-commerce app built with React and TailwindCSS.",
      image: SaaS,
      demo: "#",
      github: "#",
    },
    {
      title: "Full-Stack Finance Tracker",
      description: "A fast API backend built with Go and PostgreSQL.",
      image: Finance,
      demo: "#",
      github: "#",
    },
    {
      title: "Full-Stack Fitness Tracker",
      description: "A real-time chat application using Socket.io and Node.js.",
      image: Fitness,
      demo: "#",
      github: "#",
    },
    {
      title: "Full-Stack To-Do List",
      description: "A real-time chat application using Socket.io and Node.js.",
      image: toDo,
      demo: "#",
      github: "#",
    },
    {
      title: "Digital Notebook",
      description: "A real-time chat application using Socket.io and Node.js.",
      image: Notes,
      demo: "#",
      github: "#",
    },
    {
      title: "Job Application Tracker",
      description: "A real-time chat application using Socket.io and Node.js.",
      image: Jobs,
      demo: "#",
      github: "#",
    },
    {
      title: "Weather Forecast",
      description: "A real-time chat application using Socket.io and Node.js.",
      image: Weather,
      demo: "#",
      github: "#",
    },
    {
      title: "Stock Watchlist",
      description: "A real-time chat application using Socket.io and Node.js.",
      image: Stocks,
      demo: "#",
      github: "#",
    },
    {
      title: "Golf Scorecard",
      description: "A real-time chat application using Socket.io and Node.js.",
      image: Golf,
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
