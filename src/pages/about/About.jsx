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
          <p className="aboutTextPrensetation"></p>
          <p className="aboutTextPrensetation"></p>
          {/* TODO : Faire le link vers la page contact */}
          <p className="aboutTextPrensetation">
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
