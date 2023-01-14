export const container = {
    hidden: {opacity:1,
    },
    show: {
        opacity:1,
        transition: {
            staggerChildren: 0.1,
        }
    },

  
}

export const item = {
    hidden: {y:-100, opacity: 0},
    show: {y:0, opacity:1},

}

export const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        delay: 0,
        duration: 1,
      },
    },
  };

  
export const title = {
    hidden: {x:-100, opacity: 0},
    show: {x:0, opacity:1},

}

export const menu = {
    hidden: {x:100, opacity: 0},
    show: {x:0, opacity:1},

}