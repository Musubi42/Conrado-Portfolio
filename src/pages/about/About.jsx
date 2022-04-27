import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import imageConrado from "../../Assets/images/ricardo_milanos.png";

export default function About() {
  return (
    <div className="aboutMain">
      <div className="aboutTitle">A PROPOS</div>
      <div className="aboutContainer">
        <div className="aboutPresentation">
          <p className="aboutTextPrensetation">
            Mentor, Consultant et Coach sont les compétences que j'ai durement
            acquises durant plusieurs années de recherche, de questionnement et
            de mise en pratique.
          </p>
          <p className="aboutTextPrensetation">
            Après avoir réalisé plusieurs livres et formations dans le domaine
            du développement personnel, je suis à même de répondre à vos besoins
            les plus profonds et de faire que vos souhaits deviennent réalité, à
            condition que vous décidiez de prendre votre vie en main.
          </p>
          {/* TODO : Faire le link vers la page contact */}
          <p className="aboutTextPrensetation">
            Si vous souhaitez devenir maître de votre vie au lieu de la subir,
            prennez contact avec nous <Link to="/contact">ICI</Link>.
          </p>
        </div>
        <img
          className="aboutImagePrensetation"
          src={imageConrado}
          alt="de Conrado"
        />
      </div>
    </div>
  );
}
