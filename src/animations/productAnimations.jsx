export const container = {
    hidden: {opacity:1,
    },
    show: {
        opacity:1,
        transition: {
            delayChildren:0.5,

            staggerChildren: 0.1,
            duration: 1
        }
        
    },

  
}

export const item = {
    hidden: {y:-100, opacity: 0},
    show: {y:0, opacity:1},

}

export const imgAnimitem = {
    hidden: {y:-1000, opacity: 0},
    show: {y:0, opacity:1,
    transition: {
        duration:1,
    }
}

}


export const logoAnim = {
    hidden: { opacity: 0},
    show: { opacity:1},
    transition: {
        duration:1,
        delay:0.5
    }
}

