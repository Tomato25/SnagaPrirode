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

function Pages() {

  const location = useLocation();

  return (
    <div className="wrap" >
        <ScreenSizeProvider>
          <MenuProvider>
            <PageProvider>
          <NavBar />
          <AnimatePresence mode="wait" initial={false}>
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
