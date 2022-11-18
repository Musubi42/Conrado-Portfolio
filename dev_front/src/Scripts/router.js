document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(e) {
        console.log(e.target.getAttribute('data-url'));
        switch (e.target.getAttribute('data-url')) {
            case "home":
                document.location = "https://conrad-edison.fr/";
                break;
            case "about":
                document.location = "https://conrad-edison.fr/a_propos";
                break;
            case "blog":
                document.location = "https://conrad-edison.fr/blog";
                break;
            case "coaching_yt":
                document.location = "https://conrad-edison.fr/coaching_youtube";
                break;
            case "contact":
                document.location = "https://conrad-edison.fr/contact";
                break;
            case "creation":
                document.location = "https://conrad-edison.fr/creation/branding";
                break;
            case "branding":
                document.location = "https://conrad-edison.fr/creation/branding";
                break;
            case "maquette_web":
                document.location = "https://conrad-edison.fr/creation/maquette_web";
                break;
            case "mockups":  
                document.location = "https://conrad-edison.fr/creation/mockups";
                break;
            case "faq":
                document.location = "https://conrad-edison.fr/FAQ";
                break;
            case "mention":
                document.location = "https://conrad-edison.fr/mentions_legales";
                break;
            case "privacy":
                document.location = "https://conrad-edison.fr/politique_de_confidentialite";
                break;
            case "services":
                document.location = "https://conrad-edison.fr/services";
                break;
            default:
                break;
        }
    });
});
