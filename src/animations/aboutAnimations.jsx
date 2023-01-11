export const textAnimCon = {
    hidden: {opacity:1,
    },
    show: {
        opacity:1,
        transition: {
            delayChildren:0.5,
            staggerChildren: 0.3,
            duration:1,
        }
    },

  
}

export const textAnimitem = {
    hidden: {x:-1000, opacity: 0},
    show: {x:0, opacity:1},

}


export const imgAnimitem = {
    hidden: {x:1000, opacity: 0},
    show: {x:0, opacity:1,
    transition: {
        duration:1,
        delay:0.5,
    }
}

}


export const logoAnim = {
    hidden: { opacity: 0},
    show: { opacity:1},
    transition: {
        duration:0.5,
    }
}

