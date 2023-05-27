import Allergeni from "./allergeni";
import Category from "./category";
import FoodElement from "./foodElement";

//const sortFood = (a, b) => (a.nome.it > b.nome.it ? 1 : -1);

const FoodSelection = ({ category, nome, langIT, cost, toShare }) => {
  return (
    category &&
    category.length && (
      <>
        <Category categoria={nome} cost={cost} toShare={toShare} />
        <center>
          <div className="container">
            {category.map((element) => (
              <FoodElement
                key={Math.random() * 10}
                element={element}
                langIT={langIT}
              />
            ))}
          </div>
          {category && category.length && <Allergeni />}
        </center>
      </>
    )
  );
};
export default FoodSelection;
