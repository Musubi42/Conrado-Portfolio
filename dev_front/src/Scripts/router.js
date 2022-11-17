document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(e) {

        console.log(e.target.innerText);
        var hostname = window.location.hostname 
        switch (e.target.innerText) {
            case "Accueil":
                document.location = hostname + "/";
                console.log(hostname + "/");
                break;
            case "À propos":
                document.location = hostname + "/about";
                break;
            case "Blog":
                document.location = hostname + "/blog";
                break;
            case "Coaching YT":
                document.location = hostname + "/coaching_youtube";
                break;
            case "Contact":
                document.location = hostname + "/contact";
                break;
            case "Création":
                document.location = hostname + "/creation/branding";
                break;
            case "BRANDING":
                document.location = hostname + "/creation/branding";
                break;
            case "MAQUETTE WEB":
                document.location = hostname + "/creation/maquette_web";
                break;
            case "MOCKUPS":  
                document.location = hostname + "/creation/mockups";
                break;
            case "FAQS":
                document.location = hostname + "/creation/FAQ";
                break;
            case "MENTIONS LÉGALES":
                document.location = hostname + "/mentions_legales";
                break;
            case "POLITIQUE CONFIDENTIALITÉ":
                document.location = hostname + "/politique_confidentialite";
                break;
            default:
                document.location = hostname + "/";
                break;
        }
    });
});
