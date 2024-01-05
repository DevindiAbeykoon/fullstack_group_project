// Shenali

const express = require("express");
const router = express.Router();

// Model
const Clean = require("../../models/Clean");

router.post("/", (req, res) => {
  // Create cleaning appointment
});

router.get("/", (req, res) => {
  // Read all the cleaning appointments
  res.send("CLEAN");
});

router.put("/", (req, res) => {
  // Update cleaning appointments
});

router.delete("/", (req, res) => {
  // Delete cleaning appointment
});

module.exports = router;
