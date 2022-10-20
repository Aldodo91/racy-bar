const SpecialCoffieElement = ({ element }) => {
  return (
    <>
      <center>
        <div className="wineCard">
          <div style={{ textAlign: "start" }} className="wineName">
            {element.nome}
            <div className="desc">{element.desc}</div>
          </div>
          <div className="winePrice">€ {element.prezzo}</div>
        </div>
      </center>
    </>
  );
};
export default SpecialCoffieElement;
