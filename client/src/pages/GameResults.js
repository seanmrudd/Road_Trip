import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Flags extends Component {

    state = {
        numberCorrect: 0,
        totalNumber: 0,
        percentage: 0
    }

    componentDidMount() {
        const data = this.props.location.data;
        console.log(data)
        this.setState({
            numberCorrect: data[0],
            totalNumber: data[1]
        },
            function () {
                console.log(this.state.numberCorrect + "and" + this.state.totalNumber)
                this.percentage()
            })
    }

    percentage = () => {
        console.log(((this.state.numberCorrect / this.state.totalNumber) * 100).toFixed(2))
        this.setState({ percentage: ((this.state.numberCorrect / this.state.totalNumber) * 100).toFixed(2) })
    }


    render() {
        return (
            <div>
                <h1>Game Results</h1>
                <h3>You scored a {this.state.percentage}%.</h3>
                <Link to="/Menu"><button>Main Menu</button></Link>
            </div>
        );
    }
}
export default Flags;