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

app.listen(3002, () => {
  console.log("Running on http://localhost:3002");
});
