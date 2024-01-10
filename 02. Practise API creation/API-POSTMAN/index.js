const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 4001;
const dataBase = require("./Models/schema");

app.use(express.json());

// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  res.status(201).send("Data is ok");
});

// Get all data
app.get("/get", async (req, res) => {
  const getData = await dataBase.find();
  res.send(getData);
});

// create data
app.post("/post", async (req, res) => {
  const data = new dataBase({
    Name: req.body.Name,
    Email: req.body.Email,
    id: req.body.id,
  });
  const val = await data.save();
  res.json(val);
});

// update data
app.put("/put/:id", async (req, res) => {
  let upid = req.params.id;
  let upname = req.body.Name;
  let upemail = req.body.Email;

  const data = await dataBase.findOneAndUpdate(
    { id: upid },
    { $set: { Name: upname, Email: upemail } },
    { new: true }
  );
  
  if (!data) return res.send("No Such Data Found");
  return res.send("Data Found and updated");
});

// fetch particular data
app.get("/get/:id", async (req, res) => {
  const fetchId = req.params.id;
  const resp = await dataBase.find({ id: fetchId });
  if (resp) return res.send(resp);
});
// Delete
app.delete("/delete/:id", async (req, res) => {
  const delData = req.params.id;
  const resp = await dataBase.findOneAndDelete({ id: delData });
  if (resp) return res.send("Data Deleted Successfully");
  return res.send("No Such Data Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});