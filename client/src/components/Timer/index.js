import React from "react";
import "./style.css";
import Col from "../Col";
import Row from "../Row";

function Timer(props) {
    return (
        <div className="timer text-center">
            <div className="timer">
                <Row>
                    <Col>
                        <h5>Time Left: {props.timeLeft}</h5>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Timer;