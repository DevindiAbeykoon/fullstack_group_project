const express = require("express");
const auth = require("./middleware/auth");
const router = express.Router();

// Model
const CleaningAppointment = require("../../models/Clean");

router.post("/", auth, async (req, res) => {
  console.log(req.user);
  // Create cleaning appointment
  const { roomNumber, cleaningTime } = req.body;

  try {
    await CleaningAppointment.create({
      roomNumber,
      cleaningTime,
      userId: req.user.id,
    }).then((user) =>
      res.status(201).json({
        error: 0,
        message: "Clean Up Scheduled Successfully",
        user,
      })
    );
  } catch (error) {
    res.status(401).json({
      message: "Couldn't Schedule",
      error: 1,
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const cleaningAppointments = await CleaningAppointment.find();
    res.status(200).json({
      error: 0,
      message: "Cleaning Appointments retrieved successfully",
      cleaningAppointments,
    });
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "Couldn't retrieve Cleaning Appointments",
      errorMessage: error.message,
    });
  } // Read all the cleaning appointments
  res.send("CLEAN");
});

router.put("/", async (req, res) => {
  // Update cleaning appointments
  const { id, roomNumber, cleaningDate, cleaningTime } = req.body; // Assuming these are the fields you want to update

  try {
    const updatedAppointment = await CleaningAppointment.findByIdAndUpdate(
      id,
      { roomNumber, cleaningDate, cleaningTime },
      { new: true } // To return the updated appointment
    );

    if (!updatedAppointment) {
      return res.status(404).json({
        error: 1,
        message: "Cleaning Appointment not found",
      });
    }

    res.status(200).json({
      error: 0,
      message: "Cleaning Appointment updated successfully",
      updatedAppointment,
    });
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "Couldn't update Cleaning Appointment",
      errorMessage: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  // Delete cleaning appointment
  const { id } = req.params; // Get the appointment ID from request parameters

  try {
    const deletedAppointment = await CleaningAppointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return res.status(404).json({
        error: 1,
        message: "Cleaning Appointment not found",
      });
    }

    res.status(200).json({
      error: 0,
      message: "Cleaning Appointment deleted successfully",
      deletedAppointment,
    });
  } catch (error) {
    res.status(500).json({
      error: 1,
      message: "Couldn't delete Cleaning Appointment",
      errorMessage: error.message,
    });
  }
});

module.exports = router;
