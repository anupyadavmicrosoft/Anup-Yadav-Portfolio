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
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const headTextAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const headContentAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const headContainerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
