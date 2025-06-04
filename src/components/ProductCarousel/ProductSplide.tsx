import {React, useContext} from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./ProductSplide.css";
import "@splidejs/react-splide/css";
import ScreenSizeContext from "../../context/ScreenSizeContext";


function ProductSplide(props) {
  const product = props.product;

  const {screenSize} = useContext(ScreenSizeContext)


  let Slides = 2;
  if (product.images.length === 1 || screenSize.dynamicWidth < 1550) {
    Slides = 1
  } else if (product.images.length === 2) {
    Slides = 2
  }


  return (
    <Splide
      className="productCoursel"
      options={{
        perPage: Slides,
        perMove: 1,
        gap: "2rem",
        drag: "free",
        arrows: false,
        useScroll: true,
        snap: "true",

      }}
    >
      {product.images.map((image, index) => {
        return (
          <SplideSlide key={index} className="card">
            <div className="slide">
              <img
                className="productImage"
                src={require("../images/" +
                  product.imageFolder +
                  "/"
                  + image.src +
                  ".jpg")}
              />
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

export default ProductSplide;
