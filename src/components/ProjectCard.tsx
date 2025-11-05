import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
}

export const ProjectCard = ({
  title,
  description,
  image,
  github,
  demo,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer relative"
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 ease-in-out"
      />

      {/* Project Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{description}</p>
        {/* Mobile buttons */}
        {(github || demo) && (
          <div className="mt-4 flex gap-4 md:hidden">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-indigo-500 rounded-lg text-white font-medium text-center hover:bg-indigo-600 transition"
              >
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white font-medium text-center hover:bg-gray-600 transition"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>

      {/* Overlay Links for desktop */}
      {(github || demo) && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-black bg-opacity-40  items-center justify-center gap-4 hidden md:flex"
        >
          {demo && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-500 rounded-lg text-white font-medium hover:bg-indigo-600 transition"
            >
              Live Demo
            </motion.a>
          )}
          {github && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-600 transition"
            >
              GitHub
            </motion.a>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};
