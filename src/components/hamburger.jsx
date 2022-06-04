import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import "../style/hamburger.css";

export default ({ lang }) => {
  const it = lang === "it";
  const close = () => {
    document
      .querySelector("#sidebar > div:nth-child(2) > div > button")
      .click();
  };
  return (
    <Menu id="sidebar" isOpen={false}>
      <a className="menu-item" href="#signature" onClick={close}>
        Signature
      </a>
      <a className="menu-item" href="#noAlcol" onClick={close}>
        {it ? "Analcolici" : "No Alcool"}
      </a>
      <a className="menu-item" href="#Rwhine" onClick={close}>
        {it ? "Vini Rossi" : "Red Wine"}
      </a>
      <a className="menu-item" href="#Wwine" onClick={close}>
        {it ? "Vini Bianchi" : "White wine"}
      </a>
      <a className="menu-item" href="#RoseWine" onClick={close}>
        {it ? "Vini Rose" : "Rose wine"}
      </a>
    </Menu>
  );
};
