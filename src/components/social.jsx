import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../costants/links";
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
              pathname: links.fb,
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
              pathname: links.instagram,
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
              pathname: links.maps,
            }}
            target="_blank"
          >
            <FontAwesomeIcon size="lg" className="icon" icon={regular("map")} />
          </Link>
          <Link
            to={{
              pathname: links.mail,
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
              pathname: links.tel,
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
