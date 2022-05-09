import React from "react";
import "./contact.css";
import "../../Scripts/contact";
import logoConrado from "../../Assets/images/logo_conrado.svg";

export default function Contact() {
  return (
    <div className="contactMain">
      <div className="contactDivContact">
        <h1 className="contactTitleContact">CONTACTEZ MOI</h1>
        <div className="contactDivForm">
          <img
            src={logoConrado}
            alt="Logo de la marque conrad edison"
            className="contactLogoConrado"
          />
          <form action="submit" className="contactForm">
            {/* Je crois que je vais devoir faire une grid */}
            {/* Et placer les input dans grid columun et row */}
            <input
              className="contactInputName"
              type="text"
              placeholder="Nom/Prénom"
            />
            <input
              className="contactInputEmail"
              type="email"
              placeholder="Mail"
            />
            <input
              className="contactInputTel"
              type="tel"
              placeholder="Téléphone"
            />
            <input
              className="contactInputObjet"
              type="text"
              placeholder="Objet"
            />
            <div className="contactInputContainerDescription">
              <textarea
                name="description"
                id="description"
                placeholder="Description"
                // cols="30"
                // rows="10"
                className="contactInputDescription"
              ></textarea>
              <label className="contactInputNewsLetter">
                <input type="checkbox" />
                &nbsp;Cochez cette case afin de vous inscrire à ma newsletter
              </label>
            </div>
          </form>
        </div>
        <button className="contactButtonContact">SOUMETTRE</button>
      </div>
      {/* TODO : Faire l'inté des img avec CSS et en HTML pour tester */}
      {/* L'inté en SVG est plus simple pour la mise en forme */}
      <div className="contactNetwork">
        <h1 className="contactNetworkTitle">MES RESEAUX</h1>
        <div className="contactNetworkContainerLogos">
          <div className="contactNetworkLogo">
            <button className="contactNetworkLogoButton" id="buttonInstagram">
              <svg
                width="79"
                height="79"
                viewBox="0 0 79 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path
                  d="M21.5914 75.2736C11.7274 75.2736 3.72656 67.2508 3.72656 57.4087V21.5913C3.72656 11.7492 11.7493 3.72644 21.5914 3.72644H57.3869C67.251 3.72644 75.2518 11.7492 75.2518 21.5913V57.3868C75.2518 67.2508 67.2291 75.2517 57.3869 75.2517H21.5914V75.2736Z"
                  fill="#F2CD46"
                />
                <path
                  d="M57.4087 7.45283C65.2123 7.45283 71.5472 13.8097 71.5472 21.5913V57.3868C71.5472 65.1903 65.1903 71.5252 57.4087 71.5252H21.5913C13.7877 71.5252 7.45283 65.1684 7.45283 57.3868V21.5913C7.45283 13.8097 13.8097 7.45283 21.5913 7.45283H57.4087ZM57.4087 0H21.5913C9.66676 0 0 9.66676 0 21.5913V57.3868C0 69.3113 9.66676 78.9781 21.5913 78.9781H57.3868C69.3113 78.9781 78.9781 69.3113 78.9781 57.3868V21.5913C79 9.66676 69.3332 0 57.4087 0Z"
                  fill="currentColor"
                />
                <path
                  d="M39.4996 56.5538C48.9182 56.5538 56.5535 48.9186 56.5535 39.5C56.5535 30.0814 48.9182 22.4462 39.4996 22.4462C30.0811 22.4462 22.4458 30.0814 22.4458 39.5C22.4458 48.9186 30.0811 56.5538 39.4996 56.5538Z"
                  fill="#F2CD46"
                />
                <path
                  d="M39.4998 25.8657C47.0403 25.8657 53.156 31.9814 53.156 39.5219C53.156 47.0625 47.0403 53.1782 39.4998 53.1782C31.9593 53.1782 25.8436 47.0625 25.8436 39.5219C25.8436 31.9814 31.9593 25.8657 39.4998 25.8657ZM39.4998 19.0705C28.2329 19.0705 19.0703 28.2331 19.0703 39.5C19.0703 50.7669 28.2329 59.9515 39.5218 59.9515C50.8106 59.9515 59.9732 50.7889 59.9732 39.5C59.9732 28.2112 50.7668 19.0705 39.4998 19.0705Z"
                  fill="currentColor"
                />
                <path
                  d="M60.7627 23.4326C63.5713 23.4326 65.8482 21.1557 65.8482 18.3471C65.8482 15.5385 63.5713 13.2617 60.7627 13.2617C57.9541 13.2617 55.6772 15.5385 55.6772 18.3471C55.6772 21.1557 57.9541 23.4326 60.7627 23.4326Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <span
              className="contactNetworkLogoButtonName"
              id="referenceInstagram"
            >
              @conrad_ception
              <i className="fa-solid fa-check displayNone">
                <label htmlFor="text">COPIÉ</label>
              </i>
              <i className="fa-solid fa-clone displayActive">
                <label htmlFor="text">COPIER</label>
              </i>
            </span>
          </div>
          <div className="contactNetworkLogo">
            <button className="contactNetworkLogoButton" id="buttonLinkedin">
              <svg
                width="76"
                height="73"
                viewBox="0 0 76 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path
                  d="M12.5391 73H1.3859C0.620354 73 0 72.376 0 71.6059V21.4565C0 20.6864 0.620354 20.0624 1.3859 20.0624H12.5391C13.3046 20.0624 13.925 20.6864 13.925 21.4565V71.6059C13.925 72.376 13.2914 73 12.5391 73Z"
                  fill="#1B3461"
                />
                <path
                  d="M7.47065 12.9722H6.45433C2.89059 12.9722 0 10.0777 0 6.49272C0 2.90778 2.89059 0 6.45433 0H7.47065C11.0344 0 13.925 2.90778 13.925 6.49272C13.925 10.0777 11.0344 12.9722 7.47065 12.9722Z"
                  fill="#1B3461"
                />
                <path
                  d="M76 40.1513V72.0042C76 72.5486 75.5644 73 75.0101 73H63.0649C62.5238 73 62.075 72.5618 62.075 72.0042V46.02C62.075 40.3106 61.7714 36.6195 61.1775 34.9465C60.5835 33.2735 59.6068 31.9723 58.2737 31.0429C56.9274 30.1135 55.3171 29.6488 53.4297 29.6488C51.0142 29.6488 48.8364 30.3126 46.9225 31.6404C44.9955 32.9682 43.6888 34.7208 42.976 36.9116C42.2633 39.1024 41.9069 43.152 41.9069 49.0473V71.8714C41.9069 72.1768 41.7881 72.4556 41.5769 72.6548C41.3789 72.8539 41.1018 72.9867 40.7982 72.9867H28.9323C28.4043 72.9867 27.9819 72.5618 27.9819 72.0307V21.0183C27.9819 20.4872 28.4043 20.0624 28.9323 20.0624H40.0194C40.4022 20.0624 40.7322 20.2881 40.8774 20.6067C40.9434 20.7262 40.9698 20.8723 40.9698 21.0183V27.7102C45.5498 21.8814 51.3178 18.9603 58.2605 18.9603C60.7683 18.9603 63.0913 19.3321 65.2428 20.0624C65.7443 20.235 66.2327 20.4209 66.7079 20.6333C69.2553 21.7486 71.1824 23.1693 72.4891 24.8821C73.7958 26.6082 74.7065 28.56 75.2213 30.7508C75.7492 32.9416 76 36.0751 76 40.1513Z"
                  fill="#1B3461"
                />
              </svg>
            </button>
            <span
              className="contactNetworkLogoButtonName"
              id="referenceLinkedin"
            >
              conrad.gonzalez
              <i className="fa-solid fa-check displayNone">
                <label htmlFor="text">COPIÉ</label>
              </i>
              <i className="fa-solid fa-clone displayActive">
                <label htmlFor="text">COPIER</label>
              </i>
            </span>
          </div>

          <div className="contactNetworkLogo">
            <button className="contactNetworkLogoButton" id="buttonMail">
              <svg
                width="82"
                height="62"
                viewBox="0 0 82 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Adresse mail</title>
                <path
                  d="M82 7.64775V56.3627C82 59.477 79.4887 62 76.3888 62H63.3516V30.1475L57.191 34.8288L41.0736 47.079L24.9659 34.8288L18.7171 30.0785V62H5.78777C2.58978 62 0 59.3982 0 56.1853V8.78112C0 3.93228 3.9141 0 8.74052 0C9.59397 0 10.4474 0.137975 11.242 0.413925C12.0464 0.680019 12.8018 1.08409 13.4885 1.60642L18.7171 5.57813L41.0736 22.5786L63.3418 5.64712L67.8837 2.19774C69.7574 0.768717 72.0431 0 74.3876 0C76.4869 0 78.39 0.857415 79.7732 2.23716C81.1465 3.62677 82 5.53871 82 7.64775Z"
                  fill="#1B3461"
                />
              </svg>
            </button>
            <span className="contactNetworkLogoButtonName" id="referenceMail">
              contact@conrad-edison.fr
              <i className="fa-solid fa-check displayNone">
                <label htmlFor="text">COPIÉ</label>
              </i>
              <i className="fa-solid fa-clone displayActive">
                <label htmlFor="text">COPIER</label>
              </i>
            </span>
          </div>

          <div className="contactNetworkLogo">
            <button className="contactNetworkLogoButton">
              <svg
                width="73"
                height="75"
                viewBox="0 0 73 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Téléphone</title>
                <path
                  d="M72.7522 61.0489C70.7564 63.2734 64.7835 69.5198 56.7129 74.2045C47.6808 79.4491 25.0859 57.3365 20.8612 53.0643C20.8029 53.0201 20.7446 52.9759 20.7009 52.9317C16.6219 48.5416 -4.57448 25.0148 0.888505 16.043C5.76877 8.0289 12.1204 2.18034 14.3784 0.221003C14.8155 -0.162026 15.4856 -0.0441708 15.7915 0.441981L26.3096 17.8551C26.5427 18.2381 26.4698 18.7537 26.1348 19.0631C20.8029 23.8951 20.395 24.2782 20.395 24.2782C16.0246 28.2558 26.1202 42.0006 28.553 45.1827C28.5676 45.2122 28.5822 45.2269 28.5967 45.2564C28.6405 45.2858 28.6842 45.3153 28.7279 45.3447C31.7871 47.8934 45.0731 58.5298 49.1376 54.2281C49.1376 54.2281 49.5163 53.8303 54.4694 48.5858C54.7754 48.2617 55.2852 48.188 55.664 48.4384L72.5628 59.6052C73.0581 59.9293 73.1455 60.607 72.7522 61.0489Z"
                  fill="#1B3461"
                />
                <defs>
                  <clipPath id="clip0_123_401">
                    <rect width="73" height="75" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span className="contactNetworkLogoButtonName" id="referenceTel">
              (+33)3 33 33 33 33
              <i className="fa-solid fa-check displayNone">
                <label htmlFor="text">COPIÉ</label>
              </i>
              <i className="fa-solid fa-clone displayActive">
                <label htmlFor="text">COPIER</label>
              </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
