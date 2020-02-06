const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const Cabinetchema = new Schema({
  company: {
    type: String,
    default: "Mid Continent",
    required: true
  },
  itemNumber: {
    type: String,
    required: true
  },
  doorStyle: {
    type: String,
    required: true
  },
  finish: {
    type: String,
    required: true
  },
  glaze: {
    type: String
  },
  woodSpecies: {
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

mongoose.model("cabinet", Cabinetchema);
