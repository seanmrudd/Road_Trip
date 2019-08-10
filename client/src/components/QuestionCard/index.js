import React from "react";
import "./style.css";

function QuestionCard(props) {
  return (
    <div className="questionCard">
      <div className="question-container">
        <h3>{props.question}</h3>
      </div>
    </div>
  );
}

export default QuestionCard;