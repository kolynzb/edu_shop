import React from "react";
import "./styles/ProductDetails.css";
import Navbar from "../components/Navbar";
import { useParams } from "react-router";
import { data } from "../Assets/Library/stock";
const ProductDetails = () => {
  const { id } = useParams();
   
  return (
    <>
      <Navbar />
       {data
        .filter((stock) => stock.id == id)
        .map(stock => (
          <div className="product-details">
            <div className="productTitle">{stock.product}</div>
            <div className="proContainer">
              <img
                className="productPic"
                src={stock.image}
                alt="productpicture"
              />
              <div className="prodContainer">
                <div className="cate">{stock.category}</div>
                <div className="product-price">shs.{stock.price}</div>
                <button className="addCrt"> Cart</button>
              </div>
            </div>
          </div> 
        ))} 
    </>
  );
};

export default ProductDetails;
