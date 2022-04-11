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
            {/* Je crois que je vais devoir faire une grid */}
            {/* Et placer les input dans grid columun et row */}
            <input
              className="contactInputName"
              type="text"
              placeholder="Nom/Prénom"
            />
            <input
              className="contactInputEmail"
              type="email"
              placeholder="Mail"
            />
            <input
              className="contactInputTel"
              type="tel"
              placeholder="Téléphone"
            />
            <input
              className="contactInputObjet"
              type="text"
              placeholder="Objet"
            />
            <div className="contactInputContainerDescription">
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                // cols="30"
                // rows="10"
                className="contactInputDescription"
              ></textarea>
              <label className="contactInputNewsLetter">
                <input type="checkbox" />
                &nbsp;Cochez cette case afin de vous inscrire à ma newsletter
              </label>
            </div>
            {/* <input
              type="checkbox"
              id="contactInputNewsletter"
              className="contactInputNewsletter"
            />
            <label for="contactInputNewsletter">
              Cochez cette case afin de vous inscrire à ma newsletter
            </label> */}
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
