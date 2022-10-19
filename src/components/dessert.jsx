import React from "react";
import "../style/menuElement.css";

const Dessert = ({ element, langIT }) => {
  const { nome, desc, prezzo } = element;
  return (
    <>
      <div className="drinkSpace">
        <div className="drinkCard">
          <div className="details w-80">
            <div className="titleCard">{nome}</div>
            <h5 className="recepie">{langIT ? desc.it : desc.en}</h5>
          </div>
          <p className="winePrice">{prezzo}</p>
        </div>
      </div>
    </>
  );
};

export default Dessert;
