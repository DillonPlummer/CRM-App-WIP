const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  altPhone: {
    type: String
  },
  streetAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
});

mongoose.model("client", ClientSchema);
