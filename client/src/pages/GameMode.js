import React, { Component } from "react";
import Switch from "react-switch";
import { Link } from 'react-router-dom';


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
        return (
            <div>
                <Link
                    to={{ pathname: "/game", data: [10] }}>
                    <button>10 Questions</button>
                </Link>
                <Link
                    to={{ pathname: "/game", data: [20] }}>
                    <button>20 Questions</button>
                </Link>
                <Link
                    to={{ pathname: "/game", data: [30] }}>
                    <button>30 Questions</button>
                </Link>
                <p>Hard/Easy</p>
                <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} offColor="#F00" />
            </div>
        )
    };
}

export default GameMode;