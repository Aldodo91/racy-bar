import React from "react";
import "../style/animate.css";

const ExpandElement = ({ element }) => {
  const [show, setDetail] = React.useState(false);

  return (
    <>
      <center>
        <div className="wineCard">
          <div className="wineName" onClick={() => setDetail(!show)}>
            {element.nome}
            <div className={`animate ${show ? "show" : ""}`}>
              {element.tipi.map((t) => (
                <div key={Math.random() * 10} className="expandDetail">
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="winePrice">€ {element.prezzo}</div>
        </div>
      </center>
    </>
  );
};

export default ExpandElement;
