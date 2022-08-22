import React from "react";
import "./howtoplaystyle.css";

class HowtoPlay extends React.Component {
  render() {
    return (
      <div className="bodys">
        <center>
          <h1 className="howtoplay">How to Play</h1>
        </center>

        <div className="cards-list">
          <div className="card">
            <div className="card_title title-white">
              <p>How to play ?</p>
            </div>
          </div>

          <div className="card ">
            <div className="card_title title-white">
              <p>How to play ?</p>
            </div>
          </div>

          <div className="card ">
            <div className="card_title title-white">
              <p>How to play ?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowtoPlay;
