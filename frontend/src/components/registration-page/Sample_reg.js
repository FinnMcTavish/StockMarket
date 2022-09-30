import { useState, useEffect } from "react";
import Axios from "axios";

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

  return (
    <div className="Sample_reg">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div key={user.username}>
              <h1>Username: {user.username}</h1>
              <h1>Password: {user.password}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default Sample_reg;
