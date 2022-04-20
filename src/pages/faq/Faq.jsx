import React from "react";
import "./faq.css";

// TODO : Pour chaque question faire un menu déroulant trop stylax
export default function Faq() {
  return (
    <div className="faqMain">
      <h1 className="faqTitle">FOIRE AUX QUESTIONS</h1>
      <section>
        <article className="faqQuestion">
          <h3>Dans quel format sont fournis les logos que vous réalisez ?</h3>
          <div className="faqCollapsibleAnswer">
            <p>
              Lorsque je réalise un logo, celui-ci vous est fournis en
              différents fichiers :{" "}
            </p>
            <br />
            <p>SVG, AI, EPS, PDF (formats vectoriels)</p>
            <br />
            <p>PNG, JPG, JPEG (formats rasterisés)</p>
            <br />
            <br />
            <p>
              Le vectoriel vous permet d'agrandir autant que possible sans
              perdre en qualité d'image.
            </p>
            <br />
            <p>
              Le pixel lui est plus adapté pour des supports numériques mais n
              epeut être agrandi sous peine de perdre en qualité.
            </p>
          </div>
        </article>
        <article className="faqQuestion">
          <h3>Comment évaluez-vous le montant de votre prestation ?</h3>
          <div className="faqCollapsibleAnswer">
            <p>
              Avant chaque prestation, un questionnaire vous est transmis afin
              d'évaluer vos besoins.
            </p>
            <br />
            <p>
              Suite aux résultats obtenus nous engagerons un dialogue afin de
              convenir à l'offre qui vous correspond.
            </p>
            <br />
            <p>
              Pour rappel, le TJM (Taux Journaliser Minimal) d'un graphiste
              débutant est de 300€.
            </p>
            <br />
            <p>
              Pour ma part, je préfère travailler à la prestation quitte à
              prendre plus de temps, afin de ne pas pénaliser mes clients.
            </p>
            <br />
          </div>
        </article>
        <article className="faqQuestion">
          <h3>Quels sont les types de paiments acceptés ?</h3>
          <div className="faqCollapsibleAnswer">
            <p>
              Les paiements via paypal ainsi que toutes les autres transactions
              bancaires sont acceptés.
            </p>
            <br />
            <p>
              Selon le niveau de la prestation il est possible de payer en
              plusieurs fois.
            </p>
            <br />
            <p>
              Le paiement se fait après la prestation au cas où vous
              souhaiteriez obtenir d'avantages de prestations tel que la
              création de motifs ou de pictogrammes pour accompagner votre
              identité graphique.
            </p>
            <br />
          </div>
        </article>
      </section>
    </div>
  );
}
