import React from "react";
import projectstyles from "../styles/projects.css";
import ProjectCard from "../components/ProjectCard";
import GolfScoreCardImage from "../assets/GolfScoreCardSS.webp";
import FinanceTracker from "../assets/FinanceTrackerSS.png";
import FitnessTrack from "../assets/FitnessTrackSS.png";
import WeatherApp from "../assets/WeatherAppSS.png";
import NoteTaking from "../assets/NoteTakingSS.png";
import ToDoList from "../assets/TDLSS.png";

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
        "Includes: Expense tracking, monthly budget visualization, and CSV import - (Application may load slower due to backend hosting service, please allow up to 50 seconds!)",
      technologies: ["React", "Chart.js", "TailWindCSS", "GO"],
      image: FinanceTracker,
      githubLink: "https://github.com/reedthedev13/Finance-Dashboard-frontend",
      liveDemo: "https://finance-dashboard-frontend-eight.vercel.app/",
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description:
        "Fully functional 14-day weather forecast for St.Louis, Missouri",
      technologies: ["React", "JavaScript", "TailwindCSS", "API integration"],
      image: WeatherApp,
      githubLink: "https://github.com/reedthedev13/14-day-weather",
      liveDemo: "https://14-day-weather.vercel.app/",
    },
    {
      id: 4,
      title: "Note-Taking Web App",
      description: "Allows users to create and store notes",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      image: NoteTaking,
      githubLink: "https://github.com/reedthedev13/note-take-app-fix",
      liveDemo: "https://note-take-app-fix.vercel.app/",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description:
        "Track workouts by type, date, and reps. Includes analytics and charts - (Application may load slower due to backend hosting service, please allow up to 50 seconds!)",
      technologies: ["React", "Python", "TailwindCSS", "REST API"],
      image: FitnessTrack,
      githubLink: "https://github.com/reedthedev13/fitess-tracker",
      liveDemo: "https://fitess-tracker.vercel.app/",
    },
    {
      id: 6,
      title: "To-Do List",
      description:
        "Organize Tasks into categories, and save your data - (Application may load slower due to backend hosting service, please allow up to 50 seconds!)",
      technologies: ["ReactJS", "TailWindCSS", "GO", "Gin"],
      image: ToDoList,
      githubLink: "https://github.com/reedthedev13/To-do-list-",
      liveDemo: "https://to-do-list-tau-taupe-69.vercel.app/",
    },
    {
      id: 7,
      title: "E-Commerce app",
      description: "Product listing, cart logic, checkout flow",
      technologies: ["TypeScript", "TailWindCSS", "GO", "Gin"],
      image: ToDoList,
      githubLink: "N/A",
      liveDemo: "N/A",
    },
    {
      id: 8,
      title: "Job Application Tracker",
      description:
        "Add & update job applications with status (applied, interviewing, offer, rejected)",
      technologies: ["TypeScript", "React", "TailWindCSS", "Firebase"],
      image: ToDoList,
      githubLink: "N/A",
      liveDemo: "N/A",
    },
    {
      id: 9,
      title: "Stock Watchlist App",
      description:
        "Search and favorite stocks. View price, volume, and 24hr change. ",
      technologies: ["TypeScript", "React", "CoinGecko API", "Tailwind"],
      image: ToDoList,
      githubLink: "N/A",
      liveDemo: "N/A",
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
