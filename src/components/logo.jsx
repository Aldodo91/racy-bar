import React from "react";
import { Link } from "react-router-dom";
import "../style/logo.css";
import logoW from "../assets/logoW.png";

const Logo = () => {
  return (
    <div
      className="logoContainer logo"
      style={{
        backgroundColor: "white",
      }}
    >
      <Link to="/">
        <img src={logoW} height="100px" alt="LOGO" />
      </Link>
    </div>
  );
};

export default Logo;
