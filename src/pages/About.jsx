import {React, useContext,useEffect} from "react";
import "./About.css";
import Logo from "../images/Logo.png";
import { motion } from "framer-motion";
import {
  textAnimCon,
  imgAnimitem,
  logoAnim
} from "../animations/aboutAnimations";
import PageContext from "../context/PageContext";

function About() {


  const { currentPage } = useContext(PageContext);
  const { setCurrentPage } = useContext(PageContext);
const pageName = "O nama";

useEffect (()=> {
    setCurrentPage(pageName);
    console.log(currentPage)
},[])




  return (
    <div className="aboutWrap">
      <motion.div
        className="leftCol"
        variants={textAnimCon}
        initial="hidden"
        animate="show"
        exit={{ x: -1000 }}
      >
        <div className="aboutText">
          Smješteni smo u dubokoj šumi brdovitog dijela Slavonije, na prelijepom
          dijelu Psunja, u malome selu Gornja Šumetlica. Točna koordinata je:
          45.44036003561259, 17.31754545765254.
        </div>
        <div className="aboutText" >
          Selo je lijepo i okruženo samom šumom, jako bogato vodom, divljači i
          ostalim šumskim bićima. Do prvog manjeg grada ima 15ak kilometara,
          tako da naše lijepo selo krasi potpuni mir, tišina i čistoća.
        </div>
        <div className="aboutText" >
          Naša vizija je suživot u skladu sa prirodom. Djelujemo prema načelima
          permakulture i biodinamike. Cilj nam je stvoriti neovisno i održivo
          gospodarstvo, te uvjete i sredstva za ugodan život. Vidimo život u
          prirodi, prema zakonima prirode, kao neophodu za psihičko, fizičko i
          duhovno zdravlje čovjeka, te temelj za radostan život. Svojim
          primjerom želimo motivirati sve, a naročito mlade, da se okrenu svojim
          korijenima, da se vrate prirodi i da zajedno stvorimo bolji, zdraviji
          i veseliji svijet :)
        </div>
      </motion.div>

      <div className="rightCol">
        <motion.img
          src={Logo}
          className="centerLogo"
          variants={logoAnim}
          initial="hidden"
          animate="show"
          exit={{ opacity:0, delay:0.5 }}
        />
        <motion.img
          src={require("../images/about.jpg")}
          className="bgimg"
          variants={imgAnimitem}
          initial="hidden"
          animate="show"
          exit={{ x: 1000 }}
        />
      </div>
    </div>
  );
}

export default About;
