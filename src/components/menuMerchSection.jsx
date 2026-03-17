import React, { useState, useEffect } from "react";
import "../style/menuElement.css";
import { i18n } from "../common/functions";

const MenuMerchElement = ({ element, langIT }) => {
  const { imgs, nome, ricetta, cost } = element;

  const [isOpen, setIsOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Stato per gestire l'opacità dell'immagine del carosello
  const [fade, setFade] = useState(true);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  // Funzione per cambiare l'immagine con dissolvenza
  const changeImage = (newIndex) => {
    setFade(false); // Avvia la dissolvenza in uscita (opacity a 0)
    setTimeout(() => {
      setCurrentImgIndex(newIndex);
      setFade(true); // Avvia la dissolvenza in entrata (opacity a 1) con la nuova immagine
    }, 200); // Durata del fade-out in millisecondi (coordinato con il CSS)
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    const newIndex = (currentImgIndex + 1) % imgs.length;
    changeImage(newIndex);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    const newIndex =
      currentImgIndex === 0 ? imgs.length - 1 : currentImgIndex - 1;
    changeImage(newIndex);
  };

  // Gestione Swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <>
      <div className="drinkSpace">
        <div className="drinkCard">
          <div
            className="imageSide"
            onClick={() => setIsOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <img className="image" src={imgs[0]} width="105px" alt={nome} />
            {/* {imgs.length > 1 && (
              <span className="badge-count">+{imgs.length - 1}</span>
            )} */}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <div className="detailsMerch">
              <div className="titleCard">{nome}</div>
              <h5 className="recepie">{i18n(langIT, ricetta)}</h5>
            </div>
            <h5
              className="winePrice"
              style={{ alignSelf: "center", fontSize: "large" }}
            >
              {cost}
            </h5>
          </div>
        </div>
      </div>

      {/* Carosello con animazione Fade */}
      {isOpen && (
        <div className="carousel-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="carousel-container"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </button>

            {/* Aggiunta della classe fade condizionale */}
            <img
              src={imgs[currentImgIndex]}
              alt={`${nome} full`}
              className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
              draggable="false"
            />

            {imgs.length > 1 && (
              <>
                <button
                  className="nav-btn prev desktop-only"
                  onClick={prevImage}
                >
                  &#10094;
                </button>
                <button
                  className="nav-btn next desktop-only"
                  onClick={nextImage}
                >
                  &#10095;
                </button>
                <div className="image-counter">
                  {currentImgIndex + 1} / {imgs.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuMerchElement;
