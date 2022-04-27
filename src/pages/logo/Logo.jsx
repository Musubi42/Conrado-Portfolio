import React from "react";
import "./logo.css";
// import logoConrado from "../../Assets/logo_conrado.svg";
import logoRedPill from "../../Assets/images/Logos/logo_red_pill.jpg";
import logoRoswell from "../../Assets/images/Logos/logo_roswell.jpg";
import logoLorenzo from "../../Assets/images/Logos/logo_lorenzo_scimone.jpg";
import logoBaki from "../../Assets/images/Logos/logo_baki_fond_noir.jpg";
import logoJPCarrelage from "../../Assets/images/Logos/logo_jp_carrelage.jpg";

export default function Logo() {
  return (
    <div className="logoMain">
      <h1 className="logoTitle">logo</h1>
      <div className="logoContainer">
        {/* Venir ajouter les logo à la suite */}
        <img className="logoItems" src={logoRedPill} alt="" />
        <img className="logoItems" src={logoRoswell} alt="" />
        <img className="logoItems" src={logoLorenzo} alt="" />
        <img className="logoItems" src={logoBaki} alt="" />
        <img className="logoItems" src={logoJPCarrelage} alt="" />
        {/* <img className="logoItems" src="" alt="" />
        <img className="logoItems" src="" alt="" />
        <img className="logoItems" src="" alt="" /> */}
      </div>
    </div>
  );
}
