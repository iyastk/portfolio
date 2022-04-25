import React from "react";
import "./floating.css";

function Floating(props) {
  return (
    <React.Fragment>
      <div className=" Box CrownBox">
        <img src={props.img} alt="" />
        <span>
          {props.txt1}
          <br />
          {props.txt2}
        </span>
      </div>
      <div className=" Box ThumbBox">
        <img src={props.img2} alt="" />
        <span>
          {props.txt3}
          <br />
          {props.txt4}
        </span>
      </div>
    </React.Fragment>
  );
}

export default Floating;
