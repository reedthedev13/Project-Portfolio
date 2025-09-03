import React from "react";
import ProjectCard from "../components/ProjectCard";
import NoteTaking3 from "../assets/NoteTakeSS3.jpg";
import ToDoList3 from "../assets/ToDoSS3.jpg";
import StockWatch3 from "../assets/StockWatchSS3.jpg";
import JobAppPic3 from "../assets/JobAppSS3.jpg";
import Golfcard from "../assets/GolfScoreSS3.jpg";
import FitnessTracker from "../assets/FitnessTrackSS3.jpg";
import WeatherApp3 from "../assets/WeatherAppSS3.jpg";
import FinanceTracker3 from "../assets/FinanceTrackerSS3.jpg";
import SAASProject from "../assets/SaaSCloneSS1.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Management SAAS",
      description:
        "Full-stack web application for managing projects, tasks, and team collaboration. - (App may load slowly due to backend hosting service)",
      technologies: [
        "React",
        "Tyepscript",
        "TailwindCSS",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
      ],
      image: SAASProject,
      githubLink:
        "https://github.com/reedthedev13/Project-Management-SaaS-Clone",
      liveDemo: "https://project-management-app-roan.vercel.app/",
    },
    {
      id: 2,
      title: "Fitness Tracker",
      description:
        "Full-stack web application to track workouts by type, date, and reps. Includes analytics and charts - (App may load slowly due to backend hosting service)",
      technologies: ["React", "Python", "TailwindCSS", "REST API"],
      image: FitnessTracker,
      githubLink: "https://github.com/reedthedev13/fitess-tracker",
      liveDemo: "https://fitess-tracker.vercel.app/",
    },
    {
      id: 3,
      title: "Personal Finance Dashboard",
      description:
        "Full-stack web app that includes: Expense tracking, monthly budget visualization, and CSV import - (App may load slowly due to backend hosting service)",
      technologies: ["React", "Chart.js", "TailWindCSS", "GO"],
      image: FinanceTracker3,
      githubLink: "https://github.com/reedthedev13/Finance-Dashboard-frontend",
      liveDemo: "https://finance-dashboard-frontend-eight.vercel.app/",
    },
    {
      id: 4,
      title: "To-Do List",
      description:
        "Full-stack web app that allows users to organize tasks into categories and persist data - (App may load slowly due to backend hosting service)",
      technologies: ["React", "JavaScript", "TailWindCSS", "GO", "Gin"],
      image: ToDoList3,
      githubLink: "https://github.com/reedthedev13/To-do-list-",
      liveDemo: "https://to-do-list-tau-taupe-69.vercel.app/",
    },
    {
      id: 5,
      title: "Golf Scorecard",
      description:
        "A web-app that allows users to store their golf scores and rounds based on the par!",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      image: Golfcard,
      githubLink: "https://github.com/reedthedev13/Meal-Planner-App",
      liveDemo: "https://meal-planner-app-sepia.vercel.app/",
    },
    {
      id: 6,
      title: "Note-Taking Web App",
      description: "Allows users to create and store notes.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      image: NoteTaking3,
      githubLink: "https://github.com/reedthedev13/note-take-app-fix",
      liveDemo: "https://note-take-app-fix.vercel.app/",
    },
    {
      id: 7,
      title: "Weather Forecast App",
      description:
        "Fully functional 14-day weather forecast for St. Louis, Missouri.",
      technologies: ["React", "JavaScript", "TailwindCSS", "API integration"],
      image: WeatherApp3,
      githubLink: "https://github.com/reedthedev13/14-day-weather",
      liveDemo: "https://14-day-weather.vercel.app/",
    },
    {
      id: 8,
      title: "Job Application Tracker",
      description:
        "Add & update job applications with status (applied, interviewing, offer, rejected).",
      technologies: ["TypeScript", "React", "TailWindCSS", "Firebase"],
      image: JobAppPic3,
      githubLink: "https://github.com/reedthedev13/Job-Application-Tracker2",
      liveDemo: "https://job-application-tracker2.vercel.app/",
    },
    {
      id: 9,
      title: "Stock Watchlist App",
      description:
        "Search and create a watchlist of stocks. View and 24hr change.",
      technologies: ["TypeScript", "React", "TailWindCSS", "TwelveData API"],
      image: StockWatch3,
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
            <div className="w-full max-w-[800px] mx-auto">
              <ProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
