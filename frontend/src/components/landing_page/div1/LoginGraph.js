import "./style.css";

import React from "react";

import StonksMan from "../../../assets/stonks man.png";
import GraphImage from "../../../assets/graph-image.png";

class LoginGraph extends React.Component {
  render() {
    let h = window.screen.availHeight;
    let w = window.screen.availWidth;
    const mystyle = {
      maxHeight: h,
      maxWidth: w,
    };
    return (
      <div style={mystyle}>
        {" "}
        <nav className="flex-container">
          <div>
            <h1 className="title">Stonks</h1>
          </div>
          <div className="small-flex">
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>
        </nav>
        <div className=" image-fix">
          <img src={StonksMan} alt="Stonks Man" />
          <img src={GraphImage} alt="Stonks Man" />
        </div>
      </div>
    );
  }
}

export default LoginGraph;
