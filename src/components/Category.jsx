import React from "react";
import "./Category.css";
import Logo from "../images/Logo.png";


function Category(props) {
  const productData = props.data;

  return (
    <div className="categoryWrap">
      <div className="description">
        {productData.categoryDescription.map((description, index) => {
          return (
            <div className="categoryText" key={index}>
              {description.paragraph}
            </div>
          );
        })}
      </div>

      <div className="gallery">
        <img src={Logo} className="centerLogo" />

        <img
          src={require("../images/" + productData.categoryImage + ".jpg")}
          className="bgimg"
        />
      </div>
    </div>
  );
}

export default Category;
