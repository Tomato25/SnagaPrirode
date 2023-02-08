import { React,useContext,useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  container,
  item,
} from "../animations/NavBarAnimation";
import MenuContext from "../context/MenuContext.jsx";
import "./NavMenu.css";

function NavMenu() {
  const Links = [
    { name: "Početna", to: "/", state: "" },

    { name: "O nama", to: "/about", state: "" },

    { name: "Proizvodi", to: "/products", state: "" },

    { name: "Galerija", to: "/gallery", state: "" },

    { name: "Kontakt", to: "/contact", state: "" },
  ];

  const [selectedTab, setSelectedTab] = useState(Links[0]);

const {toggle} = useContext(MenuContext);
const {toggler} = useContext(MenuContext);



  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="nav-links"
      exit={{y:-200, opacity:0}}
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
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                to={link.to}
                className="btn-one"
                activeClassName="nav-link-active"
                
                onClick={() => toggler(toggle)}
              >
                <motion.p >{link.name}</motion.p>
              </NavLink>
              <div className="underline">

              </div>
            </motion.div>
          
        );
      })}
      </AnimatePresence>
    </motion.div>
  );
}

export default NavMenu;
