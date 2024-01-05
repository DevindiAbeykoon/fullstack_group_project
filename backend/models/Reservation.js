const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationScheema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  room_no: { type: Schema.Types.ObjectId, ref: "room" },
  check_id: {
    type: Date,
    required: true,
  },
  check_out: {
    type: String,
    required: true,
  },
});

module.exports = Reservation = mongoose.model(
  "reservation",
  ReservationScheema
);
