import React from "react";
import "./style.css";

function Navbar(props) {
  let statusMessage
  if (props.score) {
    statusMessage = <span className="brand-logo center correct"> You guessed correctly! </span>
  } else if (props.topScore) {
    statusMessage = <span className="brand-logo center incorrect"> You guessed incorrectly! </span>
  } else {
    statusMessage = <span className="brand-logo center"> Click an image to begin! </span>
  }

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <span className="brand-logo left"> Mind's Eye </span>
          {statusMessage}
          <span className="brand-logo right"> Score: {props.score} | Top Score: {props.topScore} </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;