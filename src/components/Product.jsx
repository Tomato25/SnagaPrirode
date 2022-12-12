import React from "react";
import "./Product.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { productsData } from "../productsData";
import Product1 from "../images/about.jpg";
import Product2 from "../images/products.jpg";

function Product() {
  const images = [
    {
      image: { Product1 },
    },

    {
      image: { Product2 },
    },
  ];

  return (
    <div className="product">
      <p className="productTitle">Jabuke</p>
      <div className="productCoursel">
        {images.map((productImage) => {
          return (
            <div>
              <img className="productImage" src={productImage.image} />
            </div>
          );
        })}
      </div>
      <div className="productDescription">
        Imamo veliki izbor jabuka, za svačiji ukus. Trenutno posađeno 20ak vrsta
        koje sazrijevaju od srpnja pa skroz do kraja studenog. Od malih do
        ogromnih, kiselih do slatkih, svih boja i oblika.
      </div>
      <div className="productDescription">
        Jabuke koje će vas podsjetiti na djetinjstvo, bogate okusom i mirisom!
      </div>
    </div>
  );
}

export default Product;
