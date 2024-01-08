const express = require("express");
const router = express.Router();

// Model
const Room = require("../../models/Rooms");

// Create a room
router.post("/", async (req, res) => {
  try {
    const { id, title, description, price, size, occupancy, amenities, image } =
      req.body;

    const newRoom = new Room({
      id,
      title,
      description,
      price,
      size,
      occupancy,
      amenities,
      image,
    });

    const savedRoom = await newRoom.save();

    res.json(savedRoom);
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Read rooms
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a room
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.json(updatedRoom);
  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a room
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRoom = await Room.findByIdAndDelete(id);

    res.json(deletedRoom);
  } catch (error) {
    console.error("Error deleting room:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
