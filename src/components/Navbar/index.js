import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

function Navbar() {
  return (
    <div className="container">
      <div className="logo">
        <span>myEngine</span>
        {/* <img alt='engineLogo'></img> */}
      </div>
      <div className="menu">
        <ul className="menu-items">
          <li>
            <a href="#">DEMO</a>
          </li>
          <li>
            <a href="#">TEMPLATES</a>
          </li>
        </ul>
      </div>
      <div className="btns">
        <button>LOGIN</button>
        <button className="green">
          TRY IT FREE
          <span><FontAwesomeIcon icon={faArrowRight} /></span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
