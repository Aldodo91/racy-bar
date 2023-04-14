import Category from "./category";
import Label from "./label";
import MenuElement from "./menuElement";
import MultiLabel from "./multiLabel";

const BigSelection = ({ category, nome, langIT, cost, toShare, showLabel }) => {
  const buttomParagraph = {
    title: {
      it: "L'angolo del piacere",
      en: "L'angolo del piacere",
    },
    main: {
      it: "Delizioso dopo cena o piccante pre serata, a te la scelta 😉",
      en: "Delicious after dinner or spicy pre night, you choose 😉",
    },
  };
  return (
    category &&
    category.length && (
      <>
        <Category categoria={nome} cost={cost} toShare={toShare} />
        <center>
          {showLabel && <Label msg={"💧Water is for the Flowers 🌺"} />}
          <div className="container">
            {category.map((element) => (
              <MenuElement
                key={Math.random() * 10}
                element={element}
                langIT={langIT}
              />
            ))}
          </div>
          {showLabel && <MultiLabel msg={buttomParagraph} langIT={langIT} />}
        </center>
      </>
    )
  );
};
export default BigSelection;
