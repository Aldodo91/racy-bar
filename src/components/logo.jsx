import React from "react";
import { Link } from "react-router-dom";
import "../style/logo.css";
import logoW from "../assets/logoW.png";
import logoB from "../assets/logoB.jpeg";

const Logo = () => {
  const [lightMode, setMode] = React.useState(true);
  const navigate = () => {
    console.log("nav");
  };

  return (
    <div
      className="logoContainer logo"
      style={{
        backgroundColor: lightMode ? "white" : "#272727",
      }}
    >
      <Link to="/">
        <img
          src={lightMode ? logoW : logoB}
          height="100px"
          onClick={navigate}
        />
      </Link>
    </div>
  );
};

export default Logo;
