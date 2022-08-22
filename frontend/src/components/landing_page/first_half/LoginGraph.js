import "./style.css";

import React from "react";

import LineChart from "./LineChart";

import HowtoPlay from "./HowtoPlay";

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
        {/* <HowtoPlay />
        <LineChart /> */}
      </div>
    );
  }
}

export default LoginGraph;
