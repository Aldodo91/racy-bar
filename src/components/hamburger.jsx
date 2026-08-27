import { useState } from "react";
import { scaleDown as Menu } from "react-burger-menu";
import "../style/hamburger.css";

const Sidebar = ({ lang, menuElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const it = lang === "it";

  // Gestisce l'apertura/chiusura nativa del burger menu
  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  // Funzione per lo scroll fluido e chiusura menu
  const scrollToSection = (id) => {
    setIsOpen(false); // Chiude il menu

    // Attende un istante per permettere al menu di iniziare a chiudersi prima di scorrere
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <Menu
      id="sidebar"
      isOpen={isOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
      <button
        className="menu-item link-btn"
        onClick={() => scrollToSection("special")}
      >
        Luxury
      </button>
      <button
        className="menu-item link-btn"
        onClick={() => scrollToSection("signature")}
      >
        Signature
      </button>

      {Boolean(menuElement?.hot?.length) && (
        <button
          className="menu-item link-btn"
          onClick={() => scrollToSection("hot")}
        >
          Hot Cocktails
        </button>
      )}

      <button
        className="menu-item link-btn"
        onClick={() => scrollToSection("diageo")}
      >
        Diageo
      </button>

      <button
        className="menu-item link-btn"
        onClick={() => scrollToSection("noAlcol")}
      >
        MockTails
      </button>

      <button
        className="menu-item link-btn"
        onClick={() => scrollToSection("wine")}
      >
        {it ? "Vini" : "Wine"}
      </button>

      <button
        className="menu-item link-btn"
        onClick={() => scrollToSection("distillati")}
      >
        {it ? "Distillati" : "Spirits"}
      </button>

      <button
        className="menu-item link-btn"
        onClick={() => scrollToSection("caffetteria")}
      >
        {it ? "Caffetteria" : "Coffee"}
      </button>

      <button
        className="menu-item link-btn"
        onClick={() => scrollToSection("food")}
      >
        Food
      </button>

      <button
        className="menu-item link-btn"
        onClick={() => scrollToSection("dessert")}
      >
        Dessert
      </button>

      {Boolean(menuElement?.merch?.length) && (
        <button
          className="menu-item link-btn"
          onClick={() => scrollToSection("merch")}
        >
          Merchandaising
        </button>
      )}
    </Menu>
  );
};

export default Sidebar;
