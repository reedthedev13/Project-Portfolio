import { motion } from "framer-motion";

const MotionWrapper = ({
  children,
  className = "",
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: 20 },
  transition = { duration: 0.5, ease: "easeOut" },
  ...rest
}) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
