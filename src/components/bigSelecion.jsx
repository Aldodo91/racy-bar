import Category from "./category";
import MenuElement from "./menuElement";

const BigSelection = ({ category, nome, lang, cost, toShare }) => {
  return (
    category &&
    category.length && (
      <>
        <Category categoria={nome} cost={cost} toShare={toShare} />
        <center>
          <div className="container">
            {category.map((element) => (
              <MenuElement
                key={Math.random() * 10}
                element={element}
                lang={lang}
              />
            ))}
          </div>
        </center>
      </>
    )
  );
};
export default BigSelection;
