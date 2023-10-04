const Goal = require("../models/goalModel");

// const createGoal = async (req, res) => {
//   try {
//     // TODO: Implement logic to create a new goal
//     // Retrieve data from req.body, create a new goal, and save it to the database
//     // Example response when goal is created successfully:
//     // res.status(201).json({ message: 'Goal created successfully', goal });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const createGoal = async (req, res) => {
  try {
    // Retrieve data from req.body
    const { target, deadline, type } = req.body;

    // Create a new goal using the Goal model
    const newGoal = new Goal({
      target,
      deadline,
      type,
    });

    // Save the new goal to the database
    const savedGoal = await newGoal.save();

    // If the goal is created successfully, respond with a 201 status and a success message
    res
      .status(201)
      .json({ message: "Goal created successfully", goal: savedGoal });
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const getGoals = async (req, res) => {
//   try {
//     // TODO: Implement logic to retrieve all goals
//     // Retrieve all goals from the database
//     // Example response when goals are found:
//     // res.status(200).json(goals);
//     // Example response when no goals are found:
//     // res.status(404).json({ message: 'No goals found' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const getGoals = async (req, res) => {
  try {
    // Retrieve all goals from the database
    const goals = await Goal.find();

    if (goals.length > 0) {
      // If goals are found, send them as a JSON response
      res.status(200).json(goals);
    } else {
      // If no goals are found, send a 404 response with a message
      res.status(404).json({ message: "No goals found" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const getGoalById = async (req, res) => {
//   const goalId = req.params.id;

//   try {
//     // TODO: Implement logic to retrieve a goal by ID
//     // Use Goal.findById(goalId) to retrieve a goal
//     // Example response when goal is found:
//     // res.status(200).json(goal);
//     // Example response when goal is not found:
//     // res.status(404).json({ message: 'Goal not found' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };
const getGoalById = async (req, res) => {
  const goalId = req.params.id;

  try {
    // Use Goal.findById(goalId) to retrieve a goal by its ID
    const goal = await Goal.findById(goalId);

    if (goal) {
      // If the goal is found, send it as a JSON response
      res.status(200).json(goal);
    } else {
      // If no goal is found with the specified ID, send a 404 response with a message
      res.status(404).json({ message: "Goal not found" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const updateGoal = async (req, res) => {
//   const goalId = req.params.id;
//   const updateInfo = req.body;

//   try {
//     // TODO: Implement logic to update a goal
//     // Use Goal.findByIdAndUpdate(goalId, updateInfo, { new: true }) to update the goal
//     // Example response when goal is updated successfully:
//     // res.status(200).json({ message: 'Goal updated successfully', goal: updatedGoal });
//     // Example response when goal is not found:
//     // res.status(404).json({ message: 'Goal not found' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };
const updateGoal = async (req, res) => {
  const goalId = req.params.id;
  const updateInfo = req.body;

  try {
    // Use Goal.findByIdAndUpdate(goalId, updateInfo, { new: true }) to update the goal
    const updatedGoal = await Goal.findByIdAndUpdate(goalId, updateInfo, {
      new: true,
    });

    if (updatedGoal) {
      // If the goal is updated successfully, respond with a 200 status and the updated goal
      res
        .status(200)
        .json({ message: "Goal updated successfully", goal: updatedGoal });
    } else {
      // If no goal is found with the specified ID, respond with a 404 status and a message
      res.status(404).json({ message: "Goal not found" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const deleteGoal = async (req, res) => {
//   const goalId = req.params.id;

//   try {
//     // TODO: Implement logic to delete a goal
//     // Use Goal.findByIdAndDelete(goalId) to delete the goal
//     // Example response when goal is deleted successfully:
//     // res.status(200).json({ message: 'Goal deleted successfully', goal: deletedGoal });
//     // Example response when goal is not found:
//     // res.status(404).json({ message: 'Goal not found' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };
const deleteGoal = async (req, res) => {
  const goalId = req.params.id;

  try {
    // Use Goal.findByIdAndDelete(goalId) to delete the goal
    const deletedGoal = await Goal.findByIdAndDelete(goalId);

    if (deletedGoal) {
      // If the goal is deleted successfully, respond with a 200 status and the deleted goal
      res
        .status(200)
        .json({ message: "Goal deleted successfully", goal: deletedGoal });
    } else {
      // If no goal is found with the specified ID, respond with a 404 status and a message
      res.status(404).json({ message: "Goal not found" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const sortGoals = async (req, res) => {
//   const order = req.params.order;

//   try {
//     // TODO: Implement logic to sort goals by target
//     // Retrieve and sort goals from the database based on the 'order' parameter
//     // Example response when goals are sorted:
//     // res.status(200).json(sortedGoals);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const sortGoals = async (req, res) => {
  const order = req.params.order;

  try {
    // Define the sorting criteria based on the 'order' parameter
    const sortCriteria =
      order === "asc" ? { target: 1 } : order === "desc" ? { target: -1 } : {};

    // Retrieve and sort goals from the database based on the 'sortCriteria'
    const sortedGoals = await Goal.find().sort(sortCriteria);

    // Check if any goals were found and respond accordingly
    if (sortedGoals.length > 0) {
      // If goals are sorted, respond with a 200 status and the sorted goals
      res.status(200).json(sortedGoals);
    } else {
      // If no goals are found, respond with a 404 status and a message
      res.status(404).json({ message: "No goals found" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const getGoalsByType = async (req, res) => {
//   const goalType = req.params.type;

//   try {
//     // TODO: Implement logic to retrieve goals by type
//     // Retrieve goals from the database based on the 'goalType' parameter
//     // Example response when goals are found:
//     // res.status(200).json(goals);
//     // Example response when no goals are found:
//     // res.status(404).json({ message: 'No goals found for the given type' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const getGoalsByType = async (req, res) => {
  const goalType = req.params.type;

  try {
    // Retrieve goals from the database based on the 'goalType' parameter
    const goals = await Goal.find({ type: goalType });

    if (goals.length > 0) {
      // If goals are found, respond with a 200 status and the goals
      res.status(200).json(goals);
    } else {
      // If no goals are found for the given type, respond with a 404 status and a message
      res.status(404).json({ message: "No goals found for the given type" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// const getGoalsByDeadline = async (req, res) => {
//   const deadline = req.params.deadline;

//   try {
//     // TODO: Implement logic to retrieve goals by deadline
//     // Retrieve goals from the database based on the 'deadline' parameter
//     // Example response when goals are found:
//     // res.status(200).json(goals);
//     // Example response when no goals are found:
//     // res.status(404).json({ message: 'No goals found before the given deadline' });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: 'Internal server error', error: error.message });
//   }
// };

const getGoalsByDeadline = async (req, res) => {
  const deadline = new Date(req.params.deadline);

  try {
    // Retrieve goals from the database based on the 'deadline' parameter
    const goals = await Goal.find({ deadline: { $lte: deadline } });

    if (goals.length > 0) {
      // If goals are found, respond with a 200 status and the goals
      res.status(200).json(goals);
    } else {
      // If no goals are found before the given deadline, respond with a 404 status and a message
      res
        .status(404)
        .json({ message: "No goals found before the given deadline" });
    }
  } catch (error) {
    // Handle errors and send a 500 response with an error message
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
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
