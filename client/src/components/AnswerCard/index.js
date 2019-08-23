import React from "react";
import "./style.css";
import AnswerButton from "../AnswerButton";
import Row from "../Row";
import Col from "../Col";

function AnswerCard(props) {
    return (
        <div className="answerCard text-center">
            <div className="answer-container">
                <Row>
                    <Col>
                        <AnswerButton
                            onClick={props.handleBtnClick}
                            data-name={props.answer1}
                        >{props.answer1}</AnswerButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AnswerButton
                            onClick={props.handleBtnClick}
                            data-name={props.answer2}
                        >{props.answer2}</AnswerButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AnswerButton
                            onClick={props.handleBtnClick}
                            data-name={props.answer3}
                        >{props.answer3}</AnswerButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AnswerButton
                            onClick={props.handleBtnClick}
                            data-name={props.answer4}
                        >{props.answer4}</AnswerButton>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AnswerCard;