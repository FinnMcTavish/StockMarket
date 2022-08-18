import "./style.css";

import React from "react";

import LineChart from "./LineChart";

class Login_graph extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <div className="flex-container">
          <div>
            <h1 className="title">Stonks</h1>
          </div>
          <div className="small-flex">
            <button className="blue">Login</button>
            <button className="green">Register</button>
          </div>
        </div>
        <LineChart />
      </div>
    );
  }
}

export default Login_graph;
