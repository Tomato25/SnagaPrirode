import Home from "./Home";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Product from "./Product"
import React from "react";
import NavBar from "../components/NavBar";
import './Pages.css';
import Footer from "../components/Footer";
import {MenuProvider} from "../context/MenuContext";



function Pages() {
  return (
      <div className="wrap">
      <BrowserRouter >
      <MenuProvider>
        <NavBar />
        <Routes >
           <Route path=""  exact element={<Home />} />
            <Route path="/products"   element={<Products />} />
            <Route path="/products/product"   element={<Product />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/about"  element={<About />} />
            <Route path="/gallery"  element={<Gallery />} />
        </Routes>
        </MenuProvider>
        <Footer />
              </BrowserRouter>
      </div>
  );
}

export default Pages;
