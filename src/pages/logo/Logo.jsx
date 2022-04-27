import React from "react";
import "./logo.css";
// import logoConrado from "../../Assets/logo_conrado.svg";
import logoLes3Caps from "../../Assets/images/Logos/logo_les_3_caps.jpg";
import logoRoswell from "../../Assets/images/Logos/logo_roswell.jpg";
import logoGiorno2077 from "../../Assets/images/Logos/logo_giorno_2077.jpg";
import logoLorenzo from "../../Assets/images/Logos/logo_lorenzo_scimone.jpg";
import logoFondationMagister from "../../Assets/images/Logos/logo_fondation_magister.jpg";
import logoRedPill from "../../Assets/images/Logos/logo_red_pill.jpg";
import logoBaki from "../../Assets/images/Logos/logo_baki.jpg";
import logoJeromePoisson from "../../Assets/images/Logos/logo_jerome_poisson.jpg";

export default function Logo() {
  return (
    <div className="logoMain">
      <h1 className="logoTitle">logo</h1>
      <div className="logoContainer">
        {/* Venir ajouter les logo à la suite */}
        <img className="logoItems" src={logoLes3Caps} alt="" />
        <img className="logoItems" src={logoRoswell} alt="" />
        <img className="logoItems" src={logoGiorno2077} alt="" />
        <img className="logoItems" src={logoLorenzo} alt="" />
        <img className="logoItems" src={logoFondationMagister} alt="" />
        <img className="logoItems" src={logoBaki} alt="" />
        <img className="logoItems" src={logoRedPill} alt="" />
        <img className="logoItems" src={logoJeromePoisson} alt="" />
        {/* <img className="logoItems" src="" alt="" />
        <img className="logoItems" src="" alt="" />
        <img className="logoItems" src="" alt="" /> */}
      </div>
    </div>
  );
}
