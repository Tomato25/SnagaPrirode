import { React } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  container,
  item,
} from "../animations/NavBarAnimation";

import "./NavMenu.css";

function NavMenu() {
  const Links = [
    { name: "Pocetna", to: "/", state: "" },

    { name: "O nama", to: "/about", state: "" },

    { name: "Proizvodi", to: "/products", state: "" },

    { name: "Galerija", to: "/gallery", state: "" },

    { name: "Kontakt", to: "/contact", state: "" },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="nav-links"
      style={{ overflow: "hidden" }}
    >
      <AnimatePresence mode="wait"> 
      {Links.map((link, index) => {
        return (
          
            <motion.div  
            key={index}
           
              className="linkCon"
              variants={item}
              exit={{ y: -100, opacity: 0}}
            >
              <NavLink
                to={link.to}
                className="nav-link"
                activeClassName="nav-link-active"
              >
                <motion.p>{link.name}</motion.p>
              </NavLink>
            </motion.div>
          
        );
      })}
      </AnimatePresence>
    </motion.div>
  );
}

export default NavMenu;
