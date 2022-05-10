import React from "react";
import "./privacy.css";

export default function Privacy() {
  return (
    <div className="privacyMain">
      <h1 className="privacyTitle">POLITIQUE DE CONFIDENTIALITE</h1>
      <section>
        <article>
          <h3>Formulaire De Contact</h3>
          {/* TODO : Faire en sorte de break comme sur le mockup */}
          {/* TODO : Faire un script pour tester cette connerie de 3 portes */}
          <p>
            En utilisant le formulaire de contact du site, vous acceptez de
            revevoir une réponse par courrier électronique et acceptez que
            l'intégralité des informations entrées dans votre message soit
            archivée dans notre base de données, pour une durée maximale de 2
            ans.
          </p>
        </article>
        <article>
          <h3>Inscription Newsletter</h3>
          <p>
            En vous abonnant à notre newsletter, vous acceptez de recevoir nos
            lettres d'informations par courrier électronique. Nous ne partageons
            pas votre adresse mail avec d'autres marchands ou plateformes de
            mailing, elle sera uniquement utilisée par nos services afin de vous
            communiquer nos actualités.
          </p>
          <br />
          <p>
            Vous pouvez vous désinscrire à tout moment par le biais du
            formulaire de désinscription ci-dessous, le lien de désinscription
            présent dans nos newsletter ou en nous contactant sur
            contact@conrad-edison.fr
          </p>
          <div className="privacyNewsletterUnsubscribe">
            <input type="email" placeholder="Email à désinscrire" />
            <button>Se désinscrire</button>
          </div>
        </article>
        <article>
          <h3>Cookies</h3>
          <p>Le site n'utilise pour l'heure aucun cookies.</p>
        </article>
      </section>
    </div>
  );
}
