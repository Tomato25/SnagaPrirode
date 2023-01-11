import React from "react";
import "./Home.css";
import Logo from "../images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  container, item,
  sentence,
  letter,
  icon,
  icon2,
  logo,
  imageanime,
  linkanime,
  letters
} from "../animations/homeAnimations";

function Home() {
  const title = "Snaga prirode";
  const subtitle = "Život u skladu s prirodom";

  const Links = [
    {name: "O nama",
    to: "/about",
    state:""},

    {name: "Proizvodi",
    to: "/products",
    state:""},

    {name: "Galerija",
    to: "/gallery",
    state:""},

    {name: "Kontakt",
    to: "/contact",
    state:""},
];

  return (
    <motion.div           
    className="wrapper" >
      <div className="middleTitle">
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          exit={{ x: -4300, opacity: 0, transition:{ duration:0.5 }}}
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
          exit={{ x: -4300, opacity: 0, transition:{ duration:0.5 }}}

          src={require("../images/background.jpg")}
          className="bgimages"
        />
        <motion.img
          variants={logo}
          initial="hidden"
          animate="visible"
          exit={{opacity:0 }}

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
        {Links.map((link, index) => {
          return (
            <motion.div style={{ overflow: "hidden" }} variants={item}>
            <NavLink
              key={index}
              to={link.to}
              className="home-nav-link"
              activeClassName="nav-link-active"
            ><motion.p
            variants={linkanime}
            initial="hidden"
            animate="visible"
          >{link.name.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letters}>
                  {char}
                </motion.span>
              );
            })}</motion.p>
            </NavLink>
          </motion.div>
          )
        })}
        
      </motion.div>
    </motion.div>
  );
}
export default Home;
