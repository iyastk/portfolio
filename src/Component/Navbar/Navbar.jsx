import React from "react";
import ".//Navbar.css";

function Navbar() {
  return (
    <div className="N-wrapper">
      <div className="N-left">
        <div className="N-name">IYAS</div>
        <span>toggle</span>
      </div>
      <div className="N-right">
        <div className="N-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="N-button">Contact us</button>
      </div>
    </div>
  );
}

export default Navbar;
