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

const MenuDetails = () => {
  const { lang } = useParams();
  React.useEffect(() => {
    document.getElementById("title").style.backgroundColor = "#fff";
  });
  const langIt = lang === "it";
  return (
    <>
      <div className="overflow">
        <Category categoria="Signature Coctails" cost="30" />
        {signature.map((element) => (
          <MenuElement key={Math.random() * 10} element={element} lang={lang} />
        ))}
        <Category categoria={langIt ? "Non Alcolici" : "Not Alcol"} cost="20" />
        {signature.slice(0, 3).map((element) => (
          <MenuElement key={Math.random() * 10} element={element} lang={lang} />
        ))}
        <Category categoria={langIt ? "Rossi" : "Red wine"} sfuso={true} />
        {redWine.map((w) => (
          <WineElement key={Math.random() * 10} wine={w} />
        ))}
        <Category categoria={langIt ? "Bianchi" : "White wine"} sfuso={true} />
        {whiteWine.map((w) => (
          <WineElement key={Math.random() * 10} wine={w} />
        ))}
        <Category categoria={langIt ? "Rose" : "Rosè wine"} sfuso={true} />
        {roseWine.map((w) => (
          <WineElement key={Math.random() * 10} wine={w} />
        ))}
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

const Category = ({ categoria, cost, sfuso }) => {
  return (
    <>
      <center>
        <div className="divider"></div>
      </center>
      <div className="category">
        {categoria}
        {cost && <p className="cost"> € {cost}</p>}
        {sfuso && (
          <div className="cost">
            <img src={btbc} height="35px" />
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
