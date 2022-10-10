const mongoose = require("mongoose");

const inPatientSchema = mongoose.Schema({
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
  },
  phone: {
    type: String,
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
  bookedRooms: {
    type: Number,
  }
});

let inPatient = mongoose.model("inPatient", inPatientSchema);
module.exports = inPatient;
