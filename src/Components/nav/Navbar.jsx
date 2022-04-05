import React from 'react'
import {NavLink} from 'react-router-dom'
// FIXME: Le CSS casse les liens, le css du footer fonctionne donc s'en inpirer
import "./navbar.css"
import logoConrado from '../../Assets/Logo_Conrado.svg'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarAccueil">
        {/* TODO : Link to accueil when click on logo */}
        <img src={logoConrado} alt="Logo Conrado" className="navbarLogo" />
        <div className="navbarContainerLogoName">
          <span className="navbarLogoName">CONRAD</span><span className="navbarLogoName">EDISON</span>
        </div>
      </div>
      <ul className="navbarList">
        <li className="navbarItem"><NavLink className="link" to="accueil" >ACCUEIL</NavLink></li>
        <li className="navbarItem"><NavLink className="link" to="logo" >LOGO</NavLink></li>
        <li className="navbarItem"><NavLink className="link" to="mockup" >MOCKUPS</NavLink></li>
        <li className="navbarItem"><NavLink className="link" to="page_web" >PAGE WEB</NavLink></li>
        <li className="navbarItem"><NavLink className="link" to="a_propos" >A PROPOS</NavLink></li>
        <li className="navbarItem"><NavLink className="link" to="contact" >CONTACT</NavLink></li>
      </ul>
    </div>
  )
}
