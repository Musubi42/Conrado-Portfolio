import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/header/header";
import Footer from "./Components/footer/Footer";
import Home from "./pages/home/Home";
import WebPage from "./pages/webPage/WebPage";
import Logo from "./pages/logo/Logo";
import Mockup from "./pages/mockup/Mockup";
import Banniere from "./pages/banniere/Banniere";
import Temoignage from "./pages/temoignages/Temoignage";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Terms from "./pages/terms/Terms";
import Faq from "./pages/faq/Faq";
import Privacy from "./pages/privacy/Privacy";
import NoMatch from "./pages/no-match/NoMatch";

function App() {
  return (
    <>
      {/* TODO : Change style when clicked */}
      <Header />
      <Routes basename="/conrad-edison">
        <Route path="/" element={<Home />} />
        <Route exact path="/accueil" element={<Home />} />
        <Route path="/page_web" element={<WebPage />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/mockup" element={<Mockup />} />
        <Route path="/banniere" element={<Banniere />} />
        <Route path="/temoignage" element={<Temoignage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/a_propos" element={<About />} />
        <Route path="/mentions_legales" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/politique_de_confidentialite" element={<Privacy />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
