import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/FreelancePFP-modified.png";
import { SkillBadge } from "../components/SkillBadge";

export const About = () => {
  const skills = [
    "React",
    "Javascript",
    "Typescript",
    "Node.js",
    "Go",
    "Python",
  ];

  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-20 bg-gray-800 text-white"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-1/3 flex justify-center mb-8 md:mb-0"
      >
        <img
          src={profilePic}
          alt="Reed Profile"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-indigo-500 shadow-xl object-cover"
        />
      </motion.div>

      {/* Text + Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:w-2/3 md:pl-12 flex flex-col gap-6"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 text-lg">
          I’m Reed, a passionate Full-Stack Developer specializing in building
          modern, high-performance web applications and APIs. I enjoy crafting
          sleek, responsive interfaces and clean backend architectures.
        </p>
        <p className="text-gray-300 text-lg">
          My goal is to help turn ideas into functional, polished digital
          products that users love.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mt-4">
          {skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </div>

        {/* Download CV / Hire Me Button */}
        <div className="mt-6 flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/ProjectResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-500 rounded-lg font-medium shadow-lg text-white hover:bg-indigo-600 transition"
          >
            Download CV
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/hire")}
            className="px-6 py-3 bg-green-500 rounded-lg font-medium shadow-lg text-white hover:bg-green-600 transition"
          >
            Hire Me
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
