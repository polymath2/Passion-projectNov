import React from "react";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './style.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div><h1>Document that gets Questions ready.</h1>
        <p>
          myEngine helps Educators generate questions; Easy, Fast and Formatted.
        </p>
        <button className="green">GET STARTED 
        <FontAwesomeIcon icon={faArrowRight}/></button></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Home;
