var oldHref = document.location.href;

// TODO: Changer les URL Instage et Linkedin
window.onload = function () {
  var bodyList = document.querySelector("body");

  // var observer = new MutationObserver(function (mutations) {
  //   mutations.forEach(function (mutation) {
  //     if (oldHref !== document.location.href) {
  //       oldHref = document.location.href;

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
          ARRAY_LOGOS[0].classList.add("active");
          ARRAY_LOGOS[0].classList.remove("hidden");
          // Logo copié
          ARRAY_LOGOS[1].classList.remove("active");
          ARRAY_LOGOS[1].classList.add("hidden");
        };

        const displayLogoCopied = function (element) {
          // On change le texte
          var text = element.target.parentElement.parentElement.parentElement.children[2];
          text.innerHTML = "Copié"; 
          // On change les logos
          const ARRAY_LOGOS = element.target.parentElement.parentElement.children;
          if (ARRAY_LOGOS[0].classList[2] === "active") {
            // Logo Copier
            ARRAY_LOGOS[0].classList.remove("active");
            ARRAY_LOGOS[0].classList.add("hidden");
            // Logo copié
            ARRAY_LOGOS[1].classList.remove("hidden");
            ARRAY_LOGOS[1].classList.add("active");
            window.setTimeout(function () {
              toggleClass(ARRAY_LOGOS);
              // On change le texte
              text.innerHTML = "Copier"; 
            }, 1000);
          }
        };


        // When user click on the button, copy the text
        networkReferences.REFERENCE_INSTAGRAM.addEventListener(
          "click",
          function (el) {
            navigator.clipboard
              .writeText(
                "@conrad_ception"
              )
              .then(
                function () {
                  displayLogoCopied(el);
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
                "conrad.gonzalez"
              )
              .then(
                function () {
                  displayLogoCopied(el);
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
            // console.log(el.target.parentElement.parentElement.parentElement.innerText);
            navigator.clipboard
              .writeText(
                "contact@conrad-edison.fr"
              )
              .then(
                function () {
                  displayLogoCopied(el);
                },
                function (err) {
                  console.error("Could not copy text: ", err);
                }
              );
          }
        );

        // networkReferences.REFERENCE_TELE.addEventListener(
        //   "click",
        //   function (el) {
        //     navigator.clipboard
        //       .writeText(
        //         el.target.parentElement.parentElement.children[0].innerHTML
        //       )
        //       .then(
        //         function () {
        //           displayLogoCopied(el);
        //         },
        //         function (err) {
        //           console.error("Could not copy text: ", err);
        //         }
        //       );
        //   }
        // );
      // }
  //   });
  // });

  // var config = {
  //   childList: true,
  //   subtree: true,
  // };

  // observer.observe(bodyList, config);
};