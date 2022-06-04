import btbc from "../assets/btbc.png";
import React from "react";
import { useParams } from "react-router-dom";
import MenuElement from "../components/menuElement";
import {
  signature,
  sprits,
  gin,
  vodka,
  rum,
  tequila,
  scothWisky,
  bourbonWhiskey,
  ryeWiskey,
  japaniseWisky,
  irishWisky,
  cognac,
  armagnac,
  caffetteria,
  softDrink,
  food,
  noAlcol,
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
          <BigSelection
            category={signature}
            nome="Signature Cocktails"
            cost={30}
          />
        </div>
        <BigSelection category={sprits} nome="Spritz" cost={20} />
        <div id="noAlcol">
          <BigSelection category={noAlcol} nome="Mocktail" cost={10} />
        </div>
        <div id="wine">
          <SmallSection
            category={whiteWine}
            nome={langIt ? "Bianchi" : "White wine"}
            isWine={true}
          />
          <SmallSection
            category={roseWine}
            nome={langIt ? "Rose" : "Rose wine"}
            isWine={true}
          />
          <SmallSection
            category={redWine}
            nome={langIt ? "Rossi" : "Red wine"}
            isWine={true}
          />
        </div>
        <div id="distillati">
          <SmallSection category={gin} nome="Gin" />
          <SmallSection category={vodka} nome="Vodka" />
          <SmallSection category={rum} nome="Rum" />
          <SmallSection category={tequila} nome="Tequila" />
          <SmallSection category={scothWisky} nome="Scoth Whisky" />
          <SmallSection category={bourbonWhiskey} nome="Bourbon Whiskey" />
          <SmallSection category={ryeWiskey} nome="Rye Whiskey" />
          <SmallSection category={japaniseWisky} nome="Japanese Whisky" />
          <SmallSection category={irishWisky} nome="Irish Whisky" />
          <SmallSection category={cognac} nome="Cognac" />
          <SmallSection category={armagnac} nome="Armagnac" />
        </div>
        <div id="softDrink">
          <SmallSection category={softDrink} nome="Soft Drink" />
        </div>
        <div id="caffetteria">
          <SmallSection
            category={caffetteria}
            nome={langIt ? "Caffetteria" : "Coffee"}
          />
        </div>
        <div id="food">
          <SmallSection category={food} nome="Food" />
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
          <span>€ {wine.bottleCost}</span>
          {wine.glassCost && <span>/{wine.glassCost}</span>}
        </div>
      </div>
    </>
  );
};

const CommonElement = ({ element }) => {
  return (
    <>
      <div className="wineCard">
        <div className="wineName">{element.nome}</div>
        <div className="winePrice">€ {element.prezzo}</div>
      </div>
    </>
  );
};
const Category = ({ categoria, cost, sfuso }) => {
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

const SmallSection = ({ category, nome, isWine }) => {
  return category && category.length ? (
    <>
      <Category categoria={nome} sfuso={isWine} />

      {isWine
        ? category.map((element) => (
            <WineElement key={Math.random() * 10} wine={element} />
          ))
        : category.map((element) => (
            <CommonElement key={Math.random() * 200} element={element} />
          ))}
    </>
  ) : (
    <div></div>
  );
};
const BigSelection = ({ category, nome, lang, cost }) => {
  return (
    category &&
    category.length && (
      <>
        <Category categoria={nome} cost={cost} />
        {category.map((element) => (
          <MenuElement key={Math.random() * 10} element={element} lang={lang} />
        ))}
      </>
    )
  );
};

export default MenuDetails;
