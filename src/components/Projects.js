import React from "react";
import ProjectCard from "../components/ProjectCard";
import GolfScoreCardImage from "../assets/GolfScoreCardSS.webp";
import FinanceTracker from "../assets/FinanceTrackerSS.png";
import FitnessTrack from "../assets/FitnessTrackSS.png";
import WeatherApp from "../assets/WeatherAppSS.png";
import NoteTaking from "../assets/NoteTakingSS.png";
import ToDoList from "../assets/TDLSS.png";
import StockWatch from "../assets/StockWatch.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Golf Score Card",
      description:
        "An online tool that gives you the ability to score and store 18-hole golf rounds.",
      technologies: ["ReactJS", "TailwindCSS"],
      image: GolfScoreCardImage,
      githubLink: "https://github.com/reedthedev13/Golf-Scorecard-",
      liveDemo: "https://golf-score-card-zeta.vercel.app/",
    },
    {
      id: 2,
      title: "Personal Finance Dashboard",
      description:
        "Includes: Expense tracking, monthly budget visualization, and CSV import - (App may load slowly due to backend hosting service)",
      technologies: ["React", "Chart.js", "TailWindCSS", "GO"],
      image: FinanceTracker,
      githubLink: "https://github.com/reedthedev13/Finance-Dashboard-frontend",
      liveDemo: "https://finance-dashboard-frontend-eight.vercel.app/",
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description:
        "Fully functional 14-day weather forecast for St. Louis, Missouri.",
      technologies: ["React", "JavaScript", "TailwindCSS", "API integration"],
      image: WeatherApp,
      githubLink: "https://github.com/reedthedev13/14-day-weather",
      liveDemo: "https://14-day-weather.vercel.app/",
    },
    {
      id: 4,
      title: "Note-Taking Web App",
      description: "Allows users to create and store notes.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      image: NoteTaking,
      githubLink: "https://github.com/reedthedev13/note-take-app-fix",
      liveDemo: "https://note-take-app-fix.vercel.app/",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description:
        "Track workouts by type, date, and reps. Includes analytics and charts - (App may load slowly due to backend hosting service)",
      technologies: ["React", "Python", "TailwindCSS", "REST API"],
      image: FitnessTrack,
      githubLink: "https://github.com/reedthedev13/fitess-tracker",
      liveDemo: "https://fitess-tracker.vercel.app/",
    },
    {
      id: 6,
      title: "To-Do List",
      description:
        "Organize tasks into categories and persist data - (App may load slowly due to backend hosting service)",
      technologies: ["ReactJS", "TailWindCSS", "GO", "Gin"],
      image: ToDoList,
      githubLink: "https://github.com/reedthedev13/To-do-list-",
      liveDemo: "https://to-do-list-tau-taupe-69.vercel.app/",
    },
    {
      id: 7,
      title: "AI-Powered Markdown Notes App",
      description:
        "Live markdown preview, Ask AI to summarize, rewrite, or turn notes into flashcards, saves notes to user account",
      technologies: ["React", "Typescript", "OpenAI API", "Firebase"],
      image: ToDoList,
      githubLink: "",
      liveDemo: "",
    },
    {
      id: 8,
      title: "Job Application Tracker",
      description:
        "Add & update job applications with status (applied, interviewing, offer, rejected).",
      technologies: ["TypeScript", "React", "TailWindCSS", "Firebase"],
      image: ToDoList,
      githubLink: "",
      liveDemo: "",
    },
    {
      id: 9,
      title: "Stock Watchlist App",
      description:
        "Search and create a watchlist of stocks. View and 24hr change.",
      technologies: ["TypeScript", "React", "TailWindCSS", "TwelveData API"],
      image: StockWatch,
      githubLink: "https://github.com/reedthedev13/Stock-Watchlist-",
      liveDemo: "https://stock-watchlist-alpha.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-tighter drop-shadow-lg">
          Featured Projects
          <div className="mx-auto h-1 w-24 bg-teal-400 rounded"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
