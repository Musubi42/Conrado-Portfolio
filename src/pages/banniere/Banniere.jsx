import React from "react";
import "./banniere.css";
import banniereFondationMagister from "../../Assets/images/Bannieres/banniere_fondation_magister.jpg";
import banniereVincWolfenger from "../../Assets/images/Bannieres/banniere_vinc_wolfenger.jpg";
import banniereRubyIam from "../../Assets/images/Bannieres/banniere_ruby_iam.jpg";
import banniereBaki from "../../Assets/images/Bannieres/banniere_baki.jpg";

export default function Banniere() {
  return (
    <div className="banniereMain">
      <h1 className="banniereTitle">banniere</h1>
      <div className="banniereContainer">
        <img
          src={banniereFondationMagister}
          alt="Bannière de la Fondation Magister désigné par Conrad Edison"
          className="banniereItem"
        />
        <img
          src={banniereVincWolfenger}
          alt="Bannière de Vinc Wolfenger désigné par Conrad Edison"
          className="banniereItem"
        />
        <img
          src={banniereRubyIam}
          alt="Bannière de Ruby I Am désigné par Conrad edison"
          className="banniereItem"
        />
        <img
          src={banniereBaki}
          alt="Banniére de Baki désigné par Conrad Edison"
          className="banniereItem"
        />
      </div>
    </div>
  );
}
