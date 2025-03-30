import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/animate.css";
import "../style/menu.css";

const Menu = () => {
  const [expandIt, setExpandit] = useState(false);
  const [expandEn, setExpandEn] = useState(false);
  const [blurIt, setBlurIt] = useState(false);
  const [blurEn, setBlurEn] = useState(false);
  const handleExapandIt = () => {
    setExpandit(!expandIt);
    if (expandIt) {
      setBlurEn(false);
      setBlurIt(false);
      return;
    }
    setExpandEn(false);
    setBlurEn(true);
    setBlurIt(false);
  };
  const handleExpandEn = () => {
    setExpandEn(!expandEn);
    if (expandEn) {
      setBlurEn(false);
      setBlurIt(false);
      return;
    }
    setExpandit(false);
    setBlurEn(false);
    setBlurIt(true);
  };
  return (
    <>
      <center>
        <div className="buttonContainer">
          <button
            className={`bigButton ${blurIt ? "blur" : ""}`}
            onClick={() => handleExapandIt()}
          >
            Italiano
          </button>
          <div className={`btnExpand animate ${expandIt ? "show" : ""}`}>
            <Link
              to={{
                pathname: "/menu-details/it",
                state: { lang: "it", view: "drink" },
              }}
              className="smallButton"
            >
              Drink
            </Link>

            <Link
              to={{
                pathname: "/menu-details/it",
                state: { lang: "it", view: "food" },
              }}
              className="smallButton"
            >
              Food
            </Link>
          </div>

          <button
            className={`bigButton ${blurEn ? "blur" : ""} `}
            onClick={() => handleExpandEn()}
          >
            English
          </button>
          <div className={`btnExpand animate ${expandEn ? "show" : ""}`}>
            <Link
              to={{
                pathname: "/menu-details/en",
                state: { lang: "en", view: "drink" },
              }}
              className="smallButton"
            >
              Drink
            </Link>

            <Link
              to={{
                pathname: "/menu-details/en",
                state: { lang: "en", view: "food" },
              }}
              className="smallButton"
            >
              Food
            </Link>
          </div>
        </div>
      </center>
    </>
  );
};

export default Menu;
