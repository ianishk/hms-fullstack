const express = require("express");
const router = express.Router();

const config = require("config");
const auth = require("../middleware/auth");

const Prescription = require("../models/prescription");

router.post("/:doctor_id", async (req, res) => {
  try {
    // add the doctor id from the req pro
    const { patient, medicine, instructions } = req.body;

    const prescription = new Prescription({
      doctor: req.params.doctor_id,
      patient,
      medicine,
      instructions,
    });
    await prescription.save();
    console.log(prescription);
    res.json(prescription);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const prescription = await Prescription.find();
    res.json(prescription);
  } catch (err) {
    console.log(err.message);
  }
});

router.patch("/:doctor_id", async (req, res) => {
    try {
        const { patient, medicine, instructions } = req.body;
        const prescription = await Prescription.findOne({doctor: req.params.doctor_id});
        if (!prescription) return res.status(400).json({ msg: "No prescription found" });
        if (patient.length != 0) {
            prescription.patient = patient;
        }
        if (medicine.length != 0) {
            prescription.medicine = medicine;
        }
        if (instructions.length != 0) {
            prescription.instructions = instructions;
        }
        let new_prescription = await prescription.save(); 
        res.json(new_prescription);
    } catch (error) {
        console.log(error.message);
    }
});

router.delete("/:doctor_id", async (req, res) => {
    try {
        await Prescription.findOneAndRemove({ doctor: req.params.doctor_id });
        res.json({ msg: "Prescription removed" });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;
