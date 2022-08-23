import "./style.css";

import { Component } from "react";

import LineChart from "../../landing_page/div3/LineChart";

class BuySell extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="com">IBM</div>
        <div className="fitter">
          <LineChart />
        </div>
        <div className="colcontainer">
          <button>Buy</button>
          <button>Sell</button>
        </div>
      </div>
    );
  }
}

export default BuySell;
