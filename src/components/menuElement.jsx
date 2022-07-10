import React from "react";
import "../style/menuElement.css";

const MenuElement = ({ element, lang }) => {
  const { img, nome, ricetta } = element;

  return (
    <>
      <div className="drinkSpace">
        <div className="drinkCard">
          {img ? (
            <img className="image" src={img} width="105px" alt="" />
          ) : (
            <div style={{ width: 50 }}></div>
          )}
          <div className="details">
            <div className="titleCard">{nome}</div>
            <h5 className="recepie">
              {lang === "it" ? ricetta.it : ricetta.en}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuElement;
