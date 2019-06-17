
import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className= "vert-align" >
    
    <ul >

      <li id="rw" className="loseText" img src="./public/images/roger.gif">{props.rightWrong} </li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>

      <li> MAX Score = 12</li>
    </ul>
   
    <row>
      <h3>Click on a pic to score points. Try not to click the same pic twice.{props.title}</h3></row>
  </nav>
);

export default Nav;