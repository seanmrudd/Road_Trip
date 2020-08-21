import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Flag from "../../assets/images/download.png";
import Container from "../../components/Container";
import { Animated } from "react-animated-css";
import "./style.css";
// import CorrectModal from "../../components/CorrectModal";
// import axios from "axios";


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
                            <Link to="/LeaderBoard"><button className="btnLeaderBoard">Leader Boards</button></Link>
                            {/* <Link to="/PersonalBests"><button className="btnPersonalBest">Personal Bests</button></Link> */}
                            <Link to="/Login"><button className="btnLogOut" onClick={this.handleLogOut}>Log Out</button></Link>
                        </p>
                    </Container>
                </div>
                {/* <CorrectModal /> */}
            </Animated>
        );
    }
}
export default Flags;
