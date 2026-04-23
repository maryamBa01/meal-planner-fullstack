const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const mealRoutes = require("./routes/mealRoutes");

const app = express();

// tillåt frontend (Vite)
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api/meals", mealRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));