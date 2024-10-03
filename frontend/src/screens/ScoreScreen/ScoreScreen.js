import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ScoreScreen.css";

function ScoreScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state.score);

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickAdd = () => {
    navigate("/mission");
  };

  return (
    <div className="scorecard">
      <div id="UserScore"> Score : {location.state.score}</div>
      <div className="toHomepage">
        <button type="submit" onClick={handleClickHome} id="toHomepage">
          Go To Homepage
        </button>
      </div>
      <div className="playAgain">
        <button type="submit" onClick={handleClickAdd} id="playAgain">
          Play Again
        </button>
      </div>
    </div>
  );
}

export default ScoreScreen;
