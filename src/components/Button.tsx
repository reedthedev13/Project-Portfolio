import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ text, onClick, className = "" }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition ${className}`}
  >
    {text}
  </motion.button>
);
