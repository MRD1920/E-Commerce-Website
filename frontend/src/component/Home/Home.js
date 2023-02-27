import React from "react";
import { CgScrollV } from "react-icons/cg";
import "./Home.css";
import Products from "./Products";
import { getProducts } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const products = {
  name: "Blue Tshirt",
  price: "₹179",
  _id: "Mriganka",
  url: [
    "https://m.media-amazon.com/images/I/71-3uAyT3aL._AC_UL600_FMwebp_QL65_.jpg",
  ],
};
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>Find amazing products below</h1>

        <a href="#container">
          <button>
            scroll <CgScrollV />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Products products={products} />
        <Products products={products} />
        <Products products={products} />
        <Products products={products} />

        <Products products={products} />
        <Products products={products} />
        <Products products={products} />
        <Products products={products} />
      </div>
    </>
  );
};

export default Home;
