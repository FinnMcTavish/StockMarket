import "./style.css";

import React from "react";

import StonksMan from "../../../assets/stonks man.png";

class LoginGraph extends React.Component {
  render() {
    return (
      <div>
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
          <img src={StonksMan} alt="Stonks Man" />
        </div>
      </div>
    );
  }
}

export default LoginGraph;
