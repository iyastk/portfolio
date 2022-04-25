import React from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="Cards">
      <img src={props.Image} alt="" className="CardEmoji" />
      <span>{props.head}</span>
      <p>{props.data}</p>
      <button>Learn more</button>
    </div>
  );
}

export default Cards;
