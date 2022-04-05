import React from 'react'
import { Link } from 'react-router-dom'
import "./about.css"
import imageConrado from '../../Assets/Ricardo_Milanos.png'

export default function About() {
  return (
    <div className="aboutMain">
      <div className="aboutTitle">A PROPOS</div>
      <div className="aboutContainer">
        <div className="aboutPresentation">
          <p className="aboutTextPrensetation">Mentor, Consultant et Coach sont les compétences que j'ai durement acquises durant plusieurs années de recherche, de questionnement et de mise en pratique.</p>
          <p className="aboutTextPrensetation">Après avoir réalisé plusieurs livres et formations dans le domaine du développement pernneil, je suis à même de répondre à vos besoins le splus profonds et de faire que vos souhaits deviennet réalité, à condition que vous décidiez de prendre votre vie en main.</p>
          <p className="aboutTextPrensetation">Si vous souhaitez devenir maître de votre vie au lieu de la subir, prennez contact avez nous ICI.</p>
        </div>
        <img className="aboutImagePrensetation" src={imageConrado} alt="de Conrado"/>
      </div>
    </div>
  )
}
