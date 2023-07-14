import React from "react";
import wine from "./../assets/wine.gif";
import "../style/coriandoli.css";

const Coriandoli = ({ langIt }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const oggi = new Date();
    const dataConfronto = new Date(oggi.getFullYear(), 6, 14); // 14 Luglio
    //const dataConfronto = new Date(oggi); // DEBUG

    if (
      oggi.getDate() === dataConfronto.getDate() &&
      oggi.getMonth() === dataConfronto.getMonth()
    ) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 1995);

      return () => {
        clearTimeout(timer); // Pulizia del timeout quando il componente viene smontato
      };
    }
  }, []);

  return (
    show && (
      <div className="overlay">
        <div className="background">
          <h1 className="scritta mt">
            {langIt ? "Buon Compleanno Racy" : "Happy Birthday Racy"}
          </h1>
          <div className="imageContainer">
            <img src={wine} alt="animated Gif" />
          </div>
        </div>
      </div>
    )
  );
};

export default Coriandoli;
