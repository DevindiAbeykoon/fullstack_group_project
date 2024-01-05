const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  roomNo: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  userId: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = Room = mongoose.model("room", RoomSchema);
