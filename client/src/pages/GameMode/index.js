import React, { Component } from "react";
import Switch from "react-switch";
import { Link } from 'react-router-dom';
import Container from "../../components/Container";
import { Animated } from "react-animated-css";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css";

class GameMode extends Component {

    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked }, function () {
            console.log(this.state.checked)
        });
    }

    render() {
        if (this.state.checked) {

            return (
                <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                    <div>
                        <Container>
                            <h1 className="text-center">Game Mode</h1>
                            <p className="text-center">Easy for multiple choice and hard for fill in the blank.  (Yes, capitilization and spelling matter.)</p>
                            <div className="text-center border border-success">
                                <Row>
                                    <Col>
                                        <Link
                                            to={
                                                {
                                                    pathname: "/game",
                                                    data: [10]
                                                }
                                            }>
                                            <button className="btnEasy">10 Questions</button>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Link
                                            to={
                                                {
                                                    pathname: "/game",
                                                    data: [20]
                                                }
                                            }>
                                            <button className="btnEasy">20 Questions</button>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Link
                                            to={
                                                {
                                                    pathname: "/game",
                                                    data: [30]
                                                }
                                            }>
                                            <button className="btnEasy">30 Questions</button>
                                        </Link>
                                    </Col>
                                </Row>
                                <p className="text-center">Hard/Easy</p>
                                <p className="text-center">
                                    <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} offColor="#F00" />
                                </p>
                            </div>
                            <br />
                            <p className="text-center">
                                <Link to="/Menu"><button className="gameModeBtn">Main Menu</button></Link>
                            </p>
                        </Container>
                    </div>
                </Animated>
            )
        } else return (
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div>
                    <Container>
                        <h1 className="text-center">Game Mode</h1>
                        <p className="text-center">Easy for multiple choice and hard for fill in the blank.  (Yes, capitilization and spelling matter.)</p>
                        <div className="text-center border border-danger">
                            <Row>
                                <Col>
                                    <Link
                                        to={
                                            {
                                                pathname: "/gameHard",
                                                data: [10]
                                            }
                                        }>
                                        <button className="btnHard">10 Questions</button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link
                                        to={
                                            {
                                                pathname: "/gameHard",
                                                data: [20]
                                            }
                                        }>
                                        <button className="btnHard">20 Questions</button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link
                                        to={
                                            {
                                                pathname: "/gameHard",
                                                data: [30]
                                            }
                                        }>
                                        <button className="btnHard">30 Questions</button>
                                    </Link>
                                </Col>
                            </Row>
                            <p className="text-center">Hard/Easy</p>
                            <p className="text-center">
                                <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} offColor="#F00" />
                            </p>
                        </div>
                        <br />
                        <p className="text-center">
                            <Link to="/Menu"><button className="gameModeBtn">Main Menu</button></Link>
                        </p>
                    </Container>
                </div>
            </Animated>
        )
    };
}

export default GameMode;