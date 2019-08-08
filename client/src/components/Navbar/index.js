import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item title">
            Clicky Game
          </li>
          <li className="nav-item instruction">
            Click an image to begin!
          </li>
          <li className="nav-item score">
          <ul>
              <li>
                {props.score}
              </li>
              <li>
                {props.topScore}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
