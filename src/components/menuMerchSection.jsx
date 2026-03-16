import React from "react";
import "../style/menuElement.css";
import { i18n } from "../common/functions";

const MenuMerchElement = ({ element, langIT }) => {
  const { img, nome, ricetta, cost } = element;

  return (
    <>
      <div className="drinkSpace">
        <div className="drinkCard">
          <div className="imageSide">
            <img className="image" src={img} width="105px" alt="" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <div className="detailsMerch">
              <div className="titleCard">{nome}</div>
              <h5 className="recepie">{i18n(langIT, ricetta)}</h5>
            </div>
            <h5
              className="winePrice"
              style={{ alignSelf: "center", fontSize: "large" }}
            >
              {cost}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMerchElement;
