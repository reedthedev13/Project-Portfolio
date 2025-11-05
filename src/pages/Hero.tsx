import { motion } from "framer-motion";
import { Button } from "../components/Button";
import profilePic from "../assets/FreelancePFP-modified.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex flex-col gap-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-indigo-400">Reed</span>
          <br />A Full-Stack Developer
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          I design and develop modern, full-stack web applications and APIs with
          a focus on performance, scalability, and maintainable code, using
          React, TypeScript, JavaScript, Node.js, Go, and Python.
        </p>

        <div className="flex gap-4 mt-4">
          <Button
            text="See My Work"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <Button
            text="Hire Me"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
            onClick={() => (window.location.href = "/hire")}
          />
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
      >
        <img
          src={profilePic}
          alt="Reed Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-500 shadow-xl object-cover"
        />
      </motion.div>
    </section>
  );
};
