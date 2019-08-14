import React from "react";
import "./style.css";
import { PromiseProvider } from "mongoose";

function Jumbotron(props) {
  return <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 claclassNamess="display-4">50 States</h1>
      <p className="lead">50 States is a trivia game that will test what you know about each and every state in the union.</p>
      <p>
        <img src={props.flag} alt="flag"></img>
      </p>
    </div>
  </div>
};

export default Jumbotron;