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
            activeClassName="footer-nav-link-active"
          >
            Početna
          </NavLink>
          <NavLink
            to="/products"
            className="footer-nav-link"
            activeClassName="footer-nav-link-active"
          >
            Proizvodi
          </NavLink>
          <NavLink
            to="/about"
            className="footer-nav-link"
            activeClassName="footer-nav-link-active"
          >
            O nama
          </NavLink>
          <NavLink
            to="/gallery"
            className="footer-nav-link"
            activeClassName="footer-nav-link-active"
          >
            Galerija
          </NavLink>
          <NavLink
            to="/contact"
            className="footer-nav-link"
            activeClassName="footer-nav-link-active"
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
