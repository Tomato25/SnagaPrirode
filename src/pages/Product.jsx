import {React, useContext,useEffect} from "react";
import CategoryProducts from "../components/CategoryProducts";
import Category from "../components/Category";
import "./Product.css";
import { useLocation } from "react-router-dom";
import PageContext from "../context/PageContext";
import { Helmet } from "react-helmet-async";

function Product() {


  
useEffect (()=> {
  setCurrentPage(pageName);
  console.log(currentPage)
}, [])



  const location=useLocation();
  console.log(location.state.data);

  
const data=location.state.data;
const { currentPage } = useContext(PageContext);
const { setCurrentPage } = useContext(PageContext);
const pageName = data.category;
  return (

    <div className="productWrap">
      <Helmet>
      <title>Snaga Prirode | Proizvodi</title>
      <meta name="description" content="OPG Snaga prirode" />
      
      <meta name="keywords" content="farma, opg, snaga prirode, domaće, voće, melemi, sokovi, sadnice, plodovi" />
      </Helmet>
      <Category data={location.state.data}/>
      <CategoryProducts data={location.state.data}/>
    </div>
  );
}

export default Product;
