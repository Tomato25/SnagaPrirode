import React from "react";
import "./About.css";
import Logo from "../images/Logo.png";
import styled from "styled-components";
import Bg1 from "../images/about.jpg";

function About() {
  return (
    <div>
    <Wrap>
      <div className="leftCol">

        <div className="aboutText">
          Smješteni smo u dubokoj šumi brdovitog dijela Slavonije, na prelijepom
          dijelu Psunja, u malome selu Gornja Šumetlica. Točna koordinata je:
          45.44036003561259, 17.31754545765254.
        </div>
        <div className="aboutText">
          Selo je lijepo i okruženo samom šumom, jako bogato vodom, divljači i
          ostalim šumskim bićima. Do prvog manjeg grada ima 15ak kilometara,
          tako da naše lijepo selo krasi potpuni mir, tišina i čistoća.
        </div>
        <div className="aboutText">
          Naša vizija je suživot u skladu sa prirodom. Djelujemo prema načelima
          permakulture i biodinamike. Cilj nam je stvoriti neovisno i održivo
          gospodarstvo, te uvjete i sredstva za ugodan život. Vidimo život u
          prirodi, prema zakonima prirode, kao neophodu za psihičko, fizičko i
          duhovno zdravlje čovjeka, te temelj za radostan život. Svojim
          primjerom želimo motivirati sve, a naročito mlade, da se okrenu svojim
          korijenima, da se vrate prirodi i da zajedno stvorimo bolji, zdraviji
          i veseliji svijet :)
        </div>
        </div>


      <div className="rightCol">
        <img src={Logo} className="centerLogo" />
        <img src={Bg1} className="bgimg"></img>
      </div>
    </Wrap>

    </div>);
}

export default About;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: "Akaya Telivigala", cursive;
  height: auto;
`;
