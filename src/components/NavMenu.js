import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./NavMenu.css";

function NavMenu() {
  return (
    <div className="nav-links">
      <NavLink to="/" className="nav-link" activeClassName="nav-link-active">
        <motion.p initial={{y:-20}} animate={{y:1}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          Pocetna
        </motion.p>
      </NavLink>
      <NavLink
        to="/products"
        className="nav-link"
        activeClassName="nav-link-active"
      >
        <p>Proizvodi</p>
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
        activeClassName="nav-link-active"
      >
        <p>O nama</p>
      </NavLink>
      <NavLink
        to="/gallery"
        className="nav-link"
        activeClassName="nav-link-active"
      >
        <p>Galerija</p>
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-link"
        activeClassName="nav-link-active"
      >
        <p>Kontakt</p>
      </NavLink>
    </div>
  );
}

export default NavMenu;
