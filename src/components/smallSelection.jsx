import Category from "./category";
import WineElement from "./wineElement";
import CommonElement from "./commonElement";
const SmallSection = ({ category, nome, isWine }) => {
  const addRacyGin = () => {
    return [
      {
        nome: "Racy Dolcevita",
        prezzo: 9.5,
      },
      // {
      //   nome: "Racy citrusy",
      //   prezzo: 9,
      // },
    ];
  };
  const byPrezzo = (a, b) => a.prezzo - b.prezzo;
  const byBottle = (a, b) => a.bottleCost - b.bottleCost;
  let order = isWine ? category.sort(byBottle) : category.sort(byPrezzo);
  if (nome === "Gin") {
    order = [...addRacyGin(), ...order];
  }

  return category && category.length ? (
    <>
      <Category categoria={nome} sfuso={isWine} />
      {isWine
        ? category.map((element) => (
            <WineElement key={Math.random() * 10} wine={element} />
          ))
        : order.map((element) => (
            <CommonElement key={Math.random() * 200} element={element} />
          ))}
    </>
  ) : (
    <div></div>
  );
};
export default SmallSection;
