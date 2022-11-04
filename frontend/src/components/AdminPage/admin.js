import axios from "axios";
import React from "react";
import { Component } from "react";

class admin extends Component {
  state = {
    purchases: [],
    total_purchases: 0,
    products: [],
    userData: {},
    ban: [],
    email: [],
  };

  componentDidMount() {
    this.getUserData();
    this.getBan();
  }
  getBan = () => {
    axios
      .get("http://localhost:3002/getUsers")
      .then((response) => {
        const data = response.data;
        data.map((value, index) => {
          this.setState({ ban: [...this.state.ban, value.ban] });
          this.setState({ email: [...this.state.email, value.email] });
        });
      })
      .catch(() => {
        alert("Error in data retrival!!!!");
      });
  };

  getUserData = async () => {
    await axios
      .get("http://localhost:3002/getData")
      .then((response) => {
        const data = response.data;
        // console.log(data);
        if (data.length) {
          data.map((product, index) => {
            const x =
              product["IBM"]["times"] +
              product["TSCO"]["times"] +
              product["DAI"]["times"] +
              product["SHOP"]["times"] +
              product["GPV"]["times"] +
              product["RELIANCE"]["times"];
            console.log(x);
            this.setState({
              purchases: [...this.state.purchases, x],
              total_purchases: this.state.total_purchases + x,
            });

            console.log(this.state.purchases);
            console.log("total:", this.state.total_purchases);
          });
        }
        this.setState({ products: data });
      })

      .catch(() => {
        alert("Error in data retrival!!!!");
      });
  };

  displayUserData = () => {
    // if (!this.state.products.length) return console.log("ERRRRRROR");

    return this.state.products.map((product, index) => {
      return (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            borderRadius: "10px",
            border: "solid #7928ca",
            boxShadow: "0 0 10px #7928ca",
            margin: "30px 10px 15px 10px",
            padding: "60px 100px",
          }}
        >
          <div>
            <h3>UserName: {product["username"]} </h3>
            <h3>Email: {this.state.email[index]} </h3>
            <h3>StartDate: {product["start"]}</h3>
            <h3>Coins: {product["coins"]}</h3>
            <h3>Profit: {product["profit"]}</h3>
            <h3>No of Purchases:{this.state.purchases[index]}</h3>
            <h3>Ban:{this.state.ban[index] ? "True" : "False"}</h3>
          </div>

          <div>
            <table>
              <tr>
                <th>Companies</th>
                <th>Stocks</th>
                <th>Times</th>
                <th>CP</th>
              </tr>
              <tr>
                <td>IBM</td>
                <td>{product["IBM"]["stocks"]}</td>
                <td>{product["IBM"]["times"]}</td>
                <td>{product["IBM"]["cp"]}</td>
              </tr>
              <tr>
                <td>TSCO</td>
                <td>{product["TSCO"]["stocks"]}</td>
                <td>{product["TSCO"]["times"]}</td>
                <td>{product["TSCO"]["cp"]}</td>
              </tr>
              <tr>
                <td>DAI</td>
                <td>{product["DAI"]["stocks"]}</td>
                <td>{product["DAI"]["times"]}</td>
                <td>{product["DAI"]["cp"]}</td>
              </tr>
              <tr>
                <td>SHOP</td>
                <td>{product["SHOP"]["stocks"]}</td>
                <td>{product["SHOP"]["times"]}</td>
                <td>{product["SHOP"]["cp"]}</td>
              </tr>
              <tr>
                <td>GPV</td>
                <td>{product["GPV"]["stocks"]}</td>
                <td>{product["GPV"]["times"]}</td>
                <td>{product["GPV"]["cp"]}</td>
              </tr>
              <tr>
                <td>RELIANCE</td>
                <td>{product["RELIANCE"]["stocks"]}</td>
                <td>{product["RELIANCE"]["times"]}</td>
                <td>{product["RELIANCE"]["cp"]}</td>
              </tr>
            </table>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          background: "black",
          display: "flex",
          flexDirection: "column",
          color: "black",
          alignItems: "center",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background: "#1c1c1c",
              padding: "15px 100px",
              borderRadius: "10px",
              margin: "10px",
              color: "white",
              textAlign: "center",
              borderRadius: "10px",
              border: "solid #7928ca",
              boxShadow: "0 0 10px #7928ca",
            }}
          >
            <h1>Number of Users</h1>
            <br />

            <h2>{this.state.products.length}</h2>
          </div>

          <div
            style={{
              background: "#1c1c1c",
              padding: "15px 100px",
              borderRadius: "10px",
              margin: "10px",
              color: "white",
              textAlign: "center",
              borderRadius: "10px",
              border: "solid #7928ca",
              boxShadow: "0 0 10px #7928ca",
            }}
          >
            <h1>Number of Purchase</h1>
            <br />

            <h2>{this.state.total_purchases}</h2>
          </div>

          <div
            style={{
              background: "#1c1c1c",
              padding: "15px 100px",
              borderRadius: "10px",
              margin: "10px",
              color: "white",
              textAlign: "center",
              borderRadius: "10px",
              border: "solid #7928ca",
              boxShadow: "0 0 10px #7928ca",
            }}
          >
            <h1>Number of Companies</h1>
            <br />

            <h2>6</h2>
          </div>
        </div>

        <div
          style={{
            background: "black",
            padding: "10px 14px",
            color: "white",
            width: "100%",
          }}
        >
          <this.displayUserData />
        </div>
      </div>
    );
  }
}

export default admin;
