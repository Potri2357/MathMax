import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission">
      <div className="additionTag mission-container">
        <a href="/mission/addition" id="additionLink">
          <img
            className="additionLogo"
            src={require("D:/Programming/MathMax/frontend/src/images/add-button.png")}
          />
          <div>Addition</div>
        </a>
      </div>
      <div className="subtractionTag mission-container">
        <a href="/mission/subtraction" id="subtractionLink">
          <img
            className="subtractionLogo"
            src={require("D:/Programming/MathMax/frontend/src/images/minus-button.png")}
          />
          <div>Subtraction</div>
        </a>
      </div>
      <div className="multiplicationTag mission-container">
        <a href="/mission/multiplication" id="multiplicationLink">
          <img
            className="multiplicationLogo"
            src={require("D:/Programming/MathMax/frontend/src/images/cross-button.png")}
          />
          <div>Multiplication</div>
        </a>
      </div>
      <div className="divisionTag mission-container">
        <a href="/mission/division" id="divisionLink">
          <img
            className="divisionLogo"
            src={require("D:/Programming/MathMax/frontend/src/images/divide-button.png")}
          />
          <div>Division</div>
        </a>
      </div>
    </div>
  );
};

export default Mission;
