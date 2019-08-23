import React from "react";
import "./style.css";
import Col from "../Col";
import Row from "../Row";

function ScoreCard(props) {
  return (
    <div className="scoreCard text-center">
      <div className="score-container">
        <Row>
          <Col>
            <h5>Question: {props.totalNumber}/{props.numberOfQuestions}</h5>
          </Col>
          <Col>
            <h5>Correct: {props.numberCorrect}/{props.numberOfQuestionsAsked}</h5>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ScoreCard;