import { i18n } from "../common/functions";
import Category from "./category";
import Label from "./label";
import MenuMerchElement from "./menuMerchSection";

const MerchSelection = ({ category, nome, langIT, label }) => {
  return (
    category &&
    category.length > 0 && (
      <>
        <Category categoria={nome} />
        <center>
          {label && <Label msg={i18n(langIT, label)} />}
          <div className="container">
            {category.map((element) => (
              <MenuMerchElement
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
export default MerchSelection;
