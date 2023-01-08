import React from 'react'
import { NavLink } from "react-router-dom";
import './MobileNavMenu.css'

function MobileNavMenu() {
  return (
    <div className="mobile-nav-links">
    <NavLink to="/" className="mobile-nav-link" activeClassName="nav-link-active">
      <p>Pocetna</p>
    </NavLink>
    <NavLink to="/products" className="mobile-nav-link" activeClassName="nav-link-active">
      <p>Proizvodi</p>
    </NavLink>
    <NavLink to="/about" className="mobile-nav-link" activeClassName="nav-link-active">
      <p>O nama</p>
    </NavLink>
    <NavLink to="/gallery" className="mobile-nav-link" activeClassName="nav-link-active">
      <p>Galerija</p>
    </NavLink>
    <NavLink to="/contact" className="mobile-nav-link" activeClassName="nav-link-active">
      <p>Kontakt</p>
    </NavLink>
  </div>
  )
}

export default MobileNavMenu