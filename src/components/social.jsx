import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "../costants/links";
import {
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Social = () => {
  return (
    <>
      <div className="cat">
        <a href={links.camillo} target="_blank" rel="noopener noreferrer">
          😺
        </a>
      </div>
      <center>
        <div className="socialContainer">
          <div className="social">
            <a href={links.fb} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                size="lg"
                className="icon"
                icon={brands("facebook")}
              />
            </a>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                size="lg"
                className="icon"
                icon={brands("instagram")}
              />
            </a>
            <a href={links.tiktok} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className="icon"
                size="lg"
                icon={brands("tiktok")}
              />
            </a>
            <a href={links.maps} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                size="lg"
                className="icon"
                icon={regular("map")}
              />
            </a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                size="lg"
                className="icon"
                icon={brands("whatsapp")}
              />
            </a>
          </div>
        </div>
      </center>
    </>
  );
};

export default Social;
