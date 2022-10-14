import React from "react";
import { useParams } from "react-router-dom";
import {
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
  redWine,
  roseWine,
  whiteWine,
  grappa,
  bollicine,
  birra,
  latteVegetale,
} from "../costants/menuElement";
import "../style/menuDetails.css";
import Hambuerger from "../components/hamburger";
import { signature } from "../costants/signature";
import { mocktail } from "../costants/mocktail";
import { special } from "../costants/special";
import MilkElement from "../components/milkElement";
import SmallSection from "../components/smallSelection";
import BigSelection from "../components/bigSelecion";
import SpecialSelection from "../components/specialSelecion";

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
            category={special}
            nome="Luxury"
            langIT={langIt}
            cost={20}
          />
        </div>
        <div id="signature">
          <BigSelection
            category={signature}
            nome="Signature Cocktails"
            langIT={langIt}
            cost={12}
          />
        </div>
        <BigSelection
          category={toShare}
          nome="To Share"
          cost={28}
          toShare={true}
          langIT={langIt}
        />
        <div id="noAlcol">
          <BigSelection
            category={mocktail}
            nome="Mocktails"
            cost={7}
            langIT={langIt}
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
          <MilkElement element={latteVegetale} />
        </div>
        <div id="food">
          <BigSelection category={food} langIT={langIt} nome="Food" cost={""} />
        </div>
      </div>
    </>
  );
};

export default MenuDetails;
