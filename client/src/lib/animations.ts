import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.6 } },
};

export const slideIn: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  exit: { x: 100, opacity: 0, transition: { duration: 0.6 } },
};

export const floatAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const glowAnimation: Variants = {
  animate: {
    boxShadow: [
      "0 0 5px rgba(0, 229, 255, 0.5), 0 0 10px rgba(0, 229, 255, 0.3)",
      "0 0 15px rgba(0, 229, 255, 0.8), 0 0 20px rgba(0, 229, 255, 0.5)",
      "0 0 5px rgba(0, 229, 255, 0.5), 0 0 10px rgba(0, 229, 255, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pulseAnimation: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
