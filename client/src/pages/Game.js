import React, { Component } from "react";
// import Card from "../components/Card";
import usStates from "../statesData.json";
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";
import ScoreCard from "../components/ScoreCard";

class Game extends Component {
    state = {
        usStates,
        stateJSON: [],
        question: "",
        incorrectAnswer: "",
        correctAnswer: "",
        answerArray: [],
        answers: [],
        numberCorrect: 0,
        totalNumber: 0
    };

    componentDidMount() {
        this.pickState();
    }

    //Function to pick random question

    randomQuestion = () => {
        let newTotalNumber = this.state.totalNumber + 1;
        this.setState({ totalNumber: newTotalNumber });
        let newQuestion = "";
        this.setState({ question: newQuestion });

        
        let i = Math.floor(Math.random() * 2);
        switch (i) {
            case 0: {
                let newQuestion = `What is the capital of ${this.state.stateJSON.name}?`
                this.setState({ question: newQuestion });
                this.correctAnswerState();
                this.incorrectAnswerState();
            } break;
            default:
                let newQuestion = `What state does the capital ${this.state.stateJSON.capital} belong to?`
                this.setState({ question: newQuestion });
                this.correctAnswerCapital();
                this.incorrectAnswerCapital();
        }
    }

    //Function to pick random state

    pickState = () => {
        let i = Math.floor(Math.random() * 50);
        let newStateJSON = this.state.usStates[i];
        this.setState({ stateJSON: newStateJSON }, function(){
            this.randomQuestion();
        })
    };


    //Function to grab correct answer

    correctAnswerState = () => {
        let newCorrectAnswer = this.state.stateJSON.capital;
        this.setState({ correctAnswer: newCorrectAnswer });
        this.pushCorrectAnswer();
    }

    correctAnswerCapital = () => {
        let newCorrectAnswer = this.state.stateJSON.name;
        this.setState({ correctAnswer: newCorrectAnswer });
        this.pushCorrectAnswer();
    }

    pushCorrectAnswer = () => {
        this.state.answerArray.push(this.state.correctAnswer);
    }

    //Function to make 3 incorrect answers

    incorrectAnswerState = () => {
        while (this.state.answerArray.length < 4) {
            let i = Math.floor(Math.random() * 50);
            let newIncorrectAnswer = this.state.usStates[i].capital;
            this.setState({ incorrectAnswer: newIncorrectAnswer });
            this.state.answerArray.push(this.state.incorrectAnswer);
            // if (this.state.answerArray.includes(this.state.incorrectAnswer)) {
            //     this.incorrectAnswerState();
            // } else {
            //     this.state.answerArray.push(this.state.incorrectAnswer);
            // };
        };
        this.randomizeAnswers();
    };

    incorrectAnswerCapital = () => {
        while (this.state.answerArray.length < 4) {
            let i = Math.floor(Math.random() * 50);
            let newIncorrectAnswer = this.state.usStates[i].name;
            this.setState({ incorrectAnswer: newIncorrectAnswer });
            console.log(this.state.incorrectAnswer);
            this.state.answerArray.push(this.state.incorrectAnswer);
            // if (this.state.answerArray.includes(this.state.incorrectAnswer)) {
            //     this.incorrectAnswerCapital();
            // } else {
            //     this.state.answerArray.push(this.state.incorrectAnswer);
            // };
        };
        this.randomizeAnswers();
    };

    // incorrectAnswerState = () => {
    //     while (this.state.answerArray.length < 4) {
    //         let i = Math.floor(Math.random() * 50);
    //         this.incorrectAnswer = this.state.usStates[i].capital;
    //         if (this.answerArray.includes(this.incorrectAnswer)) {
    //             this.incorrectAnswerState();
    //         } else {
    //             this.answerArray.push(this.incorrectAnswer);
    //         };
    //     };
    //     this.randomizeAnswers();
    // };

    // incorrectAnswerCapital = () => {
    //     while (this.state.answerArray.length < 4) {
    //         let i = Math.floor(Math.random() * 50);
    //         this.incorrectAnswer = this.state.usStates[i].name;
    //         if (this.answerArray.includes(this.incorrectAnswer)) {
    //             this.incorrectAnswerState();
    //         } else {
    //             this.answerArray.push(this.incorrectAnswer);
    //         };
    //     };
    //     this.randomizeAnswers();
    // };

    //Function to randomize answers

    randomizeAnswers = () => {
        let newAnswers = this.state.answerArray.sort();
        this.setState({ answers: newAnswers });
    }

    //Function to validate user answer

    handleBtnClick = event => {
        // event.preventDefault();

        let userPick = event.target.attributes.getNamedItem("data-name").value;

        if (userPick === this.correctAnswer) {
            this.addPoint();
            this.nextQuestion()
        } else {
            this.randomQuestion();
        }
    }

    //Function to add point
    addPoint = () => {
        let newNumberCorrect = this.state.numberCorrect;
        this.setState({ numberCorrect: newNumberCorrect });
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
                    numberCorrect={this.state.numberCorrect}
                    totalNumber={this.state.totalNumber}
                />
                <QuestionCard
                    question={this.state.question}
                />
                <AnswerCard
                    handleBtnClick={this.handleBtnClick}
                    answer1={this.state.answers[0]}
                    answer2={this.state.answers[1]}
                    answer3={this.state.answers[2]}
                    answer4={this.state.answers[3]}
                />

            </div>
        )
    };
}

export default Game;