import { Link } from "react-router-dom"
import "./header.css"
import logoConrado from '../../Assets/Logo_Conrado.svg'

export default function header() {
  return (
    <div className="header">
      <div className="accueil">
        <img className="logo" src={logoConrado} alt="Logo Conrado" />
        <div className="containerHeaderLogoName">
          <span className="headerLogoName">CONRAD</span><span className="headerLogoName">EDISON</span>
        </div>
      </div>
        <ul className="list">
          <li className="item"><Link className="link" to="/accueil">TEST</Link></li>
          <li className="item"><Link className="link" to="/logos">LOGO</Link></li>
          <li className="item"><Link className="link" to="/mockups">MOCKUPS</Link></li>
          <li className="item"><Link className="link" to="/page_web">PAGE WEB</Link></li>
          <li className="item"><Link className="link" to="/a_propos">A PROPOS</Link></li>
          <li className="item"><Link className="link" to="/contact">CONTACT</Link></li>
        </ul>
    </div>
  )
}
