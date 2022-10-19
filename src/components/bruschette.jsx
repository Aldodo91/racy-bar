import Category from "./category";

const Bruschette = ({ element, langIT, cost }) => {
  const { nome, bruschette } = element;
  return (
    <>
      <Category categoria={langIT ? nome.it : nome.en} cost={cost} />
      <center>
        <div className="container">
          {bruschette.map((b) => (
            <div key={Math.random() * 10} className="wineCard">
              <div className="wineName"> - {langIT ? b.it : b.en}</div>
            </div>
          ))}
        </div>
      </center>
    </>
  );
};
export default Bruschette;
