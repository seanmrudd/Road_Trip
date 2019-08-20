import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Flag from "../assets/images/download.png";
import Container from "../components/Container";
import { Animated } from "react-animated-css";


class Flags extends Component {



    render() {
        return (
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div>
                    <Container>
                        <h1 className="display-4 text-center">50 States and Capitals</h1>
                        <p className="lead text-center">50 States and Capitals is a trivia game that will show you if you know your states and their capitals.</p>
                        <p className="text-center">
                            <img src={Flag} alt="flag"></img>
                        </p>
                        <Link to="/GameMode"><h3 className="text-center">Start Game</h3></Link><br />
                        <p className="text-center">
                            <Link to="/LeaderBoard">Leader Boards</Link>
                            <span>&nbsp;&nbsp;| </span>
                            <Link to="/PersonalBests">Personal Bests</Link>
                            <span>&nbsp;&nbsp;| </span>
                            <Link to="*">Need Log Out</Link>
                        </p>
                    </Container>
                </div>
            </Animated>
        );
    }
}
export default Flags;
