import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import Header from "./Components/header/Header";
// import Footer from "./Components/footer/Footer";
// import Home from "./pages/home/Home";
// import Logo from "./pages/logo/Logo";
// import WebPage from "./pages/webPage/WebPage";
// import About from "./pages/about/About";
// import Contact from "./pages/about/About";
// import Mockup from "./pages/mockup/Mockup";
// import Terms from "./pages/terms/Terms";
// import Faq from "./pages/faq/Faq";
// import Privacy from "./pages/privacy/Privacy";
// import NoMatch from "./pages/no-match/NoMatch";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
