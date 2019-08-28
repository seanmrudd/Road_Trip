import React from "react";
import "./style.css";

function Timer(props) {
    return (
        <div className="timer text-center">
            <div>
                    <h5 className="text-center">Time Left: {props.timeLeft}</h5>
            </div>
        </div>
    );
}

export default Timer;