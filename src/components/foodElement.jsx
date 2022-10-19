import React from "react";
import "../style/menuElement.css";

const FoodElement = ({ element, langIT }) => {
  const { nome, ricetta, prezzo } = element;
  const showPrice = (prezzo) => {
    return prezzo ? prezzo : "   ";
  };

  return (
    <>
      <div className="drinkSpace">
        <div className="drinkCard">
          <div className="details w-80">
            <div className="titleCard">{langIT ? nome.it : nome.en}</div>
            <h5 className="recepie">{langIT ? ricetta.it : ricetta.en}</h5>
          </div>
          <p className="winePrice">{showPrice(prezzo)}</p>
        </div>
      </div>
    </>
  );
};

export default FoodElement;
