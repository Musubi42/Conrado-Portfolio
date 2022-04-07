import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

export default function Home() {
  return (
  <div className="homeBGI">
    {/* <div className="homeBGI"></div> */}
    <div className="quote">UN TRAVAIL QUALITATIF DOIT PRIMER SUR UN TRAVAIL ORIGINAL</div>
    <div className="text">Dans le monde du design beaucoup essaie d'être original à tout prix quitte à proposer des rendus de moins bonnes qualité. Ce n'est pas mon cas. C'est avec cette conviction que je mets mes compétences en pratique. Ce dont vous avez besoin, ce que j epeux vous apporter , faites-vous une brève opinion de ce que vous pouvez obtenir en travaillant à mes côtés à l'aide de mon portfolio.</div>
    {/* TODO : Faire un Link vers la page de formulaire de contact */}
    <button className="contact"><Link className="link" to="/contact">ME CONTACTER</Link></button>
  </div>
  )
}
