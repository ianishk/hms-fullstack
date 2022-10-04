const express = require("express");
const bcrypt = require("bcryptjs");
const Patient = require("../models/patient");

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  Patient.findOne({ email })
    .then((patient) => {
      if (!patient)
        return res.status(400).json({ msg: "patient does not exist" });
      bcrypt.compare(password, patient.password).then((isMatch) => {
        if (!isMatch)
          return res.status(400).json({ msg: "Invalid credentials" });
        jwt.sign(
          { id: patient._id },
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
            });
          }
        );
      });
    })
    .catch((err) => {});
});

router.post("/signup", (req, res) => {
  const { name, email, password, age, address, phoneNo, gender } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) return res.status(400).json({ msg: "User already exists" });
      else {
        const newUser = new User({
          name,
          email,
          password,
          age,
          address,
          phoneNo,
          gender,
        });
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => {});
        });
      }
    })
    .catch((err) => {});
});
