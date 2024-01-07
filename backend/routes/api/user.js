// Devindi
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const auth = require("./middleware/auth");

// Model
const User = require("../../models/User");

router.post("/", async (req, res) => {
  // Create a user
  const { email, password, firstName, lastName } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" });
  }

  const saltRounds = 10;
  // const someOtherPlaintextPassword = 'not_bacon';

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, async (err, hash) => {
      try {
        await User.create({
          email,
          firstName,
          lastName,
          password: hash,
        }).then((user) =>
          res.status(201).json({
            error: 0,
            message: "User successfully created",
            user,
          })
        );
      } catch (err) {
        res.status(401).json({
          message: "User not successful created",
          error: 1,
          message: error.mesage,
        });
      }
    });
  });
});

// Login
router.get("/", (req, res) => {
  // Read single user
  res.send("USER");
});

router.put("/", auth, (req, res) => {
  // Update user
});

router.delete("/", auth, (req, res) => {
  // Delete user
});

module.exports = router;
