import React from "react";
import "./Home.css";
import Logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
import { motion} from "framer-motion";
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
import { Helmet } from "react-helmet-async";

function Home() {
  const title = "SNAGA PRIRODE";
  const subtitle = '"Život u skladu s prirodom"';

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
      <Helmet>
      <title>Snaga Prirode</title>
      <meta name="description" content="OPG Snaga prirode" />
      
      <meta name="keywords" content="farma, opg, snaga prirode, domaće, voće, melemi, sokovi, sadnice, plodovi" />
      </Helmet>
      <div className="middleTitle">
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
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
          viewport={{ once: true }}

          exit={{ x: -4300, opacity: 0, transition:{ duration:1 }}}

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
        <motion.p
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
        </motion.p>
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
            <motion.div style={{ overflow: "hidden" }} key={index} variants={item}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            >
            <NavLink
              key={index}
              to={link.to}
              className="home-nav-link"
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
