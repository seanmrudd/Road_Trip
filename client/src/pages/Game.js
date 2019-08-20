import React, { Component } from "react";
import usStates from "../statesData.json";
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";
import ScoreCard from "../components/ScoreCard";
import Container from "../components/Container";

class Game extends Component {
    state = {
        usStates,
        stateJSON: [],
        numberOfQuestions: 0,
        question: "",
        correctAnswer: null,
        incorrectAnswer: null,
        answerArray: [],
        answers: [],
        numberCorrect: 0,
        totalNumber: 0,
        difficulty: true
    };

    componentDidMount() {
        const data = this.props.location.data;
        console.log(data)
        this.setState({ numberOfQuestions: data }, function () {
            console.log(this.state.numberOfQuestions)
            this.pickState();
        })
    }


    //Function to pick random state

    pickState = () => {
        if (this.state.totalNumber < this.state.numberOfQuestions) {
            let i = Math.floor(Math.random() * 50);
            let newStateJSON = this.state.usStates[i];
            this.setState({ stateJSON: newStateJSON }, function () {
                this.randomQuestion();
            })
        } else {
            this.endGame();
        }
    };


    //Function to pick random question

    randomQuestion = () => {
        let newTotalNumber = this.state.totalNumber + 1;
        this.setState({ totalNumber: newTotalNumber });

        this.setState({ answerArray: [] });
        this.setState({ answers: [] });
        this.setState({ question: "" });

        let newQuestion = "";
        this.setState({ question: newQuestion });

        let i = Math.floor(Math.random() * 2);
        switch (i) {
            case 0: {
                let newQuestion = `What is the capital of ${this.state.stateJSON.name}?`
                this.setState({ question: newQuestion }, function () {
                    this.correctAnswerState();
                });
            } break;
            default:
                let newQuestion = `What state does the capital ${this.state.stateJSON.capital} belong to?`
                this.setState({ question: newQuestion }, function () {
                    this.correctAnswerCapital();
                });
        }
    }


    //Function to grab correct answer

    correctAnswerState = () => {
        let newCorrectAnswer = this.state.stateJSON.capital;
        this.setState({ correctAnswer: newCorrectAnswer }, function () {
            console.log(this.state.correctAnswer)
            this.pushCorrectAnswerState();
        });
        console.log(newCorrectAnswer);
    }

    correctAnswerCapital = () => {
        let newCorrectAnswer = this.state.stateJSON.name;
        this.setState({ correctAnswer: newCorrectAnswer }, function () {
            console.log(this.state.correctAnswer)
            this.pushCorrectAnswerCapital();
        });
        console.log(newCorrectAnswer);
    }

    pushCorrectAnswerState = () => {
        console.log(this.state.correctAnswer)
        this.setState(prevState => ({
            answerArray: [...prevState.answerArray, this.state.correctAnswer]
        }), function () {
            this.incorrectAnswerState();
        })
    }

    pushCorrectAnswerCapital = () => {
        console.log(this.state.correctAnswer)
        this.setState(prevState => ({
            answerArray: [...prevState.answerArray, this.state.correctAnswer]
        }), function () {
            this.incorrectAnswerCapital();
        })
    }


    //Function to make 3 incorrect answers

    incorrectAnswerState = () => {
        if (this.state.answerArray.length < 4) {
            let i = Math.floor(Math.random() * 50);
            let newIncorrectAnswer = this.state.usStates[i].capital;
            console.log(newIncorrectAnswer);
            this.setState({ incorrectAnswer: newIncorrectAnswer }, function () {
                console.log(this.state.incorrectAnswer)
                if (this.state.answerArray.includes(this.state.incorrectAnswer)) {
                    this.incorrectAnswerCapital()
                } else {
                    this.setState(prevState => ({
                        answerArray: [...prevState.answerArray, this.state.incorrectAnswer]
                    }), function () {
                        console.log(this.state.answerArray)
                        if (this.state.answerArray.length < 4) {
                            this.incorrectAnswerCapital();
                        } else {
                            this.randomizeAnswers();
                        }
                    })
                }
            })
        };
    };

    incorrectAnswerCapital = () => {
        if (this.state.answerArray.length < 4) {
            let i = Math.floor(Math.random() * 50);
            let newIncorrectAnswer = this.state.usStates[i].name;
            console.log(newIncorrectAnswer);
            this.setState({ incorrectAnswer: newIncorrectAnswer }, function () {
                console.log(this.state.incorrectAnswer)
                if (this.state.answerArray.includes(this.state.incorrectAnswer)) {
                    this.incorrectAnswerCapital()
                } else {
                    this.setState(prevState => ({
                        answerArray: [...prevState.answerArray, this.state.incorrectAnswer]
                    }), function () {
                        console.log(this.state.answerArray)
                        if (this.state.answerArray.length < 4) {
                            this.incorrectAnswerCapital();
                        } else {
                            this.randomizeAnswers();
                        }
                    })
                }
            })
        }
    };


    //Function to randomize answers

    randomizeAnswers = () => {
        let newAnswers = this.state.answerArray.sort();
        this.setState({ answers: newAnswers });
    }


    //Function to validate user answer

    handleBtnClick = event => {
        event.preventDefault();

        let userPick = event.target.attributes.getNamedItem("data-name").value;
        console.log(userPick);
        if (userPick === this.state.correctAnswer) {
            this.addPoint();
        } else {
            this.pickState();
        }
    }


    //Function to add point
    addPoint = () => {
        let newNumberCorrect = this.state.numberCorrect + 1;
        this.setState({ numberCorrect: newNumberCorrect }, function () {
            this.nextQuestion()
        });
    }


    //Function to move on to next question
    nextQuestion = () => {
        this.pickState();
    }


    //Function to end game and head to GameResults.js

    endGame = () => {
        this.props.history.push({
            pathname: "/GameResults",
            data: [this.state.numberCorrect, this.state.totalNumber, this.state.difficulty]
        });
    }



    render() {
        return (
            <div>
                <Container>
                    <ScoreCard
                        numberCorrect={this.state.numberCorrect}
                        totalNumber={this.state.totalNumber}
                    />
                    <br /><br />
                    <QuestionCard
                        question={this.state.question}
                    />
                    <br /><br />
                    <AnswerCard
                        handleBtnClick={this.handleBtnClick}
                        answer1={this.state.answers[0]}
                        answer2={this.state.answers[1]}
                        answer3={this.state.answers[2]}
                        answer4={this.state.answers[3]}
                    />
                </Container>
            </div>
        )
    };
}

export default Game;