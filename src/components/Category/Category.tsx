import React from "react";
import "./Category.css";
import Logo from "../images/Logo.png";
import { motion } from "framer-motion";
import { textAnimCon,logoAnim,imgAnimitem } from "../../animations/aboutAnimations";


function Category(props) {
  const productData = props.data;

  return (
    <div className="categoryWrap">
      <motion.div className="description" variants={textAnimCon}
        initial="hidden"
        animate="show"
        exit={{ x: -1000 }}>
        {productData.categoryDescription.map((description, index) => {
          return (
            <div className="categoryText" key={index}>
              {description.paragraph}
            </div>
          );
        })}
      </motion.div>

      <div className="gallery">
        <motion.img src={Logo} className="centerLogo"  variants={logoAnim}
          initial="hidden"
          animate="show"
          exit={{ opacity:0, delay:0.5 }}/>

        <motion.img
          src={require("../images/" + productData.categoryImage + ".jpg")}
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

export default Category;
