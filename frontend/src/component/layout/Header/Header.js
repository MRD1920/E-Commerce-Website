import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#588157",
  navColor1: "#D6CCC2",
  navColor2: "#EDEDE9",
  logo,
  logoWidth: "30vmax",
  logoHoverSize: "50px",
  logoHoverColor: "#ba181b",
  link1Text: "Home",
  link2Text: "Product",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/product",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.8vmax",
  link2Size: "1.8vmax",
  link3Size: "1.8vmax",
  link4Size: "1.8vmax",
  link1ColorHover: "#ba181b",
  link2ColorHover: "#ba181b",
  link3ColorHover: "#ba181b",
  link4ColorHover: "#ba181b",

  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1Margin: "3vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  searchIconSize: "3vmax",
  cartIconSize: "3vmax",
  profileIconSize: "3vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
