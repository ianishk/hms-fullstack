const mongoose = require("mongoose");

const outPatientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "minimum length of the name is 2"],
    maxLenght: [150, "maximum lenght of the name is 100"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: [0, "Age cannot be negative"],
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: "{VALUE} is not a valid entry for Gender attribute",
    },
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

let outPatient = mongoose.model("outPatient", outPatientSchema);
module.exports = outPatient;
