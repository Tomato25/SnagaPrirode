import { React} from "react";
import "./Products.css";
import Logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
import productData from "../productsData";

function Products() {


  return (
    <div className="productsWrap">
      <div className="productsDecoration">
        <img src={require("../images/products.jpg")} className="bgimages" />
        <img src={Logo} className="homeLogo" />
      </div>
  
      <div className="products-nav-links">
      {productData.map((product, index) => {
        return (
        <NavLink
          key={index}
          to="/products/product"
          state= {{data: product}}       
          className="products-nav-link"
          activeClassName="nav-link-active"
        >
          <p>{product.category}</p>
        </NavLink>

          );
          })}
      </div>
    </div>
  );
}

export default Products;
