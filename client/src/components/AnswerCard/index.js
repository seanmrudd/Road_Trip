import React from "react";
import "./style.css";
import AnswerButton from "../AnswerButton";

function AnswerCard(props) {
    return (
        <div className="answerCard text-center">
            <div className="answer-container">

                <AnswerButton
                    onClick={props.handleBtnClick}
                    data-name={props.answer1}
                >{props.answer1}</AnswerButton>&nbsp;&nbsp;

                <AnswerButton
                    onClick={props.handleBtnClick}
                    data-name={props.answer2}
                >{props.answer2}</AnswerButton>&nbsp;&nbsp;

                <AnswerButton
                    onClick={props.handleBtnClick}
                    data-name={props.answer3}
                >{props.answer3}</AnswerButton>&nbsp;&nbsp;

                <AnswerButton
                    onClick={props.handleBtnClick}
                    data-name={props.answer4}
                >{props.answer4}</AnswerButton>

            </div>
        </div>
    );
}

export default AnswerCard;