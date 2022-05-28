import React from "react";
import { Link } from "react-router-dom";
import "../style/logo.css";

const Logo = () => {
  return (
    <Link to="/" className="title">
      <h1 id="title">Racy Bar</h1>
    </Link>
  );
};

export default Logo;
