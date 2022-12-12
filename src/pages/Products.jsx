import React from "react";
import "./Products.css";
import Logo from "../images/Logo.png";
import styled from "styled-components";
import Bg2 from "../images/products.jpg";
import { NavLink } from "react-router-dom";
import Product from "../components/Product";

function Products() {
  return (
    <div>
      <Wrap>
        <div className="description">
          <div className="aboutText">
            Svi nasadi su smješteni na otprilike 350 metara nadmorske visine.
            Okruženi su šumom, na području bogatom vodom, u potpuno čistoj
            prirodi. U blizini voćnjaka nema zagađivača, niti velikih
            poljoprivrednih gospodarstava, pa stoga naše voće raste u odličnim
            uvjetima, slobodnim od pesticida, kemikalija i raznih onečišćenja.
          </div>
          <div className="aboutText">
            Sve voće koje uzgajamo su stare hrvatske sorte cijepljene na divljim
            podlogama. One su izrazito otporne, bogate mineralima, vitaminima,
            antioksidansima i svime potrebnim za zdravlje.
          </div>
          <div className="aboutText">
            Voćke su tretirane isključivo prirodnim sredstvima za zaštitu.
            Trudimo se minimalizirati ili u potpunosti zaobići upotrebu
            kemijskih sredstava.
          </div>
          <div className="aboutText">
            Nadamo se da ćete uživati u okusima, mirisima i blagodatima koje
            pruža naše voće!{" "}
          </div>
        </div>

        <div className="gallery">
          <img src={Logo} className="centerLogo" />
          <img src={Bg2} className="bgimg"></img>
        </div>
      </Wrap>
      <Product />
    </div>
  );
}

export default Products;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: "Akaya Telivigala", cursive;
  height: auto;
`;
