const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const database = require("./Models/model");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/JWT-MERN")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => {
    console.log(`Error ${e}`);
  });

app.post("/register", async (req, res) => {
  try {
    const user = await database.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({status:'ok'})
  } catch (e) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});
app.post("/login", async (req, res) => {
  const user = database.findone({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    return res.json({ status: "ok", user: "true" });
  } else {
    return res.json({ status: "error", user: "false" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
