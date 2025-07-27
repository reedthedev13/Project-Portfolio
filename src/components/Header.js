import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4 cursor-pointer transition-colors duration-300 hover:text-teal-400">
          <img
            src="/pfprtl.png"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold tracking-tight">
              Reed Lathrop
            </h1>
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6">
          <a
            href="#skills"
            className="text-sm hover:text-teal-400 transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm hover:text-teal-400 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-teal-400 transition-colors duration-200"
          >
            Contact
          </a>
          <div className="flex space-x-4 ml-4">
            <a
              href="https://github.com/reedthedev13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/reed-lathrop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden bg-gray-800 px-4 py-4 overflow-hidden"
          >
            <nav className="space-y-4">
              <a
                href="#skills"
                className="block text-white hover:text-teal-400"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-white hover:text-teal-400"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-teal-400"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://github.com/reedthedev13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/reed-lathrop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
