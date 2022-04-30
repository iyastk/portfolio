import React from "react";
import "./Circle.css";

const Circle = (props) => {
  return (
    <div className="circle">
      <div className="C-number">{props.Number}</div>
      <div className="head">{props.head}</div>
      <div className="span">{props.span}</div>
    </div>
  );
};

export default Circle;
