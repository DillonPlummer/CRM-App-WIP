const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const HardwareSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  itemNumber: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  grout: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  notes: {
    type: String
  }
});

mongoose.model("hardware", HardwareSchema);
