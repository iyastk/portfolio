import React, { useContext } from "react";
import "./floating.css";
import { motion } from "framer-motion";

import { themeContext } from "../../Context.js";

function Floating(props) {
  // creating context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // using Animation
  const transition = { duration: 2, type: "spring" };

  return (
    <React.Fragment>
      <motion.div
        initial={{ top: "-4%", left: "74%" }}
        whileInView={{ left: "68%" }}
        transition={transition}
        className=" Box CrownBox"
      >
        <img src={props.img} alt="" />
        <span style={{ color: darkMode ? "black" : "" }}>
          {props.txt1}
          <br />
          {props.txt2}
        </span>
      </motion.div>
      <motion.div
        initial={{ left: "9rem", top: " 18.5rem" }}
        whileInView={{ left: "6%" }}
        transition={transition}
        className=" Box ThumbBox"
      >
        <img src={props.img2} alt="" />
        <span style={{ color: darkMode ? "black" : "" }}>
          {props.txt3}
          <br />
          {props.txt4}
        </span>
      </motion.div>
    </React.Fragment>
  );
}

export default Floating;
