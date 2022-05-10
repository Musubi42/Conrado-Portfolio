var oldHref = document.location.href;

window.onload = function () {
  var bodyList = document.querySelector("body");

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;

        const networkButton = {
          BUTTON_INSTAGRAM: document.getElementById("buttonInstagram"),
          BUTTON_LINKEDIN: document.getElementById("buttonLinkedin"),
          BUTTON_MAIL: document.getElementById("buttonMail"),
        };

        const networkReferences = {
          REFERENCE_INSTAGRAM: document.getElementById("referenceInstagram"),
          REFERENCE_LINKEDIN: document.getElementById("referenceLinkedin"),
          REFERENCE_MAIL: document.getElementById("referenceMail"),
          REFERENCE_TELE: document.getElementById("referenceTel"),
        };

        document
          .getElementById("buttonInstagram")
          .addEventListener("click", function () {
            window.open("https://www.instagram.com/julien.boulet/", "_blank");
          });

        networkButton.BUTTON_LINKEDIN.addEventListener("click", function () {
          window.open(
            "https://www.linkedin.com/in/julien-boulet-a8a8b818b/",
            "_blank"
          );
        });

        networkButton.BUTTON_MAIL.addEventListener("click", function () {
          window.open("mailto:", "contact@conrad-edison.fr");
        });

        // Fonction pour afficher masquer le copier/actif
        const toggleClass = function (ARRAY_LOGOS) {
          // Logo Copier
          ARRAY_LOGOS[1].classList.add("displayActive");
          ARRAY_LOGOS[1].classList.remove("displayNone");
          // Logo copié
          ARRAY_LOGOS[0].classList.remove("displayActive");
          ARRAY_LOGOS[0].classList.add("displayNone");
        };

        const displayCopied = function (element) {
          const ARRAY_LOGOS = element.target.parentElement.children;
          if (ARRAY_LOGOS[1].classList[2] === "displayActive") {
            // Logo Copier
            ARRAY_LOGOS[1].classList.remove("displayActive");
            ARRAY_LOGOS[1].classList.add("displayNone");
            // Logo copié
            ARRAY_LOGOS[0].classList.add("displayActive");
            ARRAY_LOGOS[0].classList.remove("displayNone");
            window.setTimeout(function () {
              toggleClass(ARRAY_LOGOS);
            }, 1000);
          }
        };

        // When user click on the button, copy the text
        networkReferences.REFERENCE_INSTAGRAM.addEventListener(
          "click",
          function (el) {
            console.log(networkReferences.REFERENCE_INSTAGRAM);
            navigator.clipboard
              .writeText(
                networkReferences.REFERENCE_INSTAGRAM.firstChild.textContent
              )
              .then(
                function () {
                  displayCopied(el);
                },
                function (err) {
                  console.error("Could not copy text: ", err);
                }
              );
          }
        );

        networkReferences.REFERENCE_LINKEDIN.addEventListener(
          "click",
          function (el) {
            navigator.clipboard
              .writeText(
                networkReferences.REFERENCE_INSTAGRAM.firstChild.textContent
              )
              .then(
                function () {
                  displayCopied(el);
                },
                function (err) {
                  console.error("Could not copy text: ", err);
                }
              );
          }
        );

        networkReferences.REFERENCE_MAIL.addEventListener(
          "click",
          function (el) {
            navigator.clipboard
              .writeText(
                networkReferences.REFERENCE_INSTAGRAM.firstChild.textContent
              )
              .then(
                function () {
                  displayCopied(el);
                },
                function (err) {
                  console.error("Could not copy text: ", err);
                }
              );
          }
        );

        networkReferences.REFERENCE_TELE.addEventListener(
          "click",
          function (el) {
            navigator.clipboard
              .writeText(
                networkReferences.REFERENCE_INSTAGRAM.firstChild.textContent
              )
              .then(
                function () {
                  displayCopied(el);
                },
                function (err) {
                  console.error("Could not copy text: ", err);
                }
              );
          }
        );
      }
    });
  });

  var config = {
    childList: true,
    subtree: true,
  };

  observer.observe(bodyList, config);
};
