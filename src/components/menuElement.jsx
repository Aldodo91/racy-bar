import React from "react";
import "../style/menuElement.css";

const MenuElement = ({ element, langIT }) => {
  const { img, nome, ricetta } = element;

  return (
    <>
      <div className="drinkSpace">
        <div className="drinkCard">
          {img ? (
            <div className="imageSide">
              <img className="image" src={img} width="105px" alt="" />
            </div>
          ) : (
            <div style={{ width: 50 }}></div>
          )}
          <div className="details">
            <div className="titleCard">
              {nome
                ? nome
                : langIT
                ? "Specialità del giorno"
                : "Daily specials"}
            </div>
            <h5 className="recepie">{langIT ? ricetta.it : ricetta.en}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuElement;
