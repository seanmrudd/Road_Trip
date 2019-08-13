import React from "react";
import "./style.css";

function ScoreCard(props) {
  return (
    <div className="scoreCard">
      <div className="score-container">
        <h4>Question Number: {props.totalNumber}</h4>
        <h4>Correct Answers So Far: {props.numberCorrect}</h4>
      </div>
    </div>
  );
}

export default ScoreCard;