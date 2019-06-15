
import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className= "vert-align" >
    <ul>

      <li id="rw" className="loseText" img src="./public/images/roger.gif">{props.rightWrong} </li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;