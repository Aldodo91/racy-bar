import Category from "./category";
import Label from "./label";
import MenuElement from "./menuElement";

const BigSelection = ({ category, nome, langIT, cost, toShare, showLabel }) => {
  return (
    category &&
    category.length && (
      <>
        <Category categoria={nome} cost={cost} toShare={toShare} />
        <center>
          {showLabel && <Label />}
          <div className="container">
            {category.map((element) => (
              <MenuElement
                key={Math.random() * 10}
                element={element}
                langIT={langIT}
              />
            ))}
          </div>
        </center>
      </>
    )
  );
};
export default BigSelection;
