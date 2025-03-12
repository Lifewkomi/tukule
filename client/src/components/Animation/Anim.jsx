export const slideIn = {
  hidden: {
    x: -300,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.1,
      ease: [0.76, 0, 0.24, 1]
    },
  },

  exit: { x: -300, opacity: 0, transition: {
     duration: 0.4,
     type: "spring",
     ease: "easeInOut",
    } 
},
};

