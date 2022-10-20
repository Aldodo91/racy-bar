import Category from "./category";
import SpecialCoffieElement from "./specialCoffeElement";
const SpecialCoffie = ({ category, nome }) => {
  return category && category.length ? (
    <>
      <Category categoria={nome} sfuso={false} />
      {category.map((element) => (
        <SpecialCoffieElement key={Math.random() * 200} element={element} />
      ))}
    </>
  ) : (
    <div></div>
  );
};
export default SpecialCoffie;
