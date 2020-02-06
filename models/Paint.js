const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const FixtureSchema = new Schema({
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

mongoose.model("fixture", FixtureSchema);
