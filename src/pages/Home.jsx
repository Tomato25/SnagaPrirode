import React from "react";
import "./Home.css";
import Logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { container, item } from "../animations/animation";
import {
  sentence,
  letter,
  icon,
  icon2,
  logo,
  imageanime
} from "../animations/titleAnimation";

function Home() {
  const title = "Snaga prirode";
  const subtitle = "Život u skladu s prirodom";

  return (
    <div className="wrapper">
      <div className="middleTitle">
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="title"
        >
          {title.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
      </div>
      <div className="imgCon">
        <motion.img
          variants={imageanime}
          initial="hidden"
          animate="visible"
          src={require("../images/background.jpg")}
          className="bgimages"
        />
        <motion.img
          variants={logo}
          initial="hidden"
          animate="visible"
          src={Logo}
          className="homeLogo"
        />
      </div>
      <div className="homeSubtitle">
        <svg
          width="400"
          height="2"
          viewBox="0 0 400 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M0 1H400"
            stroke="black"
          />
        </svg>
        <motion.h2
          className="textSubtitle"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {subtitle.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h2>
        <svg
          width="400"
          height="2"
          viewBox="0 0 400 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={icon2}
            initial="hidden"
            animate="visible"
            d="M0 1H400"
            stroke="black"
          />
        </svg>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="home-nav-links"
      >
        <motion.div style={{ overflow: "hidden" }} variants={item}>
          <NavLink
            to="/products"
            className="home-nav-link"
            activeClassName="nav-link-active"
          >
            <p>Proizvodi</p>
          </NavLink>
        </motion.div>
        <motion.div variants={item}>
          <NavLink
            to="/about"
            className="home-nav-link"
            activeClassName="nav-link-active"
          >
            <p>O nama</p>
          </NavLink>
        </motion.div>
        <motion.div variants={item}>
          <NavLink
            to="/gallery"
            className="home-nav-link"
            activeClassName="nav-link-active"
          >
            <p>Galerija</p>
          </NavLink>
        </motion.div>
        <motion.div variants={item}>
          <NavLink
            to="/contact"
            className="home-nav-link"
            activeClassName="nav-link-active"
          >
            <p>Kontakt</p>
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default Home;
