import React from "react";
import "./Clicky.css";

const Clicky = props => (
  <div onClick={(e) => props.shuffleCards(e, props.id)} value={props.selected} className="card">
    <div className="img-container" value={props.selected}>
      <img alt={props.name} src={props.image}  value={props.selected}/>
    </div>
    <div value={props.selected} className="content">
      <ul value={props.selected}>
        <li value={props.selected}>
          <strong>{props.name}</strong>
        </li>
      </ul>
    </div>
  </div>
);

export default Clicky;
