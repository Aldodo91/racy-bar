import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import Social from "../components/social";
import { position } from "../costants/links";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="indizzoContainer">
          <Link
            className="tdNone"
            to={{
              pathname: position,
            }}
            target="_blank"
          >
            <div className="indirizzo i1">Corso S.Agata 28,</div>
            <div className="indirizzo i2">Massa Lubrense</div>
          </Link>
        </div>
        <div className="orari">
          6.30 | 00.00
          <div className="giorni">Closed on Tuesday</div>
        </div>
        <div className="menuContainer">
          <Link className="bigButton menu Menu" to="/menu">
            Menu
          </Link>
        </div>
        <Social />
      </div>
    </>
  );
};

export default Home;
