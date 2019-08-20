import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../utils/API";


class Flags extends Component {

    state = {
        LeaderBoardTenEasy: [],
        LeaderBoardTwentyEasy: [],
        LeaderBoardThirtyEasy: [],
        LeaderBoardTenHard: [],
        LeaderBoardTwentyHard: [],
        LeaderBoardThirtyHard: [],
        LeaderBoardType: ""
    }

    componentDidMount = () => {
        this.loadLeaderBoards();
    }

    loadLeaderBoards = () => {
        API.getLeaderBoardTenEasy()
            .then(res =>
                this.setState({
                    LeaderBoardTenEasy: res.data
                }, function () {
                    console.log(this.state.LeaderBoardTenEasy)
                })
            )
            .catch(err => console.log(err))
        API.getLeaderBoardTwentyEasy()
            .then(res =>
                this.setState({
                    LeaderBoardTwentyEasy: res.data
                }, function () {
                    console.log(this.state.LeaderBoardTwentyEasy)
                })
            )
            .catch(err => console.log(err))
        API.getLeaderBoardThirtyEasy()
            .then(res =>
                this.setState({
                    LeaderBoardThirtyEasy: res.data
                }, function () {
                    console.log(this.state.LeaderBoardThirtyEasy)
                })
            )
            .catch(err => console.log(err))
        API.getLeaderBoardTenHard()
            .then(res =>
                this.setState({
                    LeaderBoardTenHard: res.data
                }, function () {
                    console.log(this.state.LeaderBoardTenHard)
                })
            )
            .catch(err => console.log(err))
        API.getLeaderBoardTwentyHard()
            .then(res =>
                this.setState({
                    LeaderBoardTwentyHard: res.data
                }, function () {
                    console.log(this.state.LeaderBoardTwentyHard)
                })
            )
            .catch(err => console.log(err))
        API.getLeaderBoardThirtyHard()
            .then(res =>
                this.setState({
                    LeaderBoardThirtyHard: res.data
                }, function () {
                    console.log(this.state.LeaderBoardThirtyHard)
                })
            )
            .catch(err => console.log(err))
    }

    tenEasy = event => {
        event.preventDefault();
            this.setState({
                LeaderBoardType: "tenEasy"
            })
        console.log()

    };

    twentyEasy = event => {
        event.preventDefault();
            this.setState({
                LeaderBoardType: "twentyEasy"
            })
        console.log()

    };

    thirtyEasy = event => {
        event.preventDefault();
            this.setState({
                LeaderBoardType: "thirtyEasy"
            })
        console.log()

    };

    tenHard = event => {
        event.preventDefault();
            this.setState({
                LeaderBoardType: "tenHard"
            })
        console.log()

    };

    twentyHard = event => {
        event.preventDefault();
            this.setState({
                LeaderBoardType: "twentyHard"
            })
        console.log()

    };

    thirtyHard = event => {
        event.preventDefault();
            this.setState({
                LeaderBoardType: "thirtyHard"
            })
        console.log()

    };

    handleChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        switch (this.state.LeaderBoardType) {
            case ("tenEasy"):
                return (
                    <div>
                        <h1>Leader Board</h1>
                        <h3>10 Question (Easy)</h3>
                        <h5>{this.state.LeaderBoardTenEasy[0]}</h5>

                        <Link to="/Menu"><button>Main Menu</button></Link>
                        <Link to="/LeaderBoard"><button>Back</button></Link>
                    </div>
                );
            default:
                return (
                    <div>
                        <h1>Leader Boards</h1>
                        <button value="tenEasy" name="LeaderBoardType" onClick={this.tenEasy}>Ten Easy</button>
                        <Link to="/Menu"><button>Main Menu</button></Link>
                    </div>
                );
                
        }
    }
}
export default Flags;