const Goal = require('../models/goalModel');

const createGoal = async (req, res) => {
  try {
    // TODO: Implement logic to create a new goal
    // Retrieve data from req.body, create a new goal, and save it to the database
    // Example response when goal is created successfully:
    // res.status(201).json({ message: 'Goal created successfully', goal });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getGoals = async (req, res) => {
  try {
    // TODO: Implement logic to retrieve all goals
    // Retrieve all goals from the database
    // Example response when goals are found:
    // res.status(200).json(goals);
    // Example response when no goals are found:
    // res.status(404).json({ message: 'No goals found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getGoalById = async (req, res) => {
  const goalId = req.params.id;

  try {
    // TODO: Implement logic to retrieve a goal by ID
    // Use Goal.findById(goalId) to retrieve a goal
    // Example response when goal is found:
    // res.status(200).json(goal);
    // Example response when goal is not found:
    // res.status(404).json({ message: 'Goal not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const updateGoal = async (req, res) => {
  const goalId = req.params.id;
  const updateInfo = req.body;

  try {
    // TODO: Implement logic to update a goal
    // Use Goal.findByIdAndUpdate(goalId, updateInfo, { new: true }) to update the goal
    // Example response when goal is updated successfully:
    // res.status(200).json({ message: 'Goal updated successfully', goal: updatedGoal });
    // Example response when goal is not found:
    // res.status(404).json({ message: 'Goal not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const deleteGoal = async (req, res) => {
  const goalId = req.params.id;

  try {
    // TODO: Implement logic to delete a goal
    // Use Goal.findByIdAndDelete(goalId) to delete the goal
    // Example response when goal is deleted successfully:
    // res.status(200).json({ message: 'Goal deleted successfully', goal: deletedGoal });
    // Example response when goal is not found:
    // res.status(404).json({ message: 'Goal not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const sortGoals = async (req, res) => {
  const order = req.params.order;

  try {
    // TODO: Implement logic to sort goals by target
    // Retrieve and sort goals from the database based on the 'order' parameter
    // Example response when goals are sorted:
    // res.status(200).json(sortedGoals);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getGoalsByType = async (req, res) => {
  const goalType = req.params.type;

  try {
    // TODO: Implement logic to retrieve goals by type
    // Retrieve goals from the database based on the 'goalType' parameter
    // Example response when goals are found:
    // res.status(200).json(goals);
    // Example response when no goals are found:
    // res.status(404).json({ message: 'No goals found for the given type' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const getGoalsByDeadline = async (req, res) => {
  const deadline = req.params.deadline;

  try {
    // TODO: Implement logic to retrieve goals by deadline
    // Retrieve goals from the database based on the 'deadline' parameter
    // Example response when goals are found:
    // res.status(200).json(goals);
    // Example response when no goals are found:
    // res.status(404).json({ message: 'No goals found before the given deadline' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  createGoal,
  getGoals,
  getGoalById,
  updateGoal,
  deleteGoal,
  sortGoals,
  getGoalsByType,
  getGoalsByDeadline,
};
