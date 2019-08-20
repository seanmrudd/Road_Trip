import React from "react";
import "./style.css";

function ScoreCard(props) {
  return (
    <div className="scoreCard text-center">
      <div className="score-container">
        <h5>Question Number: {props.totalNumber}</h5>
        <h5>Correct Answers So Far: {props.numberCorrect}</h5>
      </div>
    </div>
  );
}

export default ScoreCard;