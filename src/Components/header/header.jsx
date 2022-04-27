import React from "react";
import { NavLink } from "react-router-dom";
// FIXME: Le CSS casse les liens, le css du footer fonctionne donc s'en inpirer
import "./header.css";
import logoConrado from "../../Assets/images/logo_conrado.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarAccueil">
        {/* TODO : Link to accueil when click on logo */}
        <img src={logoConrado} alt="Logo Conrado" className="navbarLogo" />
        <div className="navbarContainerLogoName">
          <span className="navbarLogoName">CONRAD</span>
          <span className="navbarLogoName">EDISON</span>
        </div>
      </div>
      <ul className="navbarList">
        <li className="navbarItem">
          <NavLink className="link" to="accueil">
            ACCUEIL
          </NavLink>
        </li>
        <li className="navbarItem">
          <span className="dropdown right">
            CREATION <i></i>
          </span>
          <ul>
            <li className="navbarItem">
              <NavLink className="link" to="page_web">
                PAGE WEB
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink className="link" to="logo">
                LOGOS
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink className="link" to="mockup">
                MOCKUPS
              </NavLink>
            </li>
            <li className="navbarItem">
              <NavLink className="link" to="banniere">
                BANNIERE
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="navbarItem">
          <NavLink className="link" to="temoignage">
            TEMOIGNAGES
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink className="link" to="contact">
            CONTACT
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink className="link" to="a_propos">
            A PROPOS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
