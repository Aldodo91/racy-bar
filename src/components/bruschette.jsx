import { i18n } from "../common/functions";
import Category from "./category";

const Bruschette = ({ element, langIT, cost }) => {
  const { nome, bruschette } = element;
  return (
    <>
      <Category categoria={i18n(langIT, nome)} cost={cost} />
      <center>
        <div className="container">
          {bruschette.map((b) => (
            <div key={Math.random() * 10} className="wineCard">
              <div className="wineName"> - {i18n(langIT, b)}</div>
            </div>
          ))}
        </div>
      </center>
    </>
  );
};
export default Bruschette;
