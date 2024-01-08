const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CleanScheema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  room_no: { type: Schema.ObjectId, ref: "room" },
  isCleaned: {
    type: Boolean,
    default: false,
  },
  cleaningTime: {
    type: Date,
    required: true,
  },
});

module.exports = Clean = mongoose.model("clean", CleanScheema);
