import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import Container from "../../components/Container";
import "./style.css";

class Flags extends Component {

    state = {
        numberCorrect: 0,
        totalNumber: 0,
        percentage: 0,
        difficulty: null,
        timeRemaining: 0,
        gameScore: 0
    }

    componentDidMount() {
        this.loadResults();
    }

    loadResults = () => {
        const data = this.props.location.data;
        console.log(data)
        this.setState({
            numberCorrect: data[0],
            totalNumber: data[1],
            difficulty: data[2],
            timeRemaining: data[3]
        },
            function () {
                console.log(this.state.numberCorrect + "and" + this.state.totalNumber)
                this.percentage();
                console.log(localStorage.getItem("username"))
            })
    }

    saveToLeaderBoards = () => {
        switch (this.state.difficulty) {
            case (true):
                switch (this.state.totalNumber) {
                    case (10):
                        API.saveToLeaderBoardTenEasy({
                            username: localStorage.getItem("username"),
                            score: this.state.gameScore
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    case (20):
                        API.saveToLeaderBoardTwentyEasy({
                            username: localStorage.getItem("username"),
                            score: this.state.gameScore
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    case (30):
                        API.saveToLeaderBoardThirtyEasy({
                            username: localStorage.getItem("username"),
                            score: this.state.gameScore
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    default:
                        console.log("not working")
                }
                break
            case (false):
                switch (this.state.totalNumber) {
                    case (10):
                        API.saveToLeaderBoardTenHard({
                            username: localStorage.getItem("username"),
                            score: this.state.gameScore
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    case (20):
                        API.saveToLeaderBoardTwentyHard({
                            username: localStorage.getItem("username"),
                            score: this.state.gameScore
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    case (30):
                        API.saveToLeaderBoardThirtyHard({
                            username: localStorage.getItem("username"),
                            score: this.state.gameScore
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    default:
                        console.log("not working")
                }
                break
            default:
                console.log("not working");
        }
    }

    // saveToPersonalBest = (data) => {
    //     API.getTenEasyPersonal({
    //         username: localStorage.getItem("username")
    //     }).then(console.log(data))
    // }


    percentage = () => {
        console.log(((this.state.numberCorrect / this.state.totalNumber) * 100).toFixed(2))
        this.setState({ percentage: ((this.state.numberCorrect / this.state.totalNumber) * 100).toFixed(2) }, function () {
            this.gameScore();
            console.log(this.state.percentage + "and" + this.state.difficulty)
        })
    }

    gameScore = () => {
        let numberCorrect = this.state.numberCorrect;
        let timeRemaining = this.state.timeRemaining;

        let gameScore = ((numberCorrect*timeRemaining)*this.state.percentage)*10
        this.setState({
            gameScore: gameScore
        }, function () {
            this.saveToLeaderBoards();
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center gameResultsHeader">Game Results</h1>
                    <h3 className="text-center gameResults">You answered {this.state.percentage}% correctly.</h3>
                    <h3 className="text-center gameResults">Your game score is {this.state.gameScore}.</h3>
                    <p className="text-center">
                        <Link to="/Menu"><button className="gameResultsBtn">Main Menu</button></Link>
                    </p>
                </Container>
            </div>
        );
    }
}
export default Flags;