import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = ["Home", "About", "Projects", "Services", "Contact"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-transparent z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">ReedTheDev</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover:text-indigo-400 transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 right-6 bg-gray-900 bg-opacity-95 rounded-lg flex flex-col gap-4 p-4 md:hidden text-white"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};
