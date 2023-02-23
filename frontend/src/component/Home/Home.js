import React from "react";
import { CgScrollV } from "react-icons/cg";
import "./Home.css";
import Products from "./Products";

const products = {};
const Home = () => {
  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>Find amazing products below</h1>

        <a href="container">
          <button>
            scroll <CgScrollV />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <Products products={products} />
      </div>
    </>
  );
};

export default Home;
