import {React, useContext} from "react";
import { NavLink } from "react-router-dom";
import './NavMenu.css'
import MenuContext from "../context/MenuContext.jsx";

function NavMenu() {

  return (
    <div className="nav-links">
      <NavLink to="/" className="nav-link" activeClassName="nav-link-active">
        <p>Pocetna</p>
      </NavLink>
      <NavLink to="/products" className="nav-link" activeClassName="nav-link-active">
        <p>Proizvodi</p>
      </NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="nav-link-active">
        <p>O nama</p>
      </NavLink>
      <NavLink to="/gallery" className="nav-link" activeClassName="nav-link-active">
        <p>Galerija</p>
      </NavLink>
      <NavLink to="/contact" className="nav-link" activeClassName="nav-link-active">
        <p>Kontakt</p>
      </NavLink>
    </div>
  );
}

export default NavMenu;
