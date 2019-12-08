const mongoose = require("mongoose");

const Answers = mongoose.model("Answers", {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = Answers;
