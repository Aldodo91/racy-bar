import React from "react";
import "../style/menuElement.css";
import { i18n } from "../common/functions";

const LuxuryElement = ({ element, langIT }) => {
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
            <div className="titleCard">{i18n(langIT, nome)}</div>
            <h5 className="recepie">{i18n(langIT, ricetta)}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryElement;
