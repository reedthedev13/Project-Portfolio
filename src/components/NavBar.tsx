import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
  { name: "Hire Me", id: "hire" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (id === "hire") {
      navigate("/hire");
    } else if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Give time for navigation to home, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full bg-transparent z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">Reed Lathrop</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleNavClick(link.id)}
              className="hover:text-indigo-400 transition"
            >
              {link.name}
            </button>
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
            <li key={link.id}>
              <button onClick={() => handleNavClick(link.id)}>
                {link.name}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};
