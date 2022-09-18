import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
function Sample_login() {
  useEffect(() => {
    if (!sessionStorage.getItem("username")) {
      alert("Session expired!");
    }
  }, []);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const confirmUser = (event) => {
    Axios.get("http://localhost:3002/getUsers").then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i]["username"] === username) {
          if (response.data[i]["password"] === password) {
            alert("Welcome " + response.data[i]["username"] + " !");
            sessionStorage.setItem("username", username);
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
    <div>
      <form onSubmit={confirmUser}>
        <input
          type="text"
          required
          placeholder="Enter the username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          required
          placeholder="Enter the password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Sample_login;
