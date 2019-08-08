import React from "react";
import "./style.css";

function Jumbotron(props) {
  return <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 claclassNamess="display-4">Clicky Game!</h1>
      <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      <p>
        <ul>
          <li>
            {props.score}
          </li>
          <li>
            {props.topScore}
          </li>
        </ul>
      </p>
    </div>
  </div>
};

export default Jumbotron;