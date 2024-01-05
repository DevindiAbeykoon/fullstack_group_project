// Devindi

const express = require("express");
const router = express.Router();

// Model
const User = require("../../models/User");

router.post("/", (req, res) => {
  // Create a user
});

router.get("/", (req, res) => {
  // Read single user
  res.send("USER");
});

router.put("/", (req, res) => {
  // Update user
});

router.delete("/", (req, res) => {
  // Delete user
});

module.exports = router;
