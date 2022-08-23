import React from "react";
import "./howtoplaystyle.css";

class HowtoPlay extends React.Component {
  render() {
    let h = window.screen.availHeight;
    let w = window.screen.availWidth;
    const mystyle = {
      minHeight: h - 150,
      maxWidth: w,
    };
    return (
      <div className="bodys">
        <div className="cards-list" style={mystyle}>
          <center>
            <h1 className="howtoplay">How to Play</h1>
          </center>
          <div className="card">
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
