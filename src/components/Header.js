import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold">Reed Lathrop</h1>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <a
            href="#projects"
            className="text-sm hover:text-teal-400 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm hover:text-teal-400 transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-teal-400 transition-colors duration-200"
          >
            Contact
          </a>

          {/* Social Links */}
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
              href="https://www.linkedin.com/in/reed-lathrop-3370b4359/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
