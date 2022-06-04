import btbc from "../assets/btbc.png";
import React from "react";
import { useParams } from "react-router-dom";
import MenuElement from "../components/menuElement";
import {
  signature,
  redWine,
  roseWine,
  whiteWine,
} from "../costants/menuElement";
import "../style/menuDetails.css";
import Hambuerger from "../components/hamburger";

const MenuDetails = () => {
  const { lang } = useParams();
  const langIt = lang === "it";
  return (
    <>
      <Hambuerger
        lang={lang}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />

      <div className="overflow">
        <div id="signature">
          <Category categoria="Signature Coctails" cost="30" />
          {signature.map((element) => (
            <MenuElement
              key={Math.random() * 10}
              element={element}
              lang={lang}
            />
          ))}
        </div>
        <div id="noAlcol">
          <Category
            apply
            categoria={langIt ? "Non Alcolici" : "Not Alcol"}
            cost="20"
          />
          {signature.slice(0, 3).map((element) => (
            <MenuElement
              key={Math.random() * 10}
              element={element}
              lang={lang}
            />
          ))}
        </div>
        <div id="Rwhine">
          <Category categoria={langIt ? "Rossi" : "Red wine"} sfuso={true} />
          {redWine.map((w) => (
            <WineElement key={Math.random() * 10} wine={w} />
          ))}
        </div>
        <div id="Wwine">
          <Category
            categoria={langIt ? "Bianchi" : "White wine"}
            sfuso={true}
          />
          {whiteWine.map((w) => (
            <WineElement key={Math.random() * 10} wine={w} />
          ))}
        </div>
        <div id="RoseWine">
          <Category categoria={langIt ? "Rose" : "Rosè wine"} sfuso={true} />
          {roseWine.map((w) => (
            <WineElement key={Math.random() * 10} wine={w} />
          ))}
        </div>
      </div>
    </>
  );
};

const WineElement = ({ wine }) => {
  return (
    <>
      <div className="wineCard">
        <div className="wineName">{wine.nome}</div>
        <div className="winePrice">
          <span>{wine.bottleCost}/</span>
          <span>{wine.glassCost}</span>
        </div>
      </div>
    </>
  );
};

const Category = ({ apply, categoria, cost, sfuso }) => {
  return (
    <>
      <div className="category">
        {categoria}
        {cost && <p className="cost"> € {cost}</p>}
        {sfuso && (
          <div className="cost">
            <img src={btbc} height="35px" alt="bottle/drink" />
          </div>
        )}
      </div>
      <center>
        <div className="divider"></div>
      </center>
    </>
  );
};

export default MenuDetails;
