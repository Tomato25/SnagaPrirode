import Home from "./Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Product from "./Product";
import React from "react";
import NavBar from "../components/NavBar";
import "./Pages.css";
import Footer from "../components/Footer";
import { MenuProvider } from "../context/MenuContext";
import { ScreenSizeProvider } from "../context/ScreenSizeContext";
import { AnimatePresence } from "framer-motion";
import { PageProvider } from "../context/PageContext";
import { Helmet } from "react-helmet-async";

function Pages() {

  const location = useLocation();

  return (
    <div className="wrap" >
      <Helmet>
      <title>OPG Snaga Prirode</title>
      <meta name="description" content="OPG snaga prirode" />
      <meta property="og:title" content="OPG Snaga prirode" />
<meta property="og:image" content="snaga_prirode\public\favicon.ico"/>
<meta property="description" content="Naša vizija je suživot u skladu sa prirodom. Djelujemo prema načelima
          permakulture i biodinamike. Cilj nam je stvoriti neovisno i održivo
          gospodarstvo, te uvjete i sredstva za ugodan život."/>
<meta property="og:url" content="https://www.snagaprrode.com.hr/"/>
      <meta name="keywords" content="farma, opg, snaga prirode, domaće, voće, melemi, sokovi, sadnice, plodovi" />
      </Helmet>
        <ScreenSizeProvider>
          <MenuProvider>
            <PageProvider>
          <NavBar />
          <AnimatePresence mode="wait">
              <Routes  location={location}  key={location.pathname}>
                <Route   path="/" exact element={<Home />} />
                <Route  path="/products" element={<Products />} />
                <Route  path="/products/product" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route  path="/gallery" element={<Gallery />} />
              </Routes>
              </AnimatePresence>
              </PageProvider>
          </MenuProvider>


        </ScreenSizeProvider>
        <Footer />
    </div>

  );
}

export default Pages;
