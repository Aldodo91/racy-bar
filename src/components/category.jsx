import btbc from "../assets/btbc.png";
const Category = ({ categoria, cost, sfuso, toShare }) => {
  return (
    <>
      <center>
        <div className="category">
          <div>
            {categoria}
            {toShare && <div className="toShare">4 persone</div>}
          </div>
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
        <div className="divider"></div>
      </center>
    </>
  );
};
export default Category;
