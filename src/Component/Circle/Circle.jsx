import React, { useContext } from "react";
import "./Circle.css";
import { themeContext } from "../../Context.js";

const Circle = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="circle">
      <div className="C-number" style={{ color: darkMode ? "black" : "" }}>
        {props.Number}
      </div>
      <div className="head">{props.head}</div>
      <div className="span">{props.span}</div>
    </div>
  );
};

export default Circle;
