import React from "react";
import "./style.css";

function ScoreCard(props) {
  return (
    <div className="scoreCard">
      <div className="score-container">
        <h4>{props.numberCorrect}/{props.totalNumber}</h4>
      </div>
    </div>
  );
}

export default ScoreCard;