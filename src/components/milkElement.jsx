import React from "react";

const ExpandElement = ({ element }) => {
  const [show, setDetail] = React.useState(false);

  return (
    <>
      <center>
        <div className="wineCard">
          <div className="wineName" onClick={() => setDetail(!show)}>
            {element.nome}
            {show &&
              element.tipi.map((t) => (
                <div key={Math.random() * 10} className="milkDetail">
                  {t}
                </div>
              ))}
          </div>
          <div className="winePrice">€ {element.prezzo}</div>
        </div>
      </center>
    </>
  );
};

export default ExpandElement;
