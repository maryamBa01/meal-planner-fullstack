const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  category: { type: String, required: true }, // frukost, lunch osv
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Meal", mealSchema);