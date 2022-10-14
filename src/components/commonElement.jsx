const CommonElement = ({ element }) => {
  return (
    <>
      <center>
        <div className="wineCard">
          <div className="wineName">{element.nome}</div>
          <div className="winePrice">€ {element.prezzo}</div>
        </div>
      </center>
    </>
  );
};
export default CommonElement;
