import "./style.css";

import { Component } from "react";
import GraphMaker from "../GraphMaker/GraphMaker";

class BuySell extends Component {
  render() {
    return (
      <div className="container">
        <div className="Borders">
          <div className="innerBox">
            <div className="com">IBM</div>
            <div className="fitter">
              <GraphMaker product="IBM" height={300} width={550} />
            </div>
            <div className="colcontainer">
              <button className="green">Buy</button>
              <button className="red">Sell</button>
            </div>
          </div>
          <div className="innerBox">
            <div className="com">TSCO.LON</div>
            <div className="fitter">
              <GraphMaker product="TSCO.LON" height={300} width={550} />
            </div>
            <div className="colcontainer">
              <button className="green">Buy</button>
              <button className="red">Sell</button>
            </div>
          </div>

          <div className="innerBox">
            <div className="com">DAI.DEX</div>
            <div className="fitter">
              <GraphMaker product="DAI.DEX" height={300} width={550} />
            </div>
            <div className="colcontainer">
              <button className="green">Buy</button>
              <button className="red">Sell</button>
            </div>
          </div>

          <div className="innerBox">
            <div className="com">SHOP.TRT</div>
            <div className="fitter">
              <GraphMaker product="SHOP.TRT" height={300} width={550} />
            </div>
            <div className="colcontainer">
              <button className="green">Buy</button>
              <button className="red">Sell</button>
            </div>
          </div>

          <div className="innerBox">
            <div className="com">GPV.TRV</div>
            <div className="fitter">
              <GraphMaker product="GPV.TRV" height={300} width={550} />
            </div>
            <div className="colcontainer">
              <button className="green">Buy</button>
              <button className="red">Sell</button>
            </div>
          </div>

          <div className="innerBox">
            <div className="com">RELIANCE.BSE</div>
            <div className="fitter">
              <GraphMaker product="RELIANCE.BSE" height={300} width={550} />
            </div>
            <div className="colcontainer">
              <button className="green">Buy</button>
              <button className="red">Sell</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuySell;
