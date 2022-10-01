import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import UserModel from "./models/Users.js";
import DataModel from "./models/Data.js";

// const express = require("express");
const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017");

app.get("/getData", (req, res) => {
  DataModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  console.log("*****************USER*****************");
  console.log(user);
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.post("/createData", async (req, res) => {
  const data = req.body;
  console.log("*****************USER-DATA*****************");
  console.log(data);
  const newData = new DataModel(data);
  await newData.save();
  res.json(data);
});

app.put("/update/:username", async (req, res) => {
  let username = req.params.username;
  let profit = req.body.profit;
  let coins = req.body.coins;
  let IBM = req.body.IBM;
  let TSCO = req.body.DISCO;
  let DAI = req.body.DAI;
  let SHOP = req.body.SHOP;
  let GPV = req.body.GPV;
  let RELIANCE = req.body.RELIANCE;
  let start = req.body.start;
  DataModel.findOneAndUpdate(
    { username: username },
    {
      $set: {
        profit: profit,
        coins: coins,
        IBM: IBM,
        TSCO: TSCO,
        DAI: DAI,
        SHOP: SHOP,
        GPV: GPV,
        RELIANCE: RELIANCE,
        start: start,
      },
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        if (data == null) {
          res.send("Nothing found!");
        } else {
          res.send(data);
        }
      }
    }
  );
});

app.listen(3002, () => {
  console.log("Running on http://localhost:3002");
});
