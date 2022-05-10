import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="homeBGI">
      {/* <div className="homeBGI"></div> */}
      <div className="homeQuote">
        "UN TRAVAIL QUALITATIF DOIT PRIMER SUR UN TRAVAIL ORIGINAL"
      </div>
      <div className="homeText">
        Dans le monde du design beaucoup essaie d'être original à tout prix
        quitte à proposer des contenus de moins bonnes qualité. Ce n'est pas
        notre cas. Chez Conrad Edison Agency nous mettons en avant la qualité de
        nos services. Ce dont vous avez besoin, forgez-votre opinion de ce que
        nous pouvons vous garantir à travers l'étendu de notre site.
      </div>
      {/* TODO : Faire un Link vers la page de formulaire de contact */}
      <button className="homeContact">
        <Link className="link" to="/contact">
          NOUS CONTACTER
        </Link>
      </button>
    </div>
  );
}
