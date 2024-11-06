// Optimized transition for faster animations
export const transition = { type: "spring", duration: 0.4, stiffness: 60, damping: 12 };

const getDirectionValues = (direction) => {
  switch (direction) {
    case "left":
      return { x: -80, y: 0 };
    case "right":
      return { x: 80, y: 0 };
    case "up":
      return { x: 0, y: 80 };
    case "down":
      return { x: 0, y: -80 };
    default:
      return { x: 0, y: 0 };
  }
};

export const slideAnimation = (direction) => {
  const { x, y } = getDirectionValues(direction);

  return {
    initial: {
      x,
      y,
      opacity: 0,
      transition: { ...transition, delay: 0.1 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition,
    },
    exit: {
      x,
      y,
      opacity: 0,
      transition,
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.1 },
  },
  animate: {
    opacity: 1,
    transition,
  },
  exit: {
    opacity: 0,
    transition,
  },
};

export const headTextAnimation = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { ...transition, duration: 0.3 } },
};

export const headContentAnimation = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { ...transition, duration: 0.4, delay: 0.1 } },
};

export const headContainerAnimation = {
  initial: { x: -60, opacity: 0, transition: { ...transition, delay: 0.1 } },
  animate: { x: 0, opacity: 1, transition },
  exit: { x: -60, opacity: 0, transition },
};
