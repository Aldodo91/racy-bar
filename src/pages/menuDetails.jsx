import btbc from "../assets/btbc.png";
import React from "react";
import { useParams } from "react-router-dom";
import MenuElement from "../components/menuElement";
import {
  signature,
  toShare,
  gin,
  vodka,
  rum,
  tequila,
  scothWisky,
  usa,
  japaniseWisky,
  irishWisky,
  cognac,
  caffetteria,
  food,
  noAlcol,
  redWine,
  roseWine,
  whiteWine,
  grappa,
  bollicine,
  birra,
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
            lang={langIt ? "it" : "en"}
            cost={12}
          />
        </div>
        <BigSelection
          category={toShare}
          nome="To Share"
          cost={24}
          toShare={true}
          lang={langIt ? "it" : "en"}
        />
        <div id="noAlcol">
          <BigSelection
            category={noAlcol}
            nome="Mocktails"
            cost={7}
            lang={langIt ? "it" : "en"}
          />
        </div>
        <div id="wine">
          <SmallSection
            category={whiteWine}
            nome={langIt ? "Bianchi" : "White wine"}
            isWine={true}
          />
          <SmallSection
            category={roseWine}
            nome={langIt ? "Rosè" : "Rose wine"}
            isWine={true}
          />
          <SmallSection
            category={redWine}
            nome={langIt ? "Rossi" : "Red wine"}
            isWine={true}
          />
          <SmallSection
            category={bollicine}
            nome={langIt ? "Bollicine" : "Sparkling"}
            isWine={true}
          />
          <SmallSection category={birra} nome={langIt ? "Birre" : "Beers"} />
        </div>
        <div id="distillati">
          <SmallSection category={gin} nome="Gin" />
          <SmallSection category={vodka} nome="Vodka" />
          <SmallSection category={rum} nome="Rum" />
          <SmallSection category={tequila} nome="Tequila & Mezcal" />
          <SmallSection category={scothWisky} nome="Scotch Whisky" />
          <SmallSection category={usa} nome="USA Whisky" />
          <SmallSection category={japaniseWisky} nome="Japanese Whisky" />
          <SmallSection category={irishWisky} nome="Irish Whisky" />
          <SmallSection category={cognac} nome="Cognac & Calvados" />
          <SmallSection category={grappa} nome="Grappa" />
        </div>
        <div id="caffetteria">
          <SmallSection
            category={caffetteria}
            nome={langIt ? "Caffetteria" : "Coffee"}
          />
        </div>
        <div id="food">
          <BigSelection
            category={food}
            lang={langIt ? "it" : "en"}
            nome="Food"
            cost={""}
          />
        </div>
      </div>
    </>
  );
};

const WineElement = ({ wine }) => {
  return (
    <>
      <center>
        <div className="wineCard">
          <div className="wineName">{wine.nome}</div>
          <div className="winePrice">
            <span>{wine.bottleCost}</span>
            {wine.glassCost && <span>/{wine.glassCost}</span>}
          </div>
        </div>
      </center>
    </>
  );
};

const CommonElement = ({ element }) => {
  return (
    <>
      <center>
        <div className="wineCard">
          <div className="wineName">{element.nome}</div>
          <div className="winePrice">€ {element.prezzo}</div>
        </div>
      </center>
    </>
  );
};
const Category = ({ categoria, cost, sfuso, toShare }) => {
  return (
    <>
      <center>
        <div className="category">
          <div>
            {categoria}
            {toShare && <div className="toShare">4 persone</div>}
          </div>
          {cost && <p className="cost"> {cost}</p>}
          {sfuso && (
            <div className="cost">
              <div>
                €
                <img src={btbc} height="35px" alt="bottle/drink" />
              </div>
            </div>
          )}
        </div>
        <div className="divider"></div>
      </center>
    </>
  );
};

const SmallSection = ({ category, nome, isWine }) => {
  const addRacyGin = () => {
    return [
      {
        nome: "Racy Dolcevita",
        prezzo: 9,
      },
      // {
      //   nome: "Racy citrusy",
      //   prezzo: 9,
      // },
    ];
  };
  const order =
    nome === "Gin"
      ? [...addRacyGin(), ...category.sort((a, b) => a.prezzo - b.prezzo)]
      : category.sort((a, b) => a.prezzo - b.prezzo);
  return category && category.length ? (
    <>
      <Category categoria={nome} sfuso={isWine} />
      {isWine
        ? category.map((element) => (
            <WineElement key={Math.random() * 10} wine={element} />
          ))
        : order.map((element) => (
            <CommonElement key={Math.random() * 200} element={element} />
          ))}
    </>
  ) : (
    <div></div>
  );
};
const BigSelection = ({ category, nome, lang, cost, toShare }) => {
  return (
    category &&
    category.length && (
      <>
        <Category categoria={nome} cost={cost} toShare={toShare} />
        <center>
          <div className="container">
            {category.map((element) => (
              <MenuElement
                key={Math.random() * 10}
                element={element}
                lang={lang}
              />
            ))}
          </div>
        </center>
      </>
    )
  );
};

export default MenuDetails;
