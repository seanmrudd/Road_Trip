import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <h3>{props.name}</h3>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
