const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user" },
  comment: {
    type: String,
    default: true,
  },
  service_quality: {
    type: String,
    required: true,
  },
  cleanliness: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  overall: {
    type: String,
    required: true,
  },
});

module.exports = Feedback = mongoose.model("feedback", FeedbackSchema);
