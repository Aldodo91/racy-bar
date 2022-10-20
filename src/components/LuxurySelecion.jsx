import LuxuryElement from "./LuxuryElement";
import Category from "./category";
const LuxurySelection = ({ category, nome, langIT, cost, toShare }) => {
  return (
    category &&
    category.length && (
      <>
        <Category categoria={nome} cost={cost} toShare={toShare} />
        <center>
          <div className="container">
            {category.map((element) => (
              <LuxuryElement
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

export default LuxurySelection;
