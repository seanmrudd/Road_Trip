import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from 'react-router-dom';

class Flags extends Component {

    render() {
        return (
            <div>
                <Jumbotron />
                <Link to="/GameMode"><h3>Start Game</h3></Link><br/>
                <Link to="/LeaderBoard">Leader Boards</Link>
                <Link to="/PersonalBests">Personal Bests</Link>
                <Link to="*">Need Log Out</Link>
            </div>
        );
    }
}
export default Flags;