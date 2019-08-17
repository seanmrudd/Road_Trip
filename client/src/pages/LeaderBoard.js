import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../utils/API";


class Flags extends Component {

    state = {
        data: []
    }

    loadLeaderBoards = () => {
        API.getLeaderBoards()
            .then(res => 
                this.setState({
                    LeaderBoards: res.data
                })
                )
                .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>I'm Leader board</h1>
                <Link to="/Menu"><button>Main Menu</button></Link>
            </div>
        );
    }
}
export default Flags;