import { React } from "react";
import "./CategoryProducts.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductSplide from "./ProductSplide";
import Accordion from "./Accordion";
import IngredientsAccordion from "./IngredientsAccordion";

function CategoryProducts(props) {
  const productData = props.data;

  return (
    <div>
      {productData.products.map((product, index) => (
        <div className="product" key={index}>
          <p className="productTitle">{product.name}</p>
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
        </div>
      ))}

    </div>
  );
}

export default CategoryProducts;
