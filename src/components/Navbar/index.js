import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <span className="brand-logo left"> Mind's Eye </span>
          <span className="brand-logo center"> Click an image to begin! </span>
          <span className="brand-logo right"> Score: {props.score} | Top Score: {props.topScore} </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;