import './footer.css'

// TODO: Je n'arrive pas à régler correctement la font-size te caller le watermark
export default function footer() {
  return (
    <div className="footer">
      <div className="footerGauche">
          <span className="footerWatermark">CONRAD DESIGN 2022 TOUS DROIT RESERVES</span>
      </div>
      <div className="footerMilieu">
        <ul className="footerList">
          <li className="footerItem"><a href="#">MENTIONS LEGALES</a></li>
          <li className="footerItem"><a href="#">FAQ</a></li>
          <li className="footerItem"><a href="#">POLITIQUE DE CONFIDENTIALITE</a></li>
        </ul>
      </div>
      <div className="footerDroite">
      </div>
    </div>
  )
}
