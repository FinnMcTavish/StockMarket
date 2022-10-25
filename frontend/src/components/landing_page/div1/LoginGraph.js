import "./style.css";

import React from "react";

import StonksMan from "../../../assets/stonks man.png";
import GraphImage from "../../../assets/graph-image.png";
import Navbar from "./Navbar";
class LoginGraph extends React.Component {
  render() {
    let h = window.screen.availHeight;
    const mystyle = {
      height: h,
    };
    // let w = window.screen.availWidth;
    // const history = useHistory();
    return (
      <div style={mystyle}>
        {" "}
        {!sessionStorage.getItem("username") ? <Navbar /> : ""}
        <div className=" image-fix">
          <img src={StonksMan} alt="Stonks Man" />
          <img src={GraphImage} alt="Stonks Man" />
        </div>
      </div>
    );
  }
}

export default LoginGraph;
