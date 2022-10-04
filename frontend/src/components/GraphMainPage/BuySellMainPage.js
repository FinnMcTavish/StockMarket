import "./style.css";
import pic from "../../assets/stonksManProfile.jpg";
import React from "react";
import Axios from "axios";
import { Component } from "react";
import GraphMaker from "./GraphMakerMainPage";
// import {  } from "react-router-dom";
//  symbols: [
//   "IBM",
//   "TSCO.LON",
//   "SHOP.TRT",
//   "GPV.TRV",
//   "DAI.DEX",
//   "RELIANCE.BSE",
// ],
class BuySellMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "IBM",
      number: 0,
      userData: {},
      todayPrice: 0,
      productPrice: 0,
      buyGain: 0,
      sellGain: 0,
    };
  }

  componentDidMount() {
    this.setTodayPrice(this.state.product);
    this.setUserProductData(this.state.product);
    this.setProfit();
  }

  updateData = (product) => {
    this.setState({ product: product });
    console.log(this.state.product);
    this.setTodayPrice(product);
    this.setUserProductData(product.split(".")[0]);
    this.setProfit();
  };

  setProfit = () => {
    this.setState({
      buyGain: this.state.todayPrice - this.state.productPrice,
      sellGain: this.state.productPrice - this.state.todayPrice,
    });
  };

  setUserProductData = async (product) => {
    const username = sessionStorage.getItem("username");

    await Axios.get("http://localhost:3002/getData").then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i]["username"] === username) {
          this.setState({
            userData: response.data[i],
            productPrice: response.data[i][product.split(".")[0]]["cp"],
          });
          // console.log(this.state.userData);
        }
      }
    });
  };

  setTodayPrice = async (product) => {
    const API_REQ = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${product}&outputsize=full&apikey=demo`;
    await fetch(API_REQ)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let lastValue =
          data["Time Series (Daily)"][
            Object.keys(data["Time Series (Daily)"])[0]
          ][["1. open"]];
        this.setState({ todayPrice: lastValue });
      });
  };

  putData = async (data) => {
    const username = sessionStorage.getItem("username");
    Axios.put(`http://localhost:3002/update/${username}`, data).then(
      (response) => {
        console.log(response.data);
        // this.updateData()
      }
    );
  };

  buyItem = async () => {
    if (this.state.number <= 0) {
      alert("Please specify the proper stock value");
      this.nameInput.focus();
      return;
    } else if (this.state.number == undefined || this.state.number == "") {
      alert("Please specify the number of tasks");
      this.nameInput.focus();
      return;
    }
    if (this.state.userData.coins < this.state.number * this.state.todayPrice) {
      alert(
        `Sorry you don't have enough money to buy ${this.state.number} ${
          this.state.product
        } which costs ${
          this.state.number * this.state.todayPrice
        } coins. Number of coins you have: ${this.state.userData.coins} `
      );
      return;
    } else {
      // this.setState({ product: this.state.product.split(".")[0] });
      let stocks = parseFloat(
        this.state.userData[this.state.product.split(".")[0]]["stocks"]
      );
      let times =
        this.state.userData[this.state.product.split(".")[0]]["times"];
      let cp = this.state.productPrice;
      let buyPrice = this.state.number * this.state.todayPrice;
      const coins = this.state.userData.coins - buyPrice;
      cp = (cp * stocks + buyPrice) / (stocks + this.state.number);
      times += 1;
      stocks += parseFloat(this.state.number);
      alert("Stocks bought successfully!");
      console.log(
        `${this.state.number} ${this.state.product} stocks bought for ${buyPrice}. Coins have ${coins}. Avg = ${cp}, times= ${times}. Number of ${this.state.product} stocks= ${stocks}`
      );

      let userData = this.state.userData;
      userData.coins = coins;
      userData[this.state.product.split(".")[0]].stocks = stocks;
      userData[this.state.product.split(".")[0]].times = times;
      userData[this.state.product.split(".")[0]].cp = cp;
      this.setState({ userData: userData });
      console.log(userData);
      this.putData(userData);
    }
    console.log("Bought item successfully!");
  };
  sellItem = async () => {
    if (this.state.number <= 0) {
      alert("Please specify the proper stock value");
      this.nameInput.focus();
      return;
    } else if (this.state.number == undefined || this.state.number == "") {
      alert("Please specify the number of tasks");
      this.nameInput.focus();
      return;
    }
    let stocks =
      this.state.userData[this.state.product.split(".")[0]]["stocks"];
    if (this.state.number > stocks) {
      alert(
        `You don't have ${this.state.number} ${this.state.product} stocks. You only have ${stocks}`
      );
      this.nameInput.focus();
      return;
    } else {
      let stocks =
        this.state.userData[this.state.product.split(".")[0]]["stocks"];
      let times =
        this.state.userData[this.state.product.split(".")[0]]["times"];
      let cp = this.state.productPrice;
      let sellPrice = this.state.number * this.state.todayPrice;
      const coins = this.state.userData.coins + sellPrice;
      const profit =
        this.state.userData.profit + sellPrice - this.state.number * cp;
      // cp = (cp * stocks - sellPrice) / (stocks - this.state.number);
      // times += 1;
      stocks -= this.state.number;
      alert("Stocks sold successfully!");
      console.log(
        `${this.state.number} ${this.state.product} stocks sold for ${sellPrice}. Coins have ${coins}. Avg = ${cp}, times= ${times}. Number of ${this.state.product} stocks= ${stocks}`
      );
      let userData = this.state.userData;
      userData.coins = coins;
      userData[this.state.product.split(".")[0]].stocks = stocks;
      //  userData[this.state.product].times = times;
      userData[this.state.product.split(".")[0]].cp = cp;
      userData.profit = profit;
      this.setState({ userData: userData });
      this.putData(userData);
    }
    console.log("Sold item successfully!");
  };

  render() {
    return (
      <div className="container Borders">
        <div className="fitter">
          <GraphMaker product={this.state.product} />
          <img
            onClick={(event) => (window.location.href = "/profile")}
            src={pic}
            alt="John Doe"
            className="profile-pic"
          ></img>
          <ul className="slider">
            <li>Points : {this.state.userData["coins"]}</li>
          </ul>
        </div>
        <div className="drop">
          <nav>
            <label for="touch">
              <span>Companies</span>
            </label>
            <input type="checkbox" id="touch" />

            <ul className="slide">
              <li>
                <a
                  onClick={() => {
                    this.updateData("IBM");
                    // this.setState({ product: "IBM" });
                  }}
                  href="#"
                >
                  IBM
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.updateData("TSCO.LON");
                    // this.setState({ product: "TSCO.LON" });
                  }}
                  href="#"
                >
                  TSCO.LON
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.updateData("SHOP.TRT");
                    // this.setState({ product: "SHOP.TRT" });
                  }}
                  href="#"
                >
                  SHOP.TRT
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.updateData("DAI.DEX");
                    // this.setState({ product: "DAI.DEX" });
                  }}
                  href="#"
                >
                  DAI.DEX
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <input
          placeholder="Enter number of stocks"
          type={"number"}
          required
          min={0}
          ref={(input) => {
            this.nameInput = input;
          }}
          onChange={(e) => {
            this.setState({ number: e.target.value });
          }}
        />
        <div className="colcontainer">
          <button onClick={this.buyItem} className="green">
            Buy
          </button>
          <button onClick={this.sellItem} className="red">
            Sell
          </button>
        </div>
      </div>
    );
  }
}

export default BuySellMainPage;
