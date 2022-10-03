import { React, useState, useEffect } from "react";



import { useNavigate } from "react-router-dom";



import Axios from "axios";
import "./SampleRegstyle.css";
import Pic1 from "./../../assets/stonksManProfile.jpg";
import Pic2 from "./../../assets/stonksManProfile.jpg";

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

    {
      if (!sessionStorage.getItem("username")) {
        alert("Session expired!");
      }
    }


  }, []);
  // {"username":"dani","coins":0,"IBM":{stocks:0,times:0,cp:0},"TSCO":{stocks:0,times:0,cp:0},"DAI":{stocks:0,times:0,cp:0},"SHOP":{stocks:0,times:0,cp:0},"GPV":{stocks:0,times:0,cp:0},"RELIANCE":{stocks:0,times:0,cp:0},"start":new Date()}
  const dataCreator = () => {
    var today = new Date();

    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const coins = 0,
      profit = 0,
      IBM = { stocks: 0, times: 0, cp: 0 },
      TSCO = { stocks: 0, times: 0, cp: 0 },
      DAI = { stocks: 0, times: 0, cp: 0 },
      SHOP = { stocks: 0, times: 0, cp: 0 },
      GPV = { stocks: 0, times: 0, cp: 0 },
      RELIANCE = { stocks: 0, times: 0, cp: 0 },
      start = date;

    Axios.post("http://localhost:3002/createData", {
      username,
      profit,
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
          profit,
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










  
  const [password1, setPassword1] = useState("");
  const [username1, setUsername1] = useState("");

  const navigate = useNavigate();

  const confirmUser = (event) => {
    Axios.get("http://localhost:3002/getUsers").then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i]["username"] === username1) {
          if (response.data[i]["password"] === password1) {
            alert("Welcome " + response.data[i]["username"] + " !");
            sessionStorage.setItem("username", username1);
            sessionStorage.setItem("active", new Date().getTime());
            navigate("/");
            return "Login Success";
          } else {
            alert("Wrong Password");
            return "Wrong password";
          }
        }
      }
      alert("Invalid username");
    });
    event.preventDefault();
  };




  return (

<div className="container">
<input type="checkbox" id="flip" />
<div className="cover">
  <div className="front">
    <img src={Pic1} alt="" />
  </div>
  <div className="back">
    <img src={Pic2} alt="" />
  </div>
</div>
<div className="forms">
    <div className="form-content">
      <div className="login-form">
        <div className="title">Login</div>
      <form action="#" onSubmit={confirmUser}>
        <div className="input-boxes">
          <div className="input-box">
            <i class="fas fa-envelope"></i>
            <input type="text" placeholder="Enter your email" required 
            onChange={(e) => {
              setUsername1(e.target.value);
            }}/>
          </div>
          <div className="input-box">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Enter your password" required 
            onChange={(e) => {
              setPassword1(e.target.value);
            }}/>
          </div>
          <div className="text"><a href="#">Forgot password?</a></div>
          <div className="button input-box">
            <input type="submit" value="Submit" />
          </div>
          <div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
        </div>
    </form>
  </div>
    <div className="signup-form">
      <div className="title">Signup</div>




    <form action="#">
        <div className="input-boxes">
          <div className="input-box">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <i class="fas fa-envelope"></i>
            <input type="text" placeholder="Enter your email" required  
            onChange={(event) => {
            setUsername(event.target.value);
          }}/>
          </div>
          <div className="input-box">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Enter your password" required 
            onChange={(event) => {
              setPassword(event.target.value);
            }}/>
          </div>
          <div className="button input-box">
            <input type="submit" value="Submit" 
            onClick={createUser}/>
          </div>
          <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
        </div>
  </form>
</div>
</div>
</div>
</div>

  );
}

export default Sample_reg;
