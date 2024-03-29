import btbc from "../assets/btbc.png";
import diagelogo from "../assets/diageo.jpg";

const Category = ({ categoria, cost, sfuso, toShare, diageo }) => {
  const isNegroniWeek = categoria === "Negroni Week";
  const redColor = "#e74c3c";
  return (
    <>
      <center>
        <div className="category">
          {!diageo ? (
            <div style={isNegroniWeek ? { color: redColor } : {}}>
              {categoria}
              {toShare && <div className="toShare">4 persone</div>}
            </div>
          ) : (
            <div className="diageoContainer">
              <img src={diagelogo} alt="Diniego logo"></img>
            </div>
          )}
          {cost && <p className="cost"> {cost}</p>}
          {sfuso && (
            <div className="cost">
              <div>
                €
                <img src={btbc} height="35px" alt="bottle/drink" />
              </div>
            </div>
          )}
        </div>
        <div
          className="divider"
          style={isNegroniWeek ? { borderColor: redColor } : {}}
        ></div>
      </center>
    </>
  );
};
export default Category;
