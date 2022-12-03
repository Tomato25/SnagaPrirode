import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
import Logo from "../images/LogoVector.svg"

function Nav() {
  return (
    <div className="mainNav">
      <Link to="/products">
        <h2>Proizvodi</h2>
      </Link>
      <Link to="/about">
        <h2>O nama</h2>
      </Link>
       <img src={Logo}  />
      <Link to="/gallery">
        <h2>Galerija</h2>
      </Link>
      <Link to="/contact">
        <h2>Kontakt</h2>
      </Link>

    </div>
  );
}

export default Nav;
