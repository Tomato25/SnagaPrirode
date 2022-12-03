import {React, useContext} from "react";
import { NavLink } from "react-router-dom";
import './NavMenu.css'
import MenuContext from "../context/MenuContext.jsx";

function NavMenu() {

  const {toggle} = useContext(MenuContext);
  const {toggler} = useContext(MenuContext);


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
      <svg onClick={() => toggler(toggle)}
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu-2"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      
    </div>
  );
}

export default NavMenu;
