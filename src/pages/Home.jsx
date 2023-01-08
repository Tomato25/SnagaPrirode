import React from "react";
import "./Home.css";
import MainTitle from "../components/MainTitle";
import NavBar from "../components/NavBar";
import Logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper">
      <div className="middleTitle">
        <MainTitle />
      </div>
      <div className="imgCon">
        <img src={require("../images/background.jpg")} className="bgimages" />
        <img src={Logo} className="homeLogo" />
      </div>
      <div className="homeSubtitle">
        <svg
          width="400"
          height="2"
          viewBox="0 0 400 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H400" stroke="black" />
        </svg>
        <h2 className="textSubtitle">Život u skladu s prirodom</h2>
        <svg
          width="400"
          height="2"
          viewBox="0 0 400 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H400" stroke="black" />
        </svg>

      </div>
      <div className="home-nav-links">
        <NavLink
          to="/products"
          className="home-nav-link"
          activeClassName="nav-link-active"
        >
          <p>Proizvodi</p>
        </NavLink>
        <NavLink
          to="/about"
          className="home-nav-link"
          activeClassName="nav-link-active"
        >
          <p>O nama</p>
        </NavLink>
        <NavLink
          to="/gallery"
          className="home-nav-link"
          activeClassName="nav-link-active"
        >
          <p>Galerija</p>
        </NavLink>
        <NavLink
          to="/contact"
          className="home-nav-link"
          activeClassName="nav-link-active"
        >
          <p>Kontakt</p>
        </NavLink>
      </div>
    </div>
  );
}
export default Home;
