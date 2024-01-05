// Minura

const express = require("express");
const router = express.Router();

// Model
const Reservation = require("../../models/Reservation");

router.post("/", (req, res) => {
  // Create a reservation
});

router.get("/", (req, res) => {
  // Read all the reservations
  res.send("RESERVATION");
});

router.put("/", (req, res) => {
  // Update reservation
});

router.delete("/", (req, res) => {
  // Delete reservations
});

module.exports = router;
