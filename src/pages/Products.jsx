import { React, useEffect, useContext } from "react";
import "./Products.css";
import Logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
import productData from "../productsData";
import { motion } from "framer-motion";
import {
  imgAnimitem,
  logoAnim,
  container,
  item,
} from "../animations/productAnimations";
import PageContext from "../context/PageContext";
import { Helmet } from "react-helmet-async";


function Products() {
  const { currentPage } = useContext(PageContext);
  const { setCurrentPage } = useContext(PageContext);
  const pageName = "Proizvodi";

  useEffect(() => {
    setCurrentPage(pageName);
  }, []);

  return (
  
    <div className="productsWrap">
        <Helmet>
      <title>Snaga Prirode | Proizvodi</title>
      <meta name="description" content="OPG Snaga prirode" />
      
      <meta name="keywords" content="farma, opg, snaga prirode, domaće, voće, melemi, sokovi, sadnice, plodovi" />
      </Helmet>
      <div className="productsDecoration">
        <motion.img
          src={require("../images/products.jpg")}
          className="bgimages"
          variants={imgAnimitem}
          initial="hidden"
          animate="show"
          exit={{ y: -1000, transition: { duration: 1 } }}
        />
        <motion.img
          src={Logo}
          className="homeLogo"
          variants={logoAnim}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
        />
      </div>

      <motion.div
        className="products-nav-links"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {productData.map((product, index) => {
          return (
            <motion.div
              variants={item}
              key={index}
              exit={{ y: 1000, opacity: 0, transition: { duration: 1 } }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                key={index}
                to={`/products/${product.id}`}
                className="products-nav-link" >
                <p>{product.category}</p>
              </NavLink>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Products;
