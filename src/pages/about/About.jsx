import React from "react";
// import { Link } from "react-router-dom";
import "./about.css";
// import imageConrado from "../../Assets/images/ricardo_milanos.png";

export default function About() {
  return (
    <div className="aboutMain">
      <div className="aboutTitle">A PROPOS</div>
      <div className="aboutContainer">
        <div className="aboutPresentation">
          <p className="aboutTextPrensetation"></p>
          <p className="aboutTextPrensetation"></p>
          {/* TODO : Faire le link vers la page contact */}
          <p className="aboutTextPrensetation">
            Notre équipe est spécialisée dans le personnal branding
            d’influenceurs motivation, notre objectif est de créer une identité
            forte et unique et ainsi d’augmenter les rendements de nos
            partenaires de façon pérenne.
            <br /> <br />
            Consultez-nous, nous ferons en sorte de mettre un doigt sur ce qui
            freine votre ascension professionnelle et nous vous guiderons afin
            de capter au mieux les besoins de votre audience.
            <br />
            <br />
            Au plaisir de travailler à vos côtés !
            {/* prennez contact avec nous <Link to="/contact">ICI</Link>. */}
          </p>
        </div>
        {/* <img
          className="aboutImagePrensetation"
          src={imageConrado}
          alt="de Conrado"
        /> */}
      </div>
    </div>
  );
}
