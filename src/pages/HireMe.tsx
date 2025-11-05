import React from "react";
import { motion } from "framer-motion";

const HireMe: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-center tracking-tight"
      >
        Hire Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl mb-12 max-w-2xl text-center text-gray-300"
      >
        I'm excited to connect about the oppurtunity! Reach out via email or
        schedule a call on my Calendly.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-6"
      >
        <a
          href="mailto:your.email@example.com"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg transition-colors font-medium text-center"
        >
          Email Me
        </a>
        <a
          href="https://calendly.com/reedlathropbiz/software-development-opportunity-call"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition-colors font-medium text-center"
        >
          Schedule a Call
        </a>
      </motion.div>
    </section>
  );
};

export default HireMe;
