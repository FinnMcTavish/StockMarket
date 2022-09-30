import "./style.css";
import pic from "../../assets/stonksManProfile.jpg";
import React from "react";
import Axios from "axios";
import { Component } from "react";
import GraphMaker from "./GraphMakerMainPage";
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
    this.state = { product: "IBM", userData: {} };
  }

  componentDidMount() {
    const username = sessionStorage.getItem("username");

    Axios.get("http://localhost:3002/getData").then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i]["username"] === username) {
          this.setState({ userData: response.data[i] });
        }
      }
    });
  }

  // getYesterday() {
  //   var d = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24),
  //     month = "" + (d.getMonth() + 1),
  //     day = "" + d.getDate(),
  //     year = d.getFullYear();

  //   if (month.length < 2) month = "0" + month;
  //   if (day.length < 2) day = "0" + day;

  //   return [year, month, day].join("-");
  // }

  buyItem = async () => {
    const API_REQ = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=demo`;
    await fetch(API_REQ)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let lastValue =
          data["Time Series (Daily)"][
            Object.keys(data["Time Series (Daily)"])[0]
          ][["1. open"]];

        console.log(lastValue);
      });

    console.log("Bought item");
  };
  sellItem() {
    console.log("Sell item");
  }

  render() {
    return (
      <div className="container Borders">
        <div className="fitter">
          <GraphMaker product={this.state.product} />
          <img src={pic} alt="John Doe" className="profile-pic"></img>
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
                    this.setState({ product: "IBM" });
                  }}
                  href="#"
                >
                  IBM
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.setState({ product: "TSCO.LON" });
                  }}
                  href="#"
                >
                  TSCO.LON
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.setState({ product: "SHOP.TRT" });
                  }}
                  href="#"
                >
                  SHOP.TRT
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.setState({ product: "DAI.DEX" });
                  }}
                  href="#"
                >
                  DAI.DEX
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <input type={"number"} required defaultValue={"0"} />
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
