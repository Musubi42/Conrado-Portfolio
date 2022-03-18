import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Home from "./pages/home/Home";
import Logo from "./pages/logo/Logo";
import WebPage from "./pages/webPage/WebPage";
import About from "./pages/about/About";
import Contact from "./pages/about/About";
import Mockup from "./pages/mockup/Mockup";
import Terms from "./pages/terms/Terms";
import Faq from "./pages/faq/Faq";
import Privacy from "./pages/privacy/Privacy";
import NoMatch from "./pages/no-match/NoMatch";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/accueil">
          <Home />
        </Route>
        <Route path="/logos">
          <Logo />
        </Route>
        <Route path="/mockups">
          <Mockup />
        </Route>
        <Route path="/page_web">
          <WebPage />
        </Route>
        <Route path="/a_propos">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/mentions_legales">
          <Terms />
        </Route>
        <Route path="faq">
          <Faq />
        </Route>
        <Route path="/politique_de_confidentialite">
          <Privacy />
        </Route>
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
