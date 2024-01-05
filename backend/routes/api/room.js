// Savindi

const express = require("express");
const router = express.Router();

// Model
const Room = require("../../models/Rooms");

router.post("/", (req, res) => {
  // Create a room
});

router.get("/", (req, res) => {
  // Read rooms
  res.send("ROOM");
});

router.put("/", (req, res) => {
  // Update rooms
});

router.delete("/", (req, res) => {
  // Delete room
});

module.exports = router;
