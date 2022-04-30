import React from "react";
import Circle from "../Circle/Circle";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div className="experience" id="Experience">
      <Circle Number="5+" head="Years" span="Experience"></Circle>
      <Circle Number="10+" head="Completed" span="Projects"></Circle>
      <Circle Number="1+" head="Companies" span="Work"></Circle>
    </div>
  );
};

export default Experiences;
