import {React, useContext,useEffect} from "react";
import CategoryProducts from "../components/CategoryProducts";
import productData from "../productsData";
import Category from "../components/Category";
import "./Product.css";
import { useLocation, useParams } from "react-router-dom";
import PageContext from "../context/PageContext";
import { Helmet } from "react-helmet-async";

function Product() {
useEffect (()=> {
  setCurrentPage(pageName);
}, [])

const {id} = useParams();
console.log(id)

const product = productData.find(product => product.id === id); 
console.log(product)

const { setCurrentPage } = useContext(PageContext);
const pageName = product.category;
  return (

    <div className="productWrap">
      <Helmet>
      <title>Snaga Prirode | Proizvodi</title>
      <meta name="description" content="OPG Snaga prirode" />
      
      <meta name="keywords" content="farma, opg, snaga prirode, domaće, voće, melemi, sokovi, sadnice, plodovi" />
      </Helmet>
      <Category data={product}/>
      <CategoryProducts data={product}/>
    </div>
  );
}

export default Product;
