import { React, useState } from "react";
import "./Accordion.css";
import { AnimatePresence, motion } from "framer-motion";
import { container, item } from "../../animations/accordionAnimations";

function Accordion(props) {
  const [accordionToggle, setAccordionToggle] = useState(false);

  const toggler = () => {
    setAccordionToggle(!accordionToggle);
    console.log(accordionToggle);
  };

  return (
    <div className="benefitsAccordion">
      <div className="benefitsAccordionTitle">
        <motion.p onClick={toggler} whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.9 }}>Pomaže kod</motion.p>
        <motion.svg
          onClick={toggler}
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-down"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </div>
      {accordionToggle && (
        <AnimatePresence mode="wait">
          <motion.ul
            className="benefitsAccordionContent"
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ y: -100, opacity: 0 }}
          >
            {props.benefits.map((benefits, index) => {
              return <motion.li key={index} variants={item}>{benefits.benefit}</motion.li>;
            })}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  );
}

export default Accordion;
