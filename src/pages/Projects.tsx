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
      description:
        "A Project Management app to track projects, tasks, and deadlines with a clean, responsive UI and scalable backend API. Frontend: TypeScript, React. Backend: Node.js, REST API.",
      image: SaaS,
      demo: "https://project-management-app-roan.vercel.app/",
      github: "https://github.com/reedthedev13/Project-Management-SaaS-Clone",
    },
    {
      title: "Full-Stack Finance Tracker",
      description:
        "Track expenses, visualize monthly budgets, and import CSV transactions with a modern, responsive UI. Frontend: React, TailwindCSS. Backend: Go.",
      image: Finance,
      demo: "https://finance-dashboard-frontend-eight.vercel.app/",
      github: "https://github.com/reedthedev13/Finance-Dashboard-frontend",
    },
    {
      title: "Full-Stack Fitness Tracker",
      description:
        "Log workouts, track sets, reps, and weights with progress tracking and a responsive UI. Frontend: React, TailwindCSS. Backend: Python (Flask/FastAPI).",
      image: Fitness,
      demo: "https://fitess-tracker.vercel.app/",
      github: "https://github.com/reedthedev13/fitess-tracker",
    },
    {
      title: "Full-Stack To-Do List",
      description:
        "A clean, responsive To-Do app built with React, JavaScript, TailwindCSS, and Go (Gin). Add, edit, delete, categorize, and complete tasks with a modern UI and backend persistence for real-time updates.",
      image: toDo,
      demo: "https://to-do-list-tau-taupe-69.vercel.app/",
      github: "https://github.com/reedthedev13/To-do-list-",
    },
    {
      title: "Digital Notebook",
      description:
        "A clean, distraction-free note-taking app for creating, editing, and deleting notes. Frontend: React, JavaScript, TailwindCSS. Backend (optional): Go / Flask / Node.js. State: React hooks. Persistence: LocalStorage or API + DB (PostgreSQL/MongoDB).",
      image: Notes,
      demo: "https://note-take-app-fix.vercel.app/",
      github: "https://github.com/reedthedev13/note-take-app-fix",
    },
    {
      title: "Job Application Tracker",
      description:
        "Track and manage job applications with a clean UI, real-time updates, and status tracking. Frontend: React, TypeScript. Styling: TailwindCSS. Backend/Database: Firebase (Firestore).",
      image: Jobs,
      demo: "https://job-application-tracker2.vercel.app/",
      github: "https://github.com/reedthedev13/Job-Application-Tracker2",
    },
    {
      title: "Weather Forecast",
      description:
        "Responsive web app displaying a 14-day weather forecast for St. Louis, MO with temperature, conditions, and real-time updates. Frontend: React, TypeScript, TailwindCSS, Vite. API: Open-Meteo.",
      image: Weather,
      demo: "https://14-day-weather.vercel.app/",
      github: "https://github.com/reedthedev13/14-day-weather",
    },
    {
      title: "Stock Watchlist",
      description:
        "A sleek, minimal stock watchlist web app for searching, tracking, and monitoring stocks in real-time. Frontend: React, TypeScript, Vite. Styling: TailwindCSS. API: Twelve Data.",
      image: Stocks,
      demo: "https://stock-watchlist-alpha.vercel.app/",
      github: "https://github.com/reedthedev13/Stock-Watchlist-",
    },
    {
      title: "Golf Scorecard",
      description:
        "A simple web app to track golf scores, analyze performance, and visualize progress. Frontend: React, TailwindCSS.",
      image: Golf,
      demo: "https://golf-score-card-zeta.vercel.app/",
      github: "https://github.com/reedthedev13/Golf-Scorecard-",
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
