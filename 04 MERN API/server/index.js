const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3001;
const Database = require("./models/User");

// middle ware
const app = express();
app.use(express.json());
app.use(cors());


// database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/MERN-API")
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });

// get data
app.get("/", (req, res) => {
  Database.find({})
    .then((result) => res.json(result))
    .catch((e) => res.json(e));
});


// create data
app.post("/create", (req, res) => {
  Database.create(req.body)
    .then((result) => res.json(result))
    .catch((e) => res.json(e));
});

// delete data
app.delete("/delete/:id", (req, res) => {
  const delId = req.params._id;
  Database.findByIdAndDelete({ _id: delId })
    .then((result) => res.json(result))
    .catch((e) => res.json(e));
});
// update data
app.put("/update/:id", (req, res) => {
  const updateId = req.params.id;
  const updateData = req.body;
  Database.findByIdAndUpdate(updateId, updateData) 
    .then((result) => res.json(result))
    .catch((e) => res.json(e));
});
// server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
