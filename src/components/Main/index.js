import React from "react";
import "./style.css";

function Main(props) {
  let containerClass = props.incorrect ? 'container shake' : 'container'
  return (
    <main className={containerClass}>
      <div className="row">
        {props.children}
      </div>
    </main>
  )
}

export default Main;