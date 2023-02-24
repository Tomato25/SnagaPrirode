import React from "react";
import "./Footer.css";
import { NavLink, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  console.log(location.pathname)
  return (
    <div className="footerWrap">
      {location.pathname !== "/" && (
      <div className="footerCon">
        <div className="subtitle">
          <p>"Život u skladu s prirodom"</p>
        </div>

        <div className="footerLinks">
          <NavLink
            to="/"
            className="footer-nav-link"
          >
            Početna
          </NavLink>
          <NavLink
            to="/about"
            className="footer-nav-link"
          >
            O nama
          </NavLink>
          <NavLink
            to="/products"
            className="footer-nav-link"
          >
            Proizvodi
          </NavLink>
          <NavLink
            to="/gallery"
            className="footer-nav-link"
          >
            Galerija
          </NavLink>
          <NavLink
            to="/contact"
            className="footer-nav-link"
          >
            Kontakt
          </NavLink>
        </div>
      </div>
      )}
    </div>
  );
}

export default Footer;
