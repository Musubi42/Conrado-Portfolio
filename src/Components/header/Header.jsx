import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./header.css";
import logoConrado from "../../Assets/logo_conrado.svg";

export default function header() {
  return (
    <div className="header">
      <div className="accueil">
        <img className="logo" src={logoConrado} alt="Logo Conrado" />
        <div className="containerHeaderLogoName">
          <span className="headerLogoName">CONRAD</span>
          <span className="headerLogoName">EDISON</span>
        </div>
      </div>
      <ul className="headerList">
        <li className="headerItem">
          <NavLink className="link" to="logo">
            Logo
          </NavLink>
        </li>
        <li className="headerItem">
          <Link className="link" to="/accueil">
            ACCUEIL
          </Link>
        </li>
        <li className="headerItem">
          <Link className="link" to="/logo">
            LOGO
          </Link>
        </li>
        <li className="headerItem">
          <Link className="link" to="/mockup">
            MOCKUPS
          </Link>
        </li>
        <li className="headerItem">
          <Link className="link" to="/page_web">
            PAGE WEB
          </Link>
        </li>
        <li className="headerItem">
          <Link className="link" to="/a_propos">
            A PROPOS
          </Link>
        </li>
        <li className="headerItem">
          <Link className="link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}
