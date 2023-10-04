// const mongoose = require('mongoose');

// const goalSchema = new mongoose.Schema({
//   //
// });

// module.exports = Goal;

const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  target: {
    type: Number,
    required: true,
    description: 'The target value or quantity for the goal (e.g., weight in kilograms, steps per day).'
  },
  deadline: {
    type: Date,
    required: true,
    description: 'The deadline or target date for achieving the goal.'
  },
  type: {
    type: String,
    required: true,
    description: 'The type or category of the fitness goal (e.g., weight loss, cardio, strength training).'
  }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
