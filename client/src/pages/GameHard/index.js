import React, { Component } from "react";
import usStates from "../../statesData.json";
import QuestionCard from "../../components/QuestionCard";
import ScoreCard from "../../components/ScoreCard";
import Container from "../../components/Container";

class GameHard extends Component {

    state = {
        usStates,
        stateJSON: [],
        numberOfQuestions: 0,
        question: "",
        correctAnswer: "",
        userAnswer: "",
        numberCorrect: 0,
        totalNumber: 0,
        difficulty: false
    };

    componentDidMount() {
        const data = this.props.location.data;
        this.setState({ numberOfQuestions: data }, function () {
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

        this.setState({ correctAnswer: "" })
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
        });
        console.log(newCorrectAnswer);
    }

    correctAnswerCapital = () => {
        let newCorrectAnswer = this.state.stateJSON.name;
        this.setState({ correctAnswer: newCorrectAnswer }, function () {
            console.log(this.state.correctAnswer)
        });
        console.log(newCorrectAnswer);
    }


    //Function to validate user answer

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.userAnswer.trim() === this.state.correctAnswer) {
            this.addPoint();
        } else {
            this.pickState();
        }
        this.setState({ userAnswer: "" })

    };

    handleChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    //Function to add point
    addPoint = () => {
        let newNumberCorrect = this.state.numberCorrect + 1;
        this.setState({ numberCorrect: newNumberCorrect }, function () {
            console.log(this.state.correctAnswer);
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
                        numberOfQuestions={this.state.numberOfQuestions}
                        totalNumber={this.state.totalNumber}
                        numberOfQuestionsAsked={this.state.totalNumber - 1}
                    />
                    <QuestionCard
                        question={this.state.question}
                    />
                    <form className="text-center">
                        <input
                            value={this.state.userAnswer}
                            name="userAnswer"
                            onChange={this.handleChange}
                            type="text"
                            autoComplete="off"
                        />&nbsp;
                        <button onClick={this.handleSubmit}>Submit</button>
                    </form>
                </Container>
            </div>
        )
    };
}

export default GameHard;