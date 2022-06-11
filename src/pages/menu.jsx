import React from "react";
import { Link } from "react-router-dom";
import "../style/menu.css";

const Menu = () => {
  return (
    <>
      <center>
        <div className="buttonContainer">
          <Link to="/menu-details/it" className="bigButton">
            Italiano
          </Link>

          <Link to="/menu-details/en" className="bigButton">
            English
          </Link>
        </div>
      </center>
    </>
  );
};

export default Menu;
