import React from "react";
import Cards from "../Cards/Cards";
import "./Services.css";
import Glasses from "./../../img/glasses.png";
import Humble from "./../../img/humble.png";
import Heartemoji from "./../../img/heartemoji.png";

function Services() {
  return (
    <div className="services">
      <div className="S-left">
        <span className="services-head">My Awesome </span>
        <span className="services-span">services</span>
        <p className="services-p">
          I Build really awesome web Application with great <br />
          design and speed
        </p>
        <button className=" s-button">Download CV</button>
      </div>
      <div className="S-right">
        <div style={{ left: "14rem" }}>
          <Cards
            Image={Glasses}
            head="Design"
            data="coreldraw, photoshop,Adobe illustrator, adobe xd"
          ></Cards>
        </div>

        <div style={{ left: "-4rem", top: "12rem" }}>
          <Cards
            Image={Humble}
            head="Developer"
            data="Html,Css, javascript, React, Node.js, Express"
          ></Cards>
        </div>
        <div style={{ left: "12rem", top: "19rem" }}>
          <Cards
            Image={Heartemoji}
            head="UI/UX"
            data="develop aweful frontend designs"
          ></Cards>
        </div>
      </div>
    </div>
  );
}

export default Services;
