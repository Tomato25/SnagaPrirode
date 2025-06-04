import {React,useContext,useEffect} from "react";
import "./Contact.css";
import Logo from "../images/Logo.png";
import {motion} from "framer-motion"
import PageContext from "../../context/PageContext";
import { Helmet } from "react-helmet-async";

import {
  textAnimCon,
  imgAnimitem,
  logoAnim
} from "../../animations/aboutAnimations";


function Contact() {


  const { currentPage } = useContext(PageContext);
  const { setCurrentPage } = useContext(PageContext);
const pageName = "Kontakt";

useEffect (()=> {
    setCurrentPage(pageName);
    console.log(currentPage)
}, [])


  return (
      <div className="contactWrap">
        <Helmet>
      <title>Snaga Prirode | Kontakt</title>
      <meta name="description" content="OPG Snaga prirode" />
      
      <meta name="keywords" content="farma, opg, snaga prirode, domaće, voće, melemi, sokovi, sadnice, plodovi" />
      </Helmet>
        <div className="contactLeftCol"
        variants={textAnimCon}
        initial="hidden"
        animate="show"
        exit={{ x: -1000 }}>
          <motion.img src={require("../images/contact.jpg")} className="bgimg" 
          variants={textAnimCon}
          initial="hidden"
          animate="show"
          exit={{ x: -1000 }}/>
          <motion.img src={Logo} className="contactCenterLogo" 
                    variants={logoAnim}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity:0, delay:0.5 }}/>

        </div>
        <motion.div className="contactRightCol"
          variants={imgAnimitem}
          initial="hidden"
          animate="show"
          exit={{ x: 1000 }}>
          <div className="contactCon">
          <div className="contactIconWrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>

            <div className="contactText">Broj telefona</div>
          </div>
          <motion.div whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}><a className="contactText" href="tel:+385977556607">097-755-6607</a></motion.div>
          </div>
          <div className="contactCon">
          <div className="contactIconWrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <div className="contactText">E-mail</div>
            
          </div><motion.div whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}><a className="contactText" href="mailto:snagaprirode@mail.com">snagaprirode@mail.com</a></motion.div></div>
          <div className="contactCon">
          <div className="contactIconWrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-telegram"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
            <div className="contactText">Telegram</div>
          </div><motion.div whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}><a className="contactText" href="https://t.me/snagaprirode" target="_blank"  rel="noreferrer">t.me/snagaprirode</a></motion.div></div>
          <div className="contactCon">
          <div className="contactIconWrap">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="4" />
  <circle cx="12" cy="12" r="3" />
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
</svg>
            <div className="contactText">Instagram</div>
          </div><motion.div whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}><a className="contactText" href="https://www.instagram.com/opg_snaga_prirode/" target="_blank"  rel="noreferrer">opg_snaga_prirode</a></motion.div></div>
        </motion.div>
      </div>
  );
}

export default Contact;

