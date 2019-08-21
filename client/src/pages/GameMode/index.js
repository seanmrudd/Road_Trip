import React, { Component } from "react";
import Switch from "react-switch";
import { Link } from 'react-router-dom';
import Container from "../../components/Container";
import { Animated } from "react-animated-css";

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
                            <Link
                                to={
                                    {
                                        pathname: "/game",
                                        data: [10]
                                    }
                                }>
                                <button>10 Questions</button>
                            </Link>&nbsp;&nbsp;
                        <Link
                                to={
                                    {
                                        pathname: "/game",
                                        data: [20]
                                    }
                                }>
                                <button>20 Questions</button>
                            </Link>&nbsp;&nbsp;
                        <Link
                                to={
                                    {
                                        pathname: "/game",
                                        data: [30]
                                    }
                                }>
                                <button>30 Questions</button>
                            </Link>
                            <br /><br />
                            <p className="text-center">Hard/Easy</p>
                            <p className="text-center">
                                <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} offColor="#F00" />
                            </p>
                            <br/>
                            <p className="text-center">
                                <Link to="/Menu"><button>Main Menu</button></Link>
                            </p>
                        </Container>
                    </div>
                </Animated>
            )
        } else return (
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div>
                    <Container>
                        <Link
                            to={
                                {
                                    pathname: "/gameHard",
                                    data: [10]
                                }
                            }>
                            <button>10 Questions</button>
                        </Link>&nbsp;&nbsp;
                    <Link
                            to={
                                {
                                    pathname: "/gameHard",
                                    data: [20]
                                }
                            }>
                            <button>20 Questions</button>
                        </Link>&nbsp;&nbsp;
                    <Link
                            to={
                                {
                                    pathname: "/gameHard",
                                    data: [30]
                                }
                            }>
                            <button>30 Questions</button>
                        </Link>
                        <br /><br />
                        <p className="text-center">Hard/Easy</p>
                        <p className="text-center">
                            <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} offColor="#F00" />
                        </p>
                        <br />
                        <p className="text-center">
                            <Link to="/Menu"><button>Main Menu</button></Link>
                        </p>
                    </Container>
                </div>
            </Animated>
        )
    };
}

export default GameMode;