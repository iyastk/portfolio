import React from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";

const Toggle = () => {
  return (
    <div className="toggle">
      <Sun></Sun>
      <Moon></Moon>
      <div className="btn"></div>
    </div>
  );
};

export default Toggle;
