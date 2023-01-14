import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Gallery.css";
import "@splidejs/react-splide/css";
import imagesData from "../galleryimages";
import { motion } from "framer-motion";
import { imgAnimitem } from "../animations/productAnimations";

function Gallery() {
  return (
    <div style={{overflow: "hidden"}}>
    <motion.div
      className="galleryWrap"
      variants={imgAnimitem}
      initial="hidden"
      animate="show"
      exit={{ y: -1000, transition: { duration: 1 } }}
    >
      <Splide
        className="galleryCoursel"
        options={{
          perPage: 1,
          perMove: 1,
          gap: "2rem",
          drag: "free",
          arrows: true,
          pagination: false,
          type: "loop",
          snap: "true",
        }}
      >
        {imagesData.map((image, index) => {
          return (
            <SplideSlide key={index} className="galleryCard">
              <div className="slide">
                <img
                  className="galleryImage"
                  src={require("../images/Gallery/" + image.src + ".jpg")}
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </motion.div>
    </div>
  );
}

export default Gallery;
