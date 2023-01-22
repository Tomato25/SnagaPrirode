import { React } from "react";
import "./CategoryProducts.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductSplide from "./ProductSplide";
import Accordion from "./Accordion";
import IngredientsAccordion from "./IngredientsAccordion";
import { motion } from "framer-motion";
import {icon,icon2} from "../animations/homeAnimations"

function CategoryProducts(props) {
  const productData = props.data;

  return (
    <div >
      {productData.products.map((product, index) => (
        <motion.div className="product" key={index}       initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, x:0, transition:{delay:0.5, duration:0.5}  },
          hidden: { opacity: 0 ,x:-100 }
        }}
        exit={{opacity:0}}>
          <div className="productTitle">
          <svg
          width="400"
          height="2"
          viewBox="0 0 400 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M0 1H400"
            stroke="black"
          />
        </svg>
          <p>{product.name}</p>
          <svg
          width="400"
          height="2"
          viewBox="0 0 400 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={icon2}
            initial="hidden"
            animate="visible"
            d="M0 1H400"
            stroke="black"
          />
        </svg>
          </div>
          <div className="productCon">
          
          <div className="productText">
          {product.description.map((text, index) => {
            return (
              <div className="productDescription" key={index}>
                <p>{text.paragraph}</p>
              </div>
            );
          })}
          {product.benefits.length > 0 ? (
            <Accordion benefits={product.benefits}/>
          ) : (
            <div></div>
          )}
          {product.ingredients.length > 0 ? (
            <IngredientsAccordion ingredients={product.ingredients}/>
          ) : (
            <div></div>
          )}
          </div>
          {product.images.length > 0 ? (
            <ProductSplide className="productGallery" product={product} />
          ) : (
            <div></div>
          )}
          </div>
        </motion.div>
      ))}

    </div>
  );
}

export default CategoryProducts;
