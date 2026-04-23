const express = require("express");
const router = express.Router();

const {
  getMeals,
  createMeal,
  deleteMeal,
  updateMeal
} = require("../controllers/mealController");

// READ
router.get("/", getMeals);

// CREATE
router.post("/", createMeal);

// DELETE
router.delete("/:id", deleteMeal);

// UPDATE 
router.put("/:id", updateMeal);

module.exports = router;