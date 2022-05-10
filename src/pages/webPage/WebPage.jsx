import React from "react";
import "./webPage.css";
import mockupLorenzoScimone from "../../Assets/images/WebPage/webPage_lorenzo_scimone.jpg";
import mockupRoswell from "../../Assets/images/WebPage/webPage_roswell.jpg";

export default function WebPage() {
  return (
    <div className="webPageMain">
      <h1 className="webPageTitle">PAGE WEB</h1>
      <div className="webPageContainer">
        {/* <img src="" alt="" className="webPageItems" /> */}
        <img className="webPageItems" src={mockupLorenzoScimone} alt="" />
        <img className="webPageItems" src={mockupRoswell} alt="" />
      </div>
    </div>
  );
}
