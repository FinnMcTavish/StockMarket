import "./style.css";

import React from "react";

class RegNav extends React.Component {
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
        </nav>
      </div>
    );
  }
}

export default RegNav;
