import React from "react";
import "./style.css";


function Navbar(props) {

  function statusClasses () {
    if (props.score) {
      return "brand-logo center correct"
    } else {
      return props.topScore ? "brand-logo center incorrect" : "brand-logo center"
    }
  }

  function statusMessage() {
    if (props.score) {
      return "You guessed correctly!"
    } else {
      return props.topScore ? "You guessed incorrectly!" : "Click an image to begin!"
    }
  }

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <span className="brand-logo left"> Mind's Eye </span>
          <span className={statusClasses()}> {statusMessage()} </span>
          <span className="brand-logo right"> Score: {props.score} | Top Score: {props.topScore} </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;