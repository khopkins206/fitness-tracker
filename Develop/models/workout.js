const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    exercises: [
      {
        name: {
          type: String,
          trim: true,
        },
        type: {
          type: String,
          trim: true,
        },
        distance: Number,
        duration: Number,
        reps: Number,
        weight: Number,
        sets: Number,
      },
    ],
  },
  {
    date: {
      type: Date,
      default: Date.now,
    },
  }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
