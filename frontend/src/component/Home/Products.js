import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Products = ({ products }) => {
  const options = {
    edit: false,
    color: "#ffd60a",
    activeColor: "tomato",
    value: 3.5,
    isHalf: true,
    size: window.innerWidth < 600 ? 15 : 20,
  };
  return (
    <>
      <Link className="productCard" to="_id">
        <img src={products.url[0]} alt={products[0]} />
        <p> {products.name} </p>
        <div>
          <ReactStars {...options} /> <span> 291 Reviews</span>
        </div>
        <span>{products.price}</span>
      </Link>
    </>
  );
};
export default Products;
