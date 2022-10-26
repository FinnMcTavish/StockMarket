import axios from "axios";
import React from "react";
import { Component } from "react";

class admin extends Component
{
    state = {
        products: [],
        userData: {},
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = () => {
        axios.get("http://localhost:3002/getData")
        .then((response) => {
            const data = response.data;
            this.setState({products: data});
            console.log("DAta recieved!!!!!!!!!");
            console.log(this.state.products);
        })

        .catch(() => {
            alert("Error in data retrival!!!!");
        })
    }

    displayUserData = () => {

        if(!this.state.products.length) return console.log("ERRRRRROR");

        return (
            this.state.products.map((product,index) => {
                
                return (
                    
            <div key = {index} style={{
                display: "flex",
                justifyContent: "space-evenly",
                borderRadius: "10px",
                        border: "solid #7928ca",
                        boxShadow: "0 0 10px #7928ca",
                margin: "10px",
                padding: "5px 100px"}}>

                <div>

                <h3>UserName: {product["username"]} </h3>
                <h3>StartDate: {product["start"]}</h3>
                <h3>Coins: {product["coins"]}</h3>
                <h3>Profit: {product["profit"]}</h3>
                <br />
                <br />
                <br />
                <br />
                
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
            
                )
                
        }));
    }






    render()
    {
       return(
        <div style ={
            {
                background: "black",
                display: "flex",
                flexDirection: "column",
                color: "black",
                alignItems: "center"}
            }>

            <div style ={
                {
                    alignItems: "center",
                    display: "flex",
                    textAlign: "center"}
                }>
                

                <div style ={
                    {
                        background: "#1c1c1c",
                        padding: "15px 100px",
                        borderRadius: "10px",
                        margin: "10px",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "10px",
                        border: "solid #7928ca",
                        boxShadow: "0 0 10px #7928ca",
                        }
                    }>

                    <h1>Number of Users</h1><br/>

                    <h2>{this.state.products.length}</h2>
            
            
                </div>

                <div style ={
                    {
                        background: "#1c1c1c",
                        padding: "15px 100px",
                        borderRadius: "10px",
                        margin: "10px",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "10px",
                        border: "solid #7928ca",
                        boxShadow: "0 0 10px #7928ca", }
                    }>
                    
                    <h1>Number of Purchase</h1><br/>

                    <h2>0</h2>
            
            
                </div>

                <div style ={
                    {
                        background: "#1c1c1c",
                        padding: "15px 100px",
                        borderRadius: "10px",
                        margin: "10px",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "10px",
                        border: "solid #7928ca",
                        boxShadow: "0 0 10px #7928ca", }
                    }>
                    
                    <h1>Number of Companies</h1><br/>

                    <h2>6</h2>
                </div>
            
                    
            </div>

            <div style ={
                    {
                        background: "black",
                        padding: "10px 14px",
                        color: "white" ,
                        width: "100%",}
                    }>
                    <this.displayUserData />

            </div>
        </div>
       );
    }
}

export default admin;