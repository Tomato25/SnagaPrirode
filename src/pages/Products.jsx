import { React } from "react";
import "./Products.css";
import Logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
import productData from "../productsData";
import { motion } from "framer-motion";
import { imgAnimitem,logoAnim,container, item } from "../animations/productAnimations";


function Products() {
  return (
    <div className="productsWrap">
      <div className="productsDecoration">
        <motion.img
          src={require("../images/products.jpg")}
          className="bgimages"
          variants={imgAnimitem}
          initial="hidden"
          animate="show"
          exit={{ y: -1000, transition:{duration:1}}}
        />
        <motion.img
          src={Logo}
          className="homeLogo"
          variants={logoAnim}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0}}
        />
      </div>

      <motion.div className="products-nav-links" 
      variants={container}
      initial="hidden"
      animate="show">


        {productData.map((product, index) => {
          return (

            <motion.div             
              variants={item}
              exit={{ y: 1000, opacity: 0, transition:{duration:1}}}
            >
            <NavLink
              key={index}
              to="/products/product"
              state={{ data: product }}
              className="products-nav-link"
              activeClassName="nav-link-active"
            >
              <p>{product.category}</p>
            </NavLink>
            </ motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Products;
