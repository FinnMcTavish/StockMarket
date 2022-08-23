import "./style.css";

import { Component } from "react";
import GraphMaker from "../GraphMaker/GraphMaker";

class BuySell extends Component {
  render() {
    return (
      <div className="container">
        <div className="com">IBM</div>
        <div className="fitter">
          <GraphMaker product="IBM" height={300} width={550} />
        </div>
        <div className="colcontainer">
          <button className="green">Buy</button>
          <button className="red">Sell</button>
        </div>
      </div>
    );
  }
}

export default BuySell;
