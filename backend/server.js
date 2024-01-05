const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const clean = require("./routes/api/clean");
const feedback = require("./routes/api/feedback");
const reservation = require("./routes/api/reservation");
const room = require("./routes/api/room");
const user = require("./routes/api/user");

dotenv.config();

const app = express();

// Bodyparser
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected......."))
  .catch((err) => console.log(err));

// Routes
app.use("/api/clean", clean);
app.use("/api/feedback", feedback);
app.use("/api/reservation", reservation);
app.use("/api/room", room);
app.use("/api/user", user);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
