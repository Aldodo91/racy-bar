import React from "react";
import "../style/menuElement.css";

const MenuElement = ({ element, lang }) => {
  const { img, nome, ricetta } = element;

  return (
    <>
      <div className="drinkSpace">
        <div className="drinkCard">
          <img className="image" src={img} width="145px" alt="" />
          <div className="details">
            <div className="titleCard">{nome}</div>
            <h5 className="recepie">
              {lang === "it" ? ricetta.it : ricetta.en}
            </h5>
          </div>
        </div>
      </div>
      <center>
        <div className="divider"></div>
      </center>
    </>
  );
};

export default MenuElement;
