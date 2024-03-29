import { i18n } from "../common/functions";
import Category from "./category";
import Label from "./label";
import MenuElement from "./menuElement";

const BigSelection = ({
  category,
  nome,
  langIT,
  cost,
  toShare,
  label,
  diageo = false,
}) => {
  return (
    category &&
    category.length > 0 && (
      <>
        <Category
          categoria={nome}
          cost={cost}
          toShare={toShare}
          diageo={diageo}
        />
        <center>
          {label && <Label msg={i18n(langIT, label)} />}
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
