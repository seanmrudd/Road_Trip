import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import Container from "../../components/Container";
import { Animated } from "react-animated-css";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css";


class LeaderBoard extends Component {

    state = {
        LeaderBoardTenEasy: [],
        LeaderBoardTwentyEasy: [],
        LeaderBoardThirtyEasy: [],
        LeaderBoardTenHard: [],
        LeaderBoardTwentyHard: [],
        LeaderBoardThirtyHard: [],
        LeaderBoardType: ""
    }

    componentWillMount = () => {
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

    leaderBoardMenu = event => {
        event.preventDefault();
        this.setState({
            LeaderBoardType: ""
        })
    }

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
                    <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <Container>
                                <h1 className="text-center">Leader Board</h1>
                                <h3 className="text-center">10 Question (Easy)</h3>
                                <div className="text-center">
                                    <h5>1st:  {this.state.LeaderBoardTenEasy[0].username} scored a {this.state.LeaderBoardTenEasy[0].score}</h5>
                                    <h5>2nd:  {this.state.LeaderBoardTenEasy[1].username} scored a {this.state.LeaderBoardTenEasy[1].score}</h5>
                                    <h5>3rd:  {this.state.LeaderBoardTenEasy[2].username} scored a {this.state.LeaderBoardTenEasy[2].score}</h5>
                                    <h5>4th:  {this.state.LeaderBoardTenEasy[3].username} scored a {this.state.LeaderBoardTenEasy[3].score}</h5>
                                    <h5>5th:  {this.state.LeaderBoardTenEasy[4].username} scored a {this.state.LeaderBoardTenEasy[4].score}</h5>
                                </div>
                                <div className="text-center">
                                    <Link to="/Menu"><button>Main Menu</button></Link>
                                    <button value="" name="LeaderBoardType" onClick={this.leaderBoardMenu}>Back</button>
                                </div>
                            </Container>
                        </div>
                    </Animated>
                );
            case ("twentyEasy"):
                return (
                    <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <Container>
                                <h1 className="text-center">Leader Board</h1>
                                <h3 className="text-center">20 Question (Easy)</h3>
                                <div className="text-center">
                                    <h5>1st:  {this.state.LeaderBoardTwentyEasy[0].username} scored a {this.state.LeaderBoardTwentyEasy[0].score}</h5>
                                    <h5>2nd:  {this.state.LeaderBoardTwentyEasy[1].username} scored a {this.state.LeaderBoardTwentyEasy[1].score}</h5>
                                    <h5>3rd:  {this.state.LeaderBoardTwentyEasy[2].username} scored a {this.state.LeaderBoardTwentyEasy[2].score}</h5>
                                    <h5>4th:  {this.state.LeaderBoardTwentyEasy[3].username} scored a {this.state.LeaderBoardTwentyEasy[3].score}</h5>
                                    <h5>5th:  {this.state.LeaderBoardTwentyEasy[4].username} scored a {this.state.LeaderBoardTwentyEasy[4].score}</h5>
                                </div>
                                <div className="text-center">
                                    <Link to="/Menu"><button>Main Menu</button></Link>
                                    <button value="" name="LeaderBoardType" onClick={this.leaderBoardMenu}>Back</button>
                                </div>
                            </Container>
                        </div>
                    </Animated>
                );
            case ("thirtyEasy"):
                return (
                    <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <Container>
                                <h1 className="text-center">Leader Board</h1>
                                <h3 className="text-center">30 Question (Easy)</h3>
                                <div className="text-center">
                                    <h5>1st:  {this.state.LeaderBoardThirtyEasy[0].username} scored a {this.state.LeaderBoardThirtyEasy[0].score}</h5>
                                    <h5>2nd:  {this.state.LeaderBoardThirtyEasy[1].username} scored a {this.state.LeaderBoardThirtyEasy[1].score}</h5>
                                    <h5>3rd:  {this.state.LeaderBoardThirtyEasy[2].username} scored a {this.state.LeaderBoardThirtyEasy[2].score}</h5>
                                    <h5>4th:  {this.state.LeaderBoardThirtyEasy[3].username} scored a {this.state.LeaderBoardThirtyEasy[3].score}</h5>
                                    <h5>5th:  {this.state.LeaderBoardThirtyEasy[4].username} scored a {this.state.LeaderBoardThirtyEasy[4].score}</h5>
                                </div>
                                <div className="text-center">
                                    <Link to="/Menu"><button>Main Menu</button></Link>
                                    <button value="" name="LeaderBoardType" onClick={this.leaderBoardMenu}>Back</button>
                                </div>
                            </Container>
                        </div>
                    </Animated>
                );
            case ("tenHard"):
                return (
                    <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <Container>
                                <h1 className="text-center">Leader Board</h1>
                                <h3 className="text-center">10 Question (Hard)</h3>
                                <div className="text-center">
                                    <h5>1st:  {this.state.LeaderBoardTenHard[0].username} scored a {this.state.LeaderBoardTenHard[0].score}</h5>
                                    <h5>2nd:  {this.state.LeaderBoardTenHard[1].username} scored a {this.state.LeaderBoardTenHard[1].score}</h5>
                                    <h5>3rd:  {this.state.LeaderBoardTenHard[2].username} scored a {this.state.LeaderBoardTenHard[2].score}</h5>
                                    <h5>4th:  {this.state.LeaderBoardTenHard[3].username} scored a {this.state.LeaderBoardTenHard[3].score}</h5>
                                    <h5>5th:  {this.state.LeaderBoardTenHard[4].username} scored a {this.state.LeaderBoardTenHard[4].score}</h5>
                                </div>
                                <div className="text-center">
                                    <Link to="/Menu"><button>Main Menu</button></Link>
                                    <button value="" name="LeaderBoardType" onClick={this.leaderBoardMenu}>Back</button>
                                </div>
                            </Container>
                        </div>
                    </Animated>
                );
            case ("twentyHard"):
                return (
                    <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <Container>
                                <h1 className="text-center">Leader Board</h1>
                                <h3 className="text-center">20 Question (Hard)</h3>
                                <div className="text-center">
                                    <h5>1st:  {this.state.LeaderBoardTwentyHard[0].username} scored a {this.state.LeaderBoardTwentyHard[0].score}</h5>
                                    <h5>2nd:  {this.state.LeaderBoardTwentyHard[1].username} scored a {this.state.LeaderBoardTwentyHard[1].score}</h5>
                                    <h5>3rd:  {this.state.LeaderBoardTwentyHard[2].username} scored a {this.state.LeaderBoardTwentyHard[2].score}</h5>
                                    <h5>4th:  {this.state.LeaderBoardTwentyHard[3].username} scored a {this.state.LeaderBoardTwentyHard[3].score}</h5>
                                    <h5>5th:  {this.state.LeaderBoardTwentyHard[4].username} scored a {this.state.LeaderBoardTwentyHard[4].score}</h5>
                                </div>
                                <div className="text-center">
                                    <Link to="/Menu"><button>Main Menu</button></Link>
                                    <button value="" name="LeaderBoardType" onClick={this.leaderBoardMenu}>Back</button>
                                </div>
                            </Container>
                        </div>
                    </Animated>
                );
            case ("thirtyHard"):
                return (
                    <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <Container>
                                <h1 className="text-center">Leader Board</h1>
                                <h3 className="text-center">30 Question (Hard)</h3>
                                <div className="text-center">
                                    <h5>1st:  {this.state.LeaderBoardThirtyHard[0].username} scored a {this.state.LeaderBoardThirtyHard[0].score}</h5>
                                    <h5>2nd:  {this.state.LeaderBoardThirtyHard[1].username} scored a {this.state.LeaderBoardThirtyHard[1].score}</h5>
                                    <h5>3rd:  {this.state.LeaderBoardThirtyHard[2].username} scored a {this.state.LeaderBoardThirtyHard[2].score}</h5>
                                    <h5>4th:  {this.state.LeaderBoardThirtyHard[3].username} scored a {this.state.LeaderBoardThirtyHard[3].score}</h5>
                                    <h5>5th:  {this.state.LeaderBoardThirtyHard[4].username} scored a {this.state.LeaderBoardThirtyHard[4].score}</h5>
                                </div>
                                <div className="text-center">
                                    <Link to="/Menu"><button>Main Menu</button></Link>
                                    <button value="" name="LeaderBoardType" onClick={this.leaderBoardMenu}>Back</button>
                                </div>
                            </Container>
                        </div>
                    </Animated>
                );
            case (""):
                return (
                    <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <Container>
                                <h1 className="text-center">Leader Boards</h1>
                                <div className="text-center border border-success">
                                    <Row>
                                        <Col>
                                            <button value="tenEasy" name="LeaderBoardType" onClick={this.tenEasy}>Ten Easy</button>
                                            <button value="twentEasy" name="LeaderBoardType" onClick={this.twentyEasy}>Twenty Easy</button>
                                            <button value="thirtyEasy" name="LeaderBoardType" onClick={this.thirtyEasy}>Thirty Easy</button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center border border-danger">
                                    <Row>
                                        <Col>
                                            <button value="tenHard" name="LeaderBoardType" onClick={this.tenHard}>Ten Hard</button>
                                            <button value="twentyHard" name="LeaderBoardType" onClick={this.twentyHard}>Twenty Hard</button>
                                            <button value="thirtyHard" name="LeaderBoardType" onClick={this.thirtyHard}>Thirty Hard</button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <Link to="/Menu"><button className="leaderBoardMenu">Main Menu</button></Link>
                                </div>
                            </Container>
                        </div>
                    </Animated>
                );
            default:
                return (
                    <div>
                        <Container>
                            <h1>Leader Boards</h1>
                            <button value="tenEasy" name="LeaderBoardType" onClick={this.tenEasy}>Ten Easy</button>
                            <Link to="/Menu"><button>Main Menu</button></Link>
                        </Container>
                    </div>
                );

        }
    }
}
export default LeaderBoard;