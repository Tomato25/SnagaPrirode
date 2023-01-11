export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.08,
      duration: 1,
    },
  },
  
};

export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const icon = {
  hidden: {
    pathLength: 0,
    rotate: 180,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    rotate: 180,

    fill: "rgba(255, 255, 255, 1)",
    transition: {
      delay: 3,
      duration: 1,
    },
  },
};

export const icon2 = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      delay: 3,
      duration: 1,
    },
  },
};

export const logo = {
  hidden: {
opacity:0

  },
  visible: {
   opacity:1,

    transition: {
      delay: 0,
      duration: 2,
      bounce: 0.2,
      type: "spring",
    },
  },
  
};

export const imageanime = {
  hidden: {
    opacity: 0,
  },
  visible: {
    delay: 2,
    opacity: 1,
    transition: {
      delay: 3,

      duration: 1,
    },
  },
};


export const linkanime = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.08,
        duration: 1,
      },
    },
  };
  
  export const letters = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  export const container = {
    hidden: {opacity:1,
    },
    show: {
        opacity:1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.2,
            duration:2, 
        }
    }
}

export const item = {
    hidden: {opacity: 1},
    show: {opacity:1}
}
  