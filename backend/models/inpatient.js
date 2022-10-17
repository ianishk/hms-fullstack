const mongoose = require("mongoose");

const inPatientSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  phone: {
    type: String,
  },
  address: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  bookedRooms: {
    type: Number,
  }
});

let inPatient = mongoose.model("inPatient", inPatientSchema);
module.exports = inPatient;
