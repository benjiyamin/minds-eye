import React from "react";
import "./style.css";

function Item(props) {
  return (
    <div className="col s6 m4 l3" onClick={props.handleClick}>
      <div className="card">
        <div className="card-image">
          <img src={props.imgSrc}></img>
        </div>
        {props.score}
      </div>
    </div>
  )
}

export default Item;