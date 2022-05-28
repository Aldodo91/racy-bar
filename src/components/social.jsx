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
    "https://www.google.it/maps/place/Bar+Centrale/@40.607057,14.3734749,18.17z/data=!3m1!5s0x133b9c08ce17e1a7:0xaa3072d34a6c69ae!4m5!3m4!1s0x133b9c0926e45987:0xd205c628436fe414!8m2!3d40.6069954!4d14.3738553";
  return (
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
            pathname: "mailto:pippo@mail.com",
          }}
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={regular("envelope")} />
        </Link>
        <Link
          to={{
            pathname: "tel:+39123456789",
          }}
          target="_blank"
        >
          <FontAwesomeIcon className="icon" icon={solid("phone")} />
        </Link>
      </div>
    </div>
  );
};

export default Social;
