import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import "../style/hamburger.css";

const Sidebar = ({ lang, menuElement }) => {
  const it = lang === "it";
  const close = () => {
    document
      .querySelector("#sidebar > div:nth-child(2) > div > button")
      .click();
  };
  return (
    <Menu id="sidebar" isOpen={false}>
      <a className="menu-item" href="#special" onClick={close}>
        Luxury
      </a>
      <a className="menu-item" href="#signature" onClick={close}>
        Signature
      </a>
      {menuElement.hot.length && (
        <a className="menu-item" href="#hot" onClick={close}>
          Hot Cocktails
        </a>
      )}
      <a className="menu-item" href="#diageo" onClick={close}>
        Diageo
      </a>
      <a className="menu-item" href="#corner" onClick={close}>
        Shots
      </a>
      <a className="menu-item" href="#noAlcol" onClick={close}>
        MockTails
      </a>
      <a className="menu-item" href="#wine" onClick={close}>
        {it ? "Vini" : "Wine"}
      </a>
      <a className="menu-item" href="#distillati" onClick={close}>
        {it ? "Distillati" : "Spirits"}
      </a>
      <a className="menu-item" href="#caffetteria" onClick={close}>
        {it ? "Caffetteria" : "Coffee"}
      </a>
      <a className="menu-item" href="#food" onClick={close}>
        Food
      </a>
      <a className="menu-item" href="#dessert" onClick={close}>
        Dessert
      </a>
    </Menu>
  );
};

export default Sidebar;
