import "./style.css";
import pic from "../../assets/stonksManProfile.jpg";
import React from "react";

import { Component } from "react";
import GraphMaker from "./GraphMakerMainPage";

class BuySellMainPage extends Component {
  render() {
    return (
      <div className="container Borders">
            <div className="fitter">
              <GraphMaker product="IBM"/>
              <img src={pic} alt="John Doe" className="profile-pic"></img>
              <ul className="slider"><li>Points</li></ul>
            </div>
            <div className="drop">
<nav>

  <label for="touch"><span>Companies</span></label>               
  <input type="checkbox" id="touch" /> 

  <ul className="slide">
    <li><a href="#">Company1</a></li> 
    <li><a href="#">Company2</a></li>
    <li><a href="#">Company3</a></li>
    <li><a href="#">Company4</a></li>
  </ul>

</nav>
            </div>
            <div className="colcontainer">
              <button className="green">Buy</button>
              <button className="red">Sell</button>
            </div>
      </div>
    );
  }
}

export default BuySellMainPage;
