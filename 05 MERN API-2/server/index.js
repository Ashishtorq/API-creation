const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 7000;
const app = express();
const database = require("./Model/User");

// middle ware
app.use(express.json());
app.use(cors());
// database
mongoose
  .connect("mongodb://127.0.0.1:27017/CRUD-APPLICATION")
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });

//  create
app.post("/create", (req, res) => {
  database
    .create(req.body)
    .then((result) => res.json(result))
    .catch((e) => res.json(e));
});

//   get particular data
app.get("/get/:id", (req, res) => {
  const ID = req.params.id;
  database
    .findById({ _id: ID })
    .then((result) => res.json(result))
    .catch((e) => res.json(e));
});
// get all data
app.get("/getall", (req, res) => {
  database
    .find()
    .then((resp) => res.json(resp))
    .catch((e) => res.json(e));
});
// delete
app.delete("/delete/:id", (req, res) => {
  const ID = req.params.id;
  database
    .findByIdAndDelete({ _id: ID })
    .then((resp) => res.json(resp))
    .catch((e) => res.json(e));
});
// update
app.put("/update/:id", (req, res) => {
  const ID = req.params.id;
  const data = req.body;
  database
    .findByIdAndUpdate(ID, data)
    .then((resp) => res.json(resp))
    .catch((e) => res.json(e));
});
// server
app.listen(PORT, () => {
  console.log(`Server is running of PORT ${PORT}`);
});
