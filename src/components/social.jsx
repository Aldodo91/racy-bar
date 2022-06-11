import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Social = () => {
  const position =
    "https://www.google.com/maps/place/Corso+Sant'Agata,+28,+80061+Massa+Lubrense+NA/@40.6070388,14.3738441,17z/data=!3m1!4b1!4m5!3m4!1s0x133b9c08ce43e737:0x97ae37f1c4a0aa62!8m2!3d40.6070388!4d14.3738441";
  return (
    <center>
      <div className="socialContainer">
        <div className="social">
          <Link
            to={{
              pathname: "https://facebook.com",
            }}
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={brands("facebook")} />
          </Link>
          <Link
            to={{
              pathname: "https://instagram.com",
            }}
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={brands("instagram")} />
          </Link>
          <Link
            to={{
              pathname: position,
            }}
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={regular("map")} />
          </Link>
          <Link
            to={{
              pathname: "mailto:carlo.dorso@hotmail.com",
            }}
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={regular("envelope")} />
          </Link>
          <Link
            to={{
              pathname: "tel:+393661268282",
            }}
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={solid("phone")} />
          </Link>
        </div>
      </div>
    </center>
  );
};

export default Social;
