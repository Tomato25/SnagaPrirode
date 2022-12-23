import {React} from "react";
import "./CategoryProducts.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';



function CategoryProducts(props) {

  const productData = props.data;


  return (
    <div>
      {productData.products.map((product, index) => (
        <div className="product" key={index}>
          <p className="productTitle">{product.name}</p>
          <Splide className="productCoursel" 
          extensions={AutoScroll}
          options={{
             autoScroll: true,
            perPage:3,
            perMove:1,
            gap: "2rem",
            drag:"free",
            arrows: false,
            useScroll: true
          }}
          >
            {product.images.map((image, index) => {
              return (
                <SplideSlide key={index} className="card">

                  <div  className="slide">
                  <img 
                    className="productImage"
                    src={require("../images/" +
                      product.imageFolder +
                      "/" +
                      image.src +
                      ".jpg")}
                  />
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>

          {product.description.map((text, index) => {
            return (
              <div className="productDescription" key={index}>
                <p>{text.paragraph}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default CategoryProducts;
