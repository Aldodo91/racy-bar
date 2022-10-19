import React from "react";
import { useParams } from "react-router-dom";
import * as menuElement from "../costants/allMenuElement";
import "../style/menuDetails.css";
import Hambuerger from "../components/hamburger";
import MilkElement from "../components/milkElement";
import SmallSection from "../components/smallSelection";
import BigSelection from "../components/bigSelecion";
import SpecialSelection from "../components/specialSelecion";
import FoodSelection from "../components/foodSection";
import Bruschette from "../components/bruschette";
import DessertSelection from "../components/dessetSelection";

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
        <div id="special">
          <SpecialSelection
            category={menuElement.special}
            nome="Luxury"
            langIT={langIt}
            cost={20}
          />
        </div>
        <div id="signature">
          <BigSelection
            category={menuElement.signature}
            nome="Signature Cocktails"
            langIT={langIt}
            cost={12}
          />
        </div>
        <BigSelection
          category={menuElement.toShare}
          nome="To Share"
          cost={28}
          toShare={true}
          langIT={langIt}
        />
        <div id="noAlcol">
          <BigSelection
            category={menuElement.mocktail}
            nome="Mocktails"
            cost={7}
            langIT={langIt}
          />
        </div>
        <div id="wine">
          <SmallSection
            category={menuElement.whiteWine}
            nome={langIt ? "Bianchi" : "White wine"}
            isWine={true}
          />
          <SmallSection
            category={menuElement.roseWine}
            nome={langIt ? "Rosè" : "Rose wine"}
            isWine={true}
          />
          <SmallSection
            category={menuElement.redWine}
            nome={langIt ? "Rossi" : "Red wine"}
            isWine={true}
          />
          <SmallSection
            category={menuElement.bollicine}
            nome={langIt ? "Bollicine" : "Sparkling"}
            isWine={true}
          />
          <SmallSection
            category={menuElement.birra}
            nome={langIt ? "Birre" : "Beers"}
          />
        </div>
        <div id="distillati">
          <SmallSection category={menuElement.gin} nome="Gin" />
          <SmallSection category={menuElement.vodka} nome="Vodka" />
          <SmallSection category={menuElement.rum} nome="Rum" />
          <SmallSection
            category={menuElement.tequila}
            nome="Tequila & Mezcal"
          />
          <SmallSection
            category={menuElement.scothWisky}
            nome="Scotch Whisky"
          />
          <SmallSection category={menuElement.usa} nome="USA Whisky" />
          <SmallSection
            category={menuElement.japaniseWisky}
            nome="Japanese Whisky"
          />
          <SmallSection category={menuElement.irishWisky} nome="Irish Whisky" />
          <SmallSection
            category={menuElement.cognac}
            nome="Cognac & Calvados"
          />
          <SmallSection category={menuElement.grappa} nome="Grappa" />
        </div>
        <div id="caffetteria">
          <SmallSection
            category={menuElement.caffetteria}
            nome={langIt ? "Caffetteria" : "Coffee"}
          />
          <MilkElement element={menuElement.latteVegetale} />
        </div>
        <div id="food">
          <Bruschette
            element={menuElement.bruschette}
            langIT={langIt}
            cost={"2 / pz"}
          />
          <FoodSelection
            category={menuElement.food}
            langIT={langIt}
            nome="Food"
            cost={""}
            isFood={true}
          />
        </div>
        <div id="dessert">
          <DessertSelection
            element={menuElement.dessert}
            nome="Dessert"
            langIT={langIt}
          />
        </div>
      </div>
    </>
  );
};

export default MenuDetails;
