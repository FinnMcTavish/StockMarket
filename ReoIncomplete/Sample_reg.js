import { useState, useEffect } from "react";
import React from "react";
import Axios from "axios";
import "./Sample_regStyle.css"

function Sample_reg() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [listOfData, setListOfData] = useState([]);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3002/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
    Axios.get("http://localhost:3002/getData").then((response) => {
      setListOfData(response.data);
    });
  }, []);
  //{"username":"dani","coins":0,"IBM":0,"TSCO":0,"DAI":0,"SHOP":0,"GPV":0,"RELIANCE":0,"start":new Date()}
  const dataCreator = () => {
    var today = new Date();

    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const coins = 0,
      IBM = 0,
      TSCO = 0,
      DAI = 0,
      SHOP = 0,
      GPV = 0,
      RELIANCE = 0,
      start = date;

    Axios.post("http://localhost:3002/createData", {
      username,
      coins,
      IBM,
      TSCO,
      DAI,
      SHOP,
      GPV,
      RELIANCE,
      start,
    }).then((response) => {
      setListOfData([
        ...listOfData,
        {
          username,
          coins,
          IBM,
          TSCO,
          DAI,
          SHOP,
          GPV,
          RELIANCE,
          start,
        },
      ]);
    });
  };

  const userCreator = () => {
    Axios.post("http://localhost:3002/createUser", {
      username,
      password,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          username,
          password,
        },
      ]);
    });
  };

  const createUser = () => {
    Axios.get("http://localhost:3002/getUsers").then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i]["username"] === username) {
          alert("Username " + response.data[i]["username"] + " already exist!");

          console.log("User already exist!");
          return "already exist";
        }
      }
      console.log("User created");
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("active", new Date().getTime());
      console.log("Logged in as " + sessionStorage.getItem("username"));
      userCreator();
      dataCreator();
    });
  };

  return (
    <div className="container">
  <input id="input" className="input" type="checkbox" />
  
  <label for="input" className="toggle">
    <span className="text sign-text">Sign Up</span>
    <span className="icon">
      <svg className="arrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path>
      </svg>
    </span>
    <span className="text log-text">Log In</span>
</label>
 
<div className="card">
    <div className="content sign">
        <h2 className="title">Sign Up</h2>
        <div className="fields">
            <label className="field">
                <div className="icon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
                    </g>
                </svg>
                </div>
                <input type="text" className="name" placeholder="Your name"/>
            </label>

            <label className="field">
                <div className="icon">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
                </div>
                <input type="email" className="email" placeholder="Your Email"/>
            </label>

            <label className="field">
                <div className="icon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path>
                </svg>
                </div>
                <input type="password" className="password" placeholder="Your Password"/>
            </label>
        </div>

        <div className="submit">
            <button type="submit" className="button-submit">Submit</button>
        </div>
    </div>
    <div className="content log">
      <h2 className="title">Log In</h2>
      <div className="fields">
        <label className="field">
          <div className="icon">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
            </svg>
          </div>
          <input type="text" className="email" placeholder="Username"
          
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          
          />
        </label>

        <label className="field">
          <div className="icon">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path>
            </svg>
          </div>
          <input type="password" className="password" placeholder="Password"
          
          onChange={(event) => {
            setPassword(event.target.value);
          }}/>
        </label>
      </div>

      <div className="submit">
        <button type="submit" className="button-submit" onClick={createUser} >Submit</button>
      </div>
  </div>
</div> 
</div> 




  );
}

export default Sample_reg;
