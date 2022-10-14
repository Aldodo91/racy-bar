import Category from "./category";
import WineElement from "./wineElement";
import CommonElement from "./commonElement";
const SmallSection = ({ category, nome, isWine }) => {
  const addRacyGin = () => {
    return [
      {
        nome: "Racy Dolcevita",
        prezzo: 9,
      },
      // {
      //   nome: "Racy citrusy",
      //   prezzo: 9,
      // },
    ];
  };
  const order =
    nome === "Gin"
      ? [...addRacyGin(), ...category.sort((a, b) => a.prezzo - b.prezzo)]
      : category.sort((a, b) => a.prezzo - b.prezzo);
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
