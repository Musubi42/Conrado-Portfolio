document.addEventListener("readystatechange", () => {
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

  networkButton.BUTTON_INSTAGRAM.addEventListener("click", function () {
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
    // L'emplacement des logos est :
    // 1: copier
    // 2: active

    // L'emplacement de la classe display est :
    // 1: displayNone/displayActive
    // console.log(element.nextSibling.c);
    const ARRAY_LOGOS = element.originalTarget.parentElement.children;
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
    } else {
    }
  };

  // When user click on the button, copy the text
  networkReferences.REFERENCE_INSTAGRAM.addEventListener(
    "click",
    function (el) {
      navigator.clipboard
        .writeText(networkReferences.REFERENCE_INSTAGRAM.innerHTML)
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

  networkReferences.REFERENCE_LINKEDIN.addEventListener("click", function (el) {
    navigator.clipboard
      .writeText(networkReferences.REFERENCE_LINKEDIN.innerHTML)
      .then(
        function () {
          displayCopied(el);
        },
        function (err) {
          console.error("Could not copy text: ", err);
        }
      );
  });

  networkReferences.REFERENCE_MAIL.addEventListener("click", function (el) {
    navigator.clipboard
      .writeText(networkReferences.REFERENCE_MAIL.innerHTML)
      .then(
        function () {
          displayCopied(el);
        },
        function (err) {
          console.error("Could not copy text: ", err);
        }
      );
  });

  networkReferences.REFERENCE_TELE.addEventListener("click", function (el) {
    navigator.clipboard
      .writeText(networkReferences.REFERENCE_TELE.innerHTML)
      .then(
        function () {
          displayCopied(el);
        },
        function (err) {
          console.error("Could not copy text: ", err);
        }
      );
  });
});

// do {
//   console.log("hi");
// } while (!document.getElementById("buttonInstagram"));

console.log("no");
