const express = require("express");
const auth = require("./middleware/auth");
const router = express.Router();

// Model
const Feedback = require("../../models/Feedback");

// Create Feedback
router.post("/", auth, async (req, res) => {
  try {
    const { userId, comment, service_quality, cleanliness, food, overall } =
      req.body;
    const feedback = new Feedback({
      userId,
      comment,
      service_quality,
      cleanliness,
      food,
      overall,
    });
    await feedback.save();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read All Feedback
router.get("/", auth, async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read Feedback by ID
router.get("/:id", auth, async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update Feedback by ID
router.put("/:id", auth, async (req, res) => {
  try {
    const { message, value } = req.body;
    await Feedback.findByIdAndUpdate(req.params.id, { message, value });
    res.json({ message: "Feedback updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete Feedback by ID
router.delete("/:id", auth, async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
