const Meal = require("../models/Meal");

// GET all meals
const getMeals = async (req, res) => {
  const meals = await Meal.find().sort({ createdAt: -1 });
  res.json(meals);
};

// CREATE meal
const createMeal = async (req, res) => {
  try {
    const meal = await Meal.create(req.body);
    res.json(meal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE meal
const deleteMeal = async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);
    res.json({ message: "Meal deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  UPDATE meal 
const updateMeal = async (req, res) => {
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedMeal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getMeals,
  createMeal,
  deleteMeal,
  updateMeal
};