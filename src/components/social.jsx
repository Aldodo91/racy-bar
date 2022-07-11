import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { position } from "../costants/links";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Social = () => {
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
            <FontAwesomeIcon
              size="lg"
              className="icon"
              icon={brands("facebook")}
            />
          </Link>
          <Link
            to={{
              pathname: "https://www.instagram.com/racy.cocktailbar/",
            }}
            target="_blank"
          >
            <FontAwesomeIcon
              size="lg"
              className="icon"
              icon={brands("instagram")}
            />
          </Link>
          <Link
            to={{
              pathname: position,
            }}
            target="_blank"
          >
            <FontAwesomeIcon size="lg" className="icon" icon={regular("map")} />
          </Link>
          <Link
            to={{
              pathname: "mailto:carlo.dorso@hotmail.com",
            }}
            target="_blank"
          >
            <FontAwesomeIcon
              size="lg"
              className="icon"
              icon={regular("envelope")}
            />
          </Link>
          <Link
            to={{
              pathname: "tel:+393661268282",
            }}
            target="_blank"
          >
            <FontAwesomeIcon size="lg" className="icon" icon={solid("phone")} />
          </Link>
        </div>
      </div>
    </center>
  );
};

export default Social;
