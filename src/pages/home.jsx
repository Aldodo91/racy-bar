import React from "react";
import { Link } from "react-router-dom";
import "../style/home.css";
import Social from "../components/social";
import { links } from "../costants/links";

const Home = () => {
  const [tempClosed] = React.useState(false);
  return (
    <>
      <div className="home">
        <div className="indizzoContainer">
          <Link
            className="tdNone"
            to={{
              pathname: links.maps,
            }}
            target="_blank"
          >
            <div className="indirizzo i1">Corso S.Agata 28,</div>
            <div className="indirizzo i2">Massa Lubrense</div>
          </Link>
        </div>
        <div className="orari">
          <p className="orari-inside">Open every day</p>
          <p className="orari-inside">9.00 AM | 02.00 AM </p>
          {/* <div className="giorni">Closed on Thursday</div> */}
          {tempClosed && <TemporaryClosed />}
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
const TemporaryClosed = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: "15px",
        marginTop: "20px",
        backgroundColor: "white",
        boxShadow: "10px 19px 22px -12px rgb(0 0 0 / 13%)",
      }}
    >
      <div className="giorni alert">
        We are close today Thursday 8th September See you tomorrow!
      </div>
    </div>
  );
};

export default Home;
