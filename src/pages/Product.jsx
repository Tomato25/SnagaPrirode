import React from "react";
import CategoryProducts from "../components/CategoryProducts";
import Category from "../components/Category";
import "./Product.css";
import { useLocation } from "react-router-dom";


function Product() {

  const location=useLocation();
  console.log(location.state.data);
  return (
    <div className="productWrap">
      <Category data={location.state.data}/>
      <CategoryProducts data={location.state.data}/>
    </div>
  );
}

export default Product;
