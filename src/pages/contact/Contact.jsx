import React from "react";
import "./contact.css";
import logoConrado from "../../Assets/Logo_Conrado.svg";

export default function Contact() {
  return (
    <div className="contactMain">
      <div className="contactDivContact">
        <h1 className="contactTitleContact">CONTACTEZ MOI</h1>
        <div className="contactDivForm">
          <img
            src={logoConrado}
            alt="Logo de la marque conrad edison"
            className="contactLogoConrado"
          />
          <form action="submit" className="contactForm">
            <input
              className="contactInput"
              type="text"
              placeholder="Nom/Prénom"
            />
            <input className="contactInput" type="email" placeholder="Mail" />
            <input
              className="contactInput"
              type="tel"
              placeholder="Téléphone"
            />
            <input className="contactInput" type="text" placeholder="Objet" />
            <input
              className="contactInput"
              type="text"
              placeholder="Description"
            />
          </form>
        </div>
        <button className="contactButtonContact">SOUMETTRE</button>
      </div>
      {/* TODO : Faire l'inté des img avec CSS et en HTML pour tester */}
      <div className="contactNetworks">
        <h1 className="contactNetworkTitle">CONTACT</h1>
        <div className="contactNetwork">
          <div className="contactNetworkDiv">
            <button className="contactNetworkButton"></button>
            <span className="contactNetworkNameButton"></span>
          </div>
          <div className="contactNetworkDiv">
            <button className="contactNetworkButton"></button>
            <span className="contactNameNetworkButton"></span>
          </div>

          <div className="contactNetworkDiv">
            <button className="contactNetworkButton"></button>
            <span className="contactNetworkNameButton"></span>
          </div>

          <div className="contactNetworkDiv">
            <button className="contactNetworkButton"></button>
            <span className="contactNetworkNameButton"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
