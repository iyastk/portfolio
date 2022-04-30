import React from "react";
import Cards from "../Cards/Cards";
import "./Services.css";
import Glasses from "./../../img/glasses.png";
import Humble from "./../../img/humble.png";
import Heartemoji from "./../../img/heartemoji.png";
import Resume from "./Resume.pdf";
import { motion } from "framer-motion";

function Services() {
  // using Animation
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="services" id="Services">
      <div className="S-left">
        <span className="services-head">My Awesome </span>
        <span className="services-span">services</span>
        <p className="services-p">
          I Build really awesome web Application with great <br />
          design and speed
        </p>
        <a href={Resume}>
          <button className=" s-button">Download CV</button>
        </a>
      </div>
      <div className="S-right">
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "6rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Cards
            Image={Glasses}
            head="Design"
            data="coreldraw, photoshop,Adobe illustrator, adobe xd"
          ></Cards>
        </motion.div>

        <motion.div
          initial={{ right: "-20rem" }}
          whileInView={{ left: "-10rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Cards
            Image={Humble}
            head="Developer"
            data="Html,Css, javascript, React, Node.js, Express"
          ></Cards>
        </motion.div>
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "9rem" }}
          transition={transition}
          style={{ left: "12rem", top: "19rem" }}
        >
          <Cards
            Image={Heartemoji}
            head="UI/UX"
            data="develop aweful frontend designs"
          ></Cards>
        </motion.div>
      </div>
      <div className="blur2"></div>
    </div>
  );
}

export default Services;
