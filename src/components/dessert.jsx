import React from "react";
import "../style/menuElement.css";
import { i18n } from "../common/functions";

const Dessert = ({ element, langIT }) => {
  const { desc, prezzo } = element;
  return (
    <>
      <div className="drinkSpace">
        <div className="drinkCard">
          <div className="details w-80">
            <div className="titleCard">{i18n(langIT, desc)}</div>
          </div>
          <p className="winePrice">{prezzo}</p>
        </div>
      </div>
    </>
  );
};

export default Dessert;
