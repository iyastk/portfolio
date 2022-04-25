import React, { createElement } from "react";
import "./intro.css";
import Github from "./../../img/github.png";
import linkedIn from "./../../img/linkedin.png";
import Insta from "./../../img/instagram.png";
import Vector1 from "./../../img/Vector1.png";
import Vector2 from "./../../img/Vector2.png";
import Boy from "./../../img/boy.png";
import Thumbup from "./../../img/thumbup.png";
import Glassesimoji from "./../../img/glassesimoji.png";
import Crown from "./../../img/crown.png";
import Floating from "../floating/floating";
function Intro() {
  return (
    <div className="Intro">
      <div className="I-left">
        <div className="I-name">
          <span>Hy! I Am</span>
          <span>IYAS T K</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and developing applications,producting the quality works
          </span>
        </div>
        <button className="I-button">Hire me</button>
        <div className="I-Icons">
          <a href="">
            <img src={Github} alt="" />
          </a>
          <a href="">
            <img src={linkedIn} alt="" />
          </a>
          <a href="">
            <img src={Insta} alt="" />
          </a>{" "}
        </div>
      </div>
      <div className="I-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" className="I-Boy" />
        <img src={Glassesimoji} alt="" className="I-Glassesimoji" />
        <Floating
          img={Crown}
          txt1="Web"
          txt2="Developer"
          img2={Thumbup}
          txt3="Best Design"
          txt4="Award"
        ></Floating>
        <div className="blur gradient-1"></div>
        <div className="blur gradient-2"></div>
      </div>
    </div>
  );
}

export default Intro;
