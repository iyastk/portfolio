import React from "react";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import ".//Navbar.css";

function Navbar() {
  return (
    <div className="N-wrapper">
      <div className="N-left">
        <div className="N-name">IYAS</div>
        <span>
          <Toggle></Toggle>
        </span>
      </div>
      <div className="N-right">
        <div className="N-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonials" smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact us" smooth={true}>
          <button className="N-button">Contact us</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
