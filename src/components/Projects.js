import React from "react";
import ProjectCard from "../components/ProjectCard";
import NoteTaking3 from "../assets/NoteTakeSS3.jpg";
import ToDoList3 from "../assets/ToDoSS3.jpg";
import StockWatch3 from "../assets/StockWatchSS3.jpg";
import JobAppPic3 from "../assets/JobAppSS3.jpg";
import MealPlanPic from "../assets/MealPlanSS3.jpg";
import FitnessTracker from "../assets/FitnessTrackSS3.jpg";
import WeatherApp3 from "../assets/WeatherAppSS3.jpg";
import GolfScore3 from "../assets/GolfScoreSS3.jpg";
import FinanceTracker3 from "../assets/FinanceTrackerSS3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Fitness Tracker",
      description:
        "Track workouts by type, date, and reps. Includes analytics and charts - (App may load slowly due to backend hosting service)",
      technologies: ["React", "Python", "TailwindCSS", "REST API"],
      image: FitnessTracker,
      githubLink: "https://github.com/reedthedev13/fitess-tracker",
      liveDemo: "https://fitess-tracker.vercel.app/",
    },
    {
      id: 2,
      title: "Personal Finance Dashboard",
      description:
        "Includes: Expense tracking, monthly budget visualization, and CSV import - (App may load slowly due to backend hosting service)",
      technologies: ["React", "Chart.js", "TailWindCSS", "GO"],
      image: FinanceTracker3,
      githubLink: "https://github.com/reedthedev13/Finance-Dashboard-frontend",
      liveDemo: "https://finance-dashboard-frontend-eight.vercel.app/",
    },
    {
      id: 3,
      title: "To-Do List",
      description:
        "Organize tasks into categories and persist data - (App may load slowly due to backend hosting service)",
      technologies: ["ReactJS", "TailWindCSS", "GO", "Gin"],
      image: ToDoList3,
      githubLink: "https://github.com/reedthedev13/To-do-list-",
      liveDemo: "https://to-do-list-tau-taupe-69.vercel.app/",
    },
    {
      id: 4,
      title: "Recipe & Meal Planner",
      description:
        "Users can browse, add, and save recipes. Generate weekly meal plans. & view nutritional info",
      technologies: ["React", "Typescript", "TailwindCSS", "GO"],
      image: MealPlanPic,
      githubLink: "https://github.com/reedthedev13/Meal-Planner-App",
      liveDemo: "https://meal-planner-app-sepia.vercel.app/",
    },
    {
      id: 5,
      title: "Note-Taking Web App",
      description: "Allows users to create and store notes.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      image: NoteTaking3,
      githubLink: "https://github.com/reedthedev13/note-take-app-fix",
      liveDemo: "https://note-take-app-fix.vercel.app/",
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description:
        "Fully functional 14-day weather forecast for St. Louis, Missouri.",
      technologies: ["React", "JavaScript", "TailwindCSS", "API integration"],
      image: WeatherApp3,
      githubLink: "https://github.com/reedthedev13/14-day-weather",
      liveDemo: "https://14-day-weather.vercel.app/",
    },
    {
      id: 7,
      title: "Golf Score Card",
      description:
        "An online tool that gives you the ability to score and store 18-hole golf rounds.",
      technologies: ["ReactJS", "TailwindCSS"],
      image: GolfScore3,
      githubLink: "https://github.com/reedthedev13/Golf-Scorecard-",
      liveDemo: "https://golf-score-card-zeta.vercel.app/",
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
