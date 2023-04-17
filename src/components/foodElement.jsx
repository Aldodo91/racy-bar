import React from "react";
import "../style/menuElement.css";
import { i18n } from "../common/functions";

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
            <div className="titleCard">{i18n(langIT, nome)}</div>
            <h5 className="recepie">{i18n(langIT, ricetta)}</h5>
          </div>
          <p className="winePrice">{showPrice(prezzo)}</p>
        </div>
      </div>
    </>
  );
};

export default FoodElement;
