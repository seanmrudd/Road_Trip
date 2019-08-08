import React, { Component } from "react";
// import Card from "../components/Card";
import usStates from "../statesData.json";

class Game extends Component {
    state = {
        usStates
    };

    question = {
        questions
    };

    //Function to initiate game

    componentDidMount() {
            console.log({usStates})
        };
    }
    
    //Function to pick random state

    pickState = () => {
        let i = Math.floor(Math.random() * 50);
        // let statePicked = this.state.usStates[i];
        // console.log(statePicked);
        console.log(i);
        // randomQuestion();
    }

    //Function to pick random question
    // randomQuestion = () => {
    //     let i = Math.floor(Math.random() * 2);
    //     switch (i) {
    //         case 0:
    //             function whatState () {
    //                 return statePicked.name
    //             }
    //     }
    // }


    //Function to grab correct answer

    //Function to make 3 incorrect answers

    //Function to validate user answer

    //Function to add point

    //Function to move on to next question

    //Function to end game and head to GameResults.js

    render() {
        return (
            <div>
                {JSON.stringify(this.state.usStates)}
            </div>
        )
    };
}

export default Game;