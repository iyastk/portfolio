import React, { useContext } from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../Context.js";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <Sun></Sun>
      <Moon></Moon>
      <div
        className="btn"
        onClick={handleClick}
        style={darkMode ? { right: "0.1rem" } : { left: "0.1rem" }}
      ></div>
    </div>
  );
};

export default Toggle;
