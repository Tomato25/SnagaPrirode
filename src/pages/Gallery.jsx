import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Gallery.css";
import "@splidejs/react-splide/css";
import imagesData from "../galleryimages";


function Gallery() {


  return (
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
        snap: "true"
      }}
    >
      {imagesData.map((image, index) => {
        return (
          <SplideSlide key={index} className="galleryCard">
            <div className="slide">
              <img
                className="galleryImage"
                src={require("../images/Gallery/" +
                  image.src +
                  ".jpg")}
              />
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  )
}

export default Gallery