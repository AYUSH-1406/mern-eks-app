const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json()); // ← REQUIRED

mongoose.connect("mongodb://mongo:27017/tododb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
