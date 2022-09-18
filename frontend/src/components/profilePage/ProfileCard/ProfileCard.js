import React from "react";
import "./ProfileCard.css";
import pic from "../../../assets/blue-transparent.png";
import Square from "../Square/Square";
import point from "../../../assets/point.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function ProfileCard() {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const username = sessionStorage.getItem("username");

    Axios.get("http://localhost:3002/getData").then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i]["username"] === username) {
          setProfileData(response.data[i]);
        }
      }
    });
  }, []);

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
                {/* <h2>{profileData.username}</h2> */}
              </center>
              <div className="points-container">
                <h3 className="points">POINTS</h3>
                <h3 className="points-num">{profileData.coins}</h3>
                <img className="coin" src={point}></img>
              </div>

              <h4 className="play-from">
                Started Playing from{" "}
                {/* <span className="date">16th August 2022</span> */}
                <span className="date">{profileData.start}</span>
              </h4>
            </div>
          </div>

          <div className="square-parent">
            <div className="square-container">
              <Square title={"IBM : " + profileData["IBM"]} />
              <Square title={"TSCO : " + profileData["TSCO"]} />
              <Square title={"DAI : " + profileData["DAI"]} />
              <Square title={"SHOP : " + profileData["SHOP"]} />
            </div>
          </div>
        </div>
      </center>
    </section>
  );
}

export default ProfileCard;
