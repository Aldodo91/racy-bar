import Category from "./category";
import Label from "./label";
import MenuElement from "./menuElement";
import MultiLabel from "./multiLabel";

const BigSelection = ({
  category,
  nome,
  langIT,
  cost,
  toShare,
  label = {},
}) => {
  return (
    category &&
    category.length && (
      <>
        <Category categoria={nome} cost={cost} toShare={toShare} />
        <center>
          {label && <Label msg={langIT ? label.it : label.en} />}
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
