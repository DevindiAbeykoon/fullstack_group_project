// Thamesha

const express = require("express");
const router = express.Router();

// Model
const Feedback = require("../../models/Feedback");

router.post("/", (req, res) => {
  // Create feedback
});

router.get("/", (req, res) => {
  // Read all feedback
  res.send("FEEDBACK");
});

router.put("/", (req, res) => {
  // Update feedback
});

router.delete("/", (req, res) => {
  // Delete feedback
});

module.exports = router;
