import React from 'react'
import "./header.css"
import logoConrado from '../../images/Logo_Conrado.svg'

export default function header() {
  return (
    <div className="header">
      <div className="accueil">
        <img className="logo" src={logoConrado} alt="Logo Conrado" />
      </div>
        <ul className="list">
          <li className="item">ACCUEIL</li>
          <li className="item">LOGOS</li>
          <li className="item">MOCKUPS</li>
          <li className="item">PAGE WEB</li>
          <li className="item">A PROPOS</li>
          <li className="item">CONTACT</li>
        </ul>
    </div>
  )
}
