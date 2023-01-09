export const container = {
    hidden: {opacity:1},
    show: {
        opacity:1,
        transition: {
            delayChildren: 1.5,
            staggerChildren: 0.2,
            duration:2, 
        }
    }
}

export const item = {
    hidden: {x:"2000%" , opacity: 0},
    show: {x: "0%" , opacity:1,     transition: {duration:1.2, bounce: 0.2,  type:"spring"}}
}