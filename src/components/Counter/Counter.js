import React from "react";
import "./Counter.css";

const Counter = props => (

  <div className="counter"><p>Score: {props.counter}</p>
    <p>High Score: {props.highscore}</p></div>

);

export default Counter;
