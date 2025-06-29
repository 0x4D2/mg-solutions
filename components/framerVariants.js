// Framer Motion Animations zentral für alle Seiten
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export const hoverEffect = {
  scale: 1.03,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};
