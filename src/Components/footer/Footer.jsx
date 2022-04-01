import React from 'react'
import { Link } from "react-router-dom"
import './footer.css'

// TODO: Je n'arrive pas à régler correctement la font-size te caller le watermark
export default function footer() {
  return (
    <div className="footer">
      <div className="footerGauche">
      </div>
      <div className="footerMilieu">
        <ul className="footerList">
          <li className="footerItem" style={{cursor: "unset", fontWeight: 400 }}>CONRAD DESIGN 2022 TOUS DROIT RESERVES</li>
          <li className="footerItem"><Link className="link" to="/mentions_legales">MENTIONS LEGALES</Link></li>
          <li className="footerItem"><Link className="link" to="/faq">FAQ</Link></li>
          <li className="footerItem"><Link className="link" to="/politique_de_confidentialite">POLITIQUE DE CONFIDENTIALITE</Link></li>
        </ul>
      </div>
      <div className="footerDroite">
      </div>
    </div>
  )
}
