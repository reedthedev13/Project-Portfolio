import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social Icons */}
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/reedthedev13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/reed-lathrop/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:reedlathropbiz@gmail.com"
            className="text-gray-300 hover:text-white transition"
          >
            <FaEnvelope size={24} />
          </motion.a>
        </div>

        {/* Back to Top */}
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          href="#top"
          onClick={scrollToTop}
          className="text-gray-300 hover:text-white transition flex items-center gap-1 cursor-pointer"
        >
          <FaArrowUp /> Top
        </motion.a>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {currentYear} ReedTheDev. All rights reserved.
      </div>
    </footer>
  );
};
