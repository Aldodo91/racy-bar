import SpecialElement from "./special";
import Category from "./category";
const SpecialSelection = ({ category, nome, lang, cost, toShare }) => {
  return (
    category &&
    category.length && (
      <>
        <Category categoria={nome} cost={cost} toShare={toShare} />
        <center>
          <div className="container">
            {category.map((element) => (
              <SpecialElement
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

export default SpecialSelection;
