import "./footer.css";
import Wave from "./../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>iyasdevog@gmail.com</span>
        <div className="f-icon">
          <Facebook color="white" size="3rem"></Facebook>
          <Insta color="white" size="3rem"></Insta>
          <Github color="white" size="3rem"></Github>
        </div>
      </div>
    </div>
  );
};

export default Footer;
