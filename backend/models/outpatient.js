const mongoose = require("mongoose");

const outPatientSchema = mongoose.Schema({
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
  phoneNo: {
    type: String
  },
  address: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

let outPatient = mongoose.model("outPatient", outPatientSchema);
module.exports = outPatient;
