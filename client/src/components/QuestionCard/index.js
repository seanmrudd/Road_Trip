import React from "react";
import "./style.css";

function QuestionCard(props) {
  return (
    <div className="questionCard text-center">
      <div className="question-container">
        <h2>{props.question}</h2>
      </div>
    </div>
  );
}

export default QuestionCard;