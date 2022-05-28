import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import Social from "../components/social";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="indizzoContainer">
          <div className="indirizzo i1">Corso S.Agata 28,</div>
          <div className="indirizzo i2">Massa Lubrense</div>
        </div>
        <div className="orari">
          6.30 | 00.00
          <div className="giorni">Closed on Tuesday</div>
        </div>
        <div className="menuContainer">
          <Link
            className="menu bigButton"
            to="/menu"
            style={{ marginBottom: "160px" }}
          >
            Menu
          </Link>
        </div>
        <Social />
      </div>
    </>
  );
};

export default Home;
