import React from "react";
import "./ProfileCard.css";
import pic from "../../../assets/blue-transparent.png";
import Square from "../Square/Square";
import point from "../../../assets/point.png";
function ProfileCard() {
  return (
    <section className="profcard">
      <center>
        <div className="rect">
          <div className="circle">
            <img src={pic}></img>
          </div>
          <div className="circle">
            <div className="parent">
              <center>
                <h2>Profile Name</h2>
              </center>
              <div className="points-container">
                <h3 className="points">POINTS</h3>
                <h3 className="points-num">15</h3>
                <img classname="coin" src={point}></img>
              </div>

              <h4 className="play-from">
                Started Playing from{" "}
                <span className="date">16th August 2022</span>
              </h4>
            </div>
          </div>

          <div className="square-parent">
            <div className="square-container">
              <Square title="IBM" />
              <Square title="XYZ" />
              <Square title="AAA" />
              <Square title="BBB" />
            </div>
            <div className="square-container">
              <Square title="CCC" />
              <Square title="DDD" />
              <Square title="EEE" />
              <Square title="FFF" />
            </div>
          </div>
        </div>

      </center>
      
    </section>
  );
}

export default ProfileCard;
