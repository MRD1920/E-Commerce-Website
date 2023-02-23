import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import { IoLogoGooglePlaystore as Playstore } from "react-icons/io5";
import { AiFillApple as Apple } from "react-icons/ai";
import {
  AiFillInstagram as Ig,
  AiOutlineYoutube as Youtube,
  AiOutlineFacebook as Facebook,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="leftfooter">
          <h4> Download Our App from </h4>

          <span id="downlinks">
            <a
              href="https://play.google.com/store/games/"
              target="_blank"
              rel="noreferrer"
            >
              <Playstore size={70} />
            </a>
            <a
              href="https://apps.apple.com/in/app/apple-store/id375380948"
              target="_blank"
              rel="noreferrer"
            >
              <Apple size={70} />
            </a>
          </span>
        </div>

        <div className="midfooter">
          <p>Delivering the best known to mankind </p>
          <h1>ECOMMERCE.</h1>
          <p>High Quality is our first priority</p>

          <p>Copyrights 2023 &copy; Mriganka_Dhar</p>
        </div>

        <div className="rightfooter">
          <h4>Follow Us</h4>
          <a
            href="http://instagram.com/meabhisingh"
            target="_blank"
            rel="noreferrer"
          >
            <Ig size={50} />
          </a>
          <a
            href="http://youtube.com/6packprogramemr"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube size={50} />
          </a>
          <a
            href="http://instagram.com/meabhisingh"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook size={50} />
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
