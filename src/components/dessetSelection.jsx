import Category from "./category";
import Dessert from "./dessert";
import FoodElement from "./foodElement";

const DessertSelection = ({ element, nome, langIT }) => {
  return (
    <>
      <Category categoria={nome} />
      <center>
        <div className="container">
          {element.map((e) => (
            <Dessert key={Math.random() * 10} element={e} langIT={langIT} />
          ))}
        </div>
      </center>
    </>
  );
};
export default DessertSelection;
