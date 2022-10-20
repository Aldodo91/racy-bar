import React from "react";
import "../style/menuElement.css";

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
            <div className="titleCard">{langIT ? nome.it : nome.en}</div>
            <h5 className="recepie">{langIT ? ricetta.it : ricetta.en}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryElement;
