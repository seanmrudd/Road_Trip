import React, { Component } from "react";
// import Card from "../components/Card";
import usStates from "../statesData.json";
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";
import ScoreCard from "../components/ScoreCard";

class Game extends Component {
    state = {
        usStates
    };

    stateJSON;
    incorrectAnswer;
    correctAnswer = [];
    answerArray = [];
    answers = [];
    numberCorrect = 0;
    totalNumber = 0;


    //Function to pick random question

    randomQuestion = () => {
        this.pickState();
        this.totalNumber = this.totalNumber + 1;

        let i = Math.floor(Math.random() * 2);
        switch (i) {
            case 0: {
                this.correctAnswerState();
                this.incorrectAnswerState();
                return `What is the capital of ${this.stateJSON.name}?`
            }
            default:
                this.correctAnswerCapital();
                this.incorrectAnswerCapital();
                return `What state does the capital ${this.stateJSON.capital} belong to?`
        }
        
    }

    //Function to pick random state

    pickState = () => {
        let i = Math.floor(Math.random() * 50);
        this.stateJSON = this.state.usStates[i];
    }


    //Function to grab correct answer

    correctAnswerState = () => {
        this.correctAnswer= this.stateJSON.capital;
        this.pushCorrectAnswer();
    }

    correctAnswerCapital = () => {
        this.correctAnswer = this.stateJSON.name;
        this.pushCorrectAnswer();
    }

    pushCorrectAnswer = () => {
        this.answerArray.push(this.correctAnswer);
    }

    //Function to make 3 incorrect answers

    incorrectAnswerState = () => {
        while (this.answerArray.length < 4) {
            let i = Math.floor(Math.random() * 50);
            this.incorrectAnswer = this.state.usStates[i].capital;
            if (this.answerArray.includes(this.incorrectAnswer)) {
                this.incorrectAnswerState();
            } else {
                this.answerArray.push(this.incorrectAnswer);
            };
        };
        this.randomizeAnswers();
    };

    incorrectAnswerCapital = () => {
        while (this.answerArray.length < 4) {
            let i = Math.floor(Math.random() * 50);
            this.incorrectAnswer = this.state.usStates[i].name;
            if (this.answerArray.includes(this.incorrectAnswer)) {
                this.incorrectAnswerState();
            } else {
                this.answerArray.push(this.incorrectAnswer);
            };
        };
        this.randomizeAnswers();
    };

    //Function to randomize answers

    randomizeAnswers = () => {
        this.answers = this.answerArray.sort();
    }

    //Function to validate user answer

    handleBtnClick = event => {
        // event.preventDefault();

        let userPick = event.target.attributes.getNamedItem("data-name").value;
        
        if(userPick === this.correctAnswer) {
            this.addPoint();
            this.nextQuestion()
        } else {
            this.randomQuestion();
        }
    }

    //Function to add point
    addPoint = () => {
        this.numberCorrect++;
    }

    //Function to move on to next question
    nextQuestion = () => {
        this.randomQuestion();
    }

    //Function to end game and head to GameResults.js

    render() {
        return (
            <div>
                <ScoreCard 
                    numberCorrect = {this.numberCorrect}
                    totalNumber = {this.totalNumber}
                />
                <QuestionCard
                    question={this.randomQuestion()}
                />
                <AnswerCard
                    handleBtnClick={this.handleBtnClick}
                    answer1={this.answers[0]}
                    answer2={this.answers[1]}
                    answer3={this.answers[2]}
                    answer4={this.answers[3]}
                />

            </div>
        )
    };
}

export default Game;