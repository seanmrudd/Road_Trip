import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import Container from "../../components/Container";

class Flags extends Component {

    state = {
        numberCorrect: 0,
        totalNumber: 0,
        percentage: 0,
        difficulty: null
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
            difficulty: data[2]
        },
            function () {
                console.log(this.state.numberCorrect + "and" + this.state.totalNumber)
                this.percentage();
            })
    }

    saveToLeaderBoards = () => {
        switch (this.state.difficulty) {
            case (true):
                switch (this.state.totalNumber) {
                    case (10):
                        API.saveToLeaderBoardTenEasy({
                            username: localStorage.getItem("username"),
                            score: this.state.percentage
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    case (20):
                        API.saveToLeaderBoardTwentyEasy({
                            email: localStorage.getItem("email"),
                            score: this.state.percentage
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    case (30):
                        API.saveToLeaderBoardThirtyEasy({
                            email: localStorage.getItem("email"),
                            score: this.state.percentage
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
                            email: localStorage.getItem("email"),
                            score: this.state.percentage
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    case (20):
                        API.saveToLeaderBoardTwentyHard({
                            email: localStorage.getItem("email"),
                            score: this.state.percentage
                        })
                            .catch(err => console.log(err));
                        console.log("working");
                        break
                    case (30):
                        API.saveToLeaderBoardThirtyHard({
                            email: localStorage.getItem("email"),
                            score: this.state.percentage
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
            this.saveToLeaderBoards();
            console.log(this.state.percentage + "and" + this.state.difficulty)
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center">Game Results</h1>
                    <br /><br />
                    <h3 className="text-center">You scored a {this.state.percentage}%.</h3>
                    <br />
                    <p className="text-center">
                        <Link to="/Menu"><button>Main Menu</button></Link>
                    </p>
                </Container>
            </div>
        );
    }
}
export default Flags;