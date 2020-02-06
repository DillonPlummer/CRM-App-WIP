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
  texture: {
    type: String,
    required: true
  },
  sheen: {
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
