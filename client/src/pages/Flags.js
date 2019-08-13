import React, { Component } from "react";
import Card from "../components/Card";
import usStates from "../statesData.json";

class Flags extends Component {
    state = {
        usStates
    };

    render() {
        return (
            <div>
                    {this.state.usStates.map(usState => (
                        <Card
                            id={usState.id}
                            key={usState.id}
                            name={usState.name}
                            image={usState.flagImage}
                        />
                    ))}
            </div>
        );
    }
}
export default Flags;