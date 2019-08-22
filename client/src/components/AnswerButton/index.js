import React from "react";
import "./style.css";

function AnswerButton(props) {
  return (
    <button onClick={props.onClick} className={`card-btn btn-outline-danger ${props["data-name"]}`} {...props} />
  );
}

export default AnswerButton;