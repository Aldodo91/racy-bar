const WineElement = ({ wine }) => {
  return (
    <>
      <center>
        <div className="wineCard">
          <div className="wineName">{wine.nome}</div>
          <div className="winePrice">
            <span>{wine.bottleCost}</span>
            {wine.glassCost && <span>/{wine.glassCost}</span>}
          </div>
        </div>
      </center>
    </>
  );
};

export default WineElement;
