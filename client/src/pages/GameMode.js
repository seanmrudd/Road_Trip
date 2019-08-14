import React, { Component } from "react";
import Switch from "react-switch";


class GameMode extends Component {

    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked }, function(){
            console.log(this.state.checked)
        });
    }

    render() {
        return (
            <div>
                <button>10 Questions</button>
                <button>15 Questions</button>
                <button>20 Questions</button>
                <p>Hard/Easy</p>
                <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} offColor="#F00" />
            </div>
        )
    };
}

export default GameMode;