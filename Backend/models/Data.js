import mongoose from "mongoose";
//{"username":"dani","coins":0,"IBM":0,"TSCO":0,"DAI":0,"SHOP":0,"GPV":0,"RELIANCE":0,"start":new Date()}
const DataSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  coins: {
    type: Number,
    required: true,
  },
  IBM: {
    type: Number,
    required: true,
  },
  TSCO: {
    type: Number,
    required: true,
  },
  DAI: {
    type: Number,
    required: true,
  },
  SHOP: {
    type: Number,
    required: true,
  },
  GPV: {
    type: Number,
    required: true,
  },
  RELIANCE: {
    type: Number,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
});

const DataModel = mongoose.model("Data", DataSchema);

export default DataModel;
