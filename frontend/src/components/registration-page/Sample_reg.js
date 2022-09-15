import { useState, useEffect } from "react";
import Axios from "axios";

function Sample_reg() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3002/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

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
      console.log("Logged in as " + sessionStorage.getItem("username"));
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
          placeholder="Username..."
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
