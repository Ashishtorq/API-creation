const express = require("express");
const app = express();
const Port = 5500;
const mongoose = require("mongoose");
const loginData = require("./Model/database");

// middle ware
app.use(express.json());
// app.use(cors());

// db connected
mongoose
  .connect("mongodb://127.0.0.1:27017/CRUD-SAT")
  .then(() => {
    console.log("Database Connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.status(200).send("This is running on port 5500");
});

// get data
app.get("/getData", async (req, res) => {
  const allData = await loginData.find();

  // verifying data available or not
  if (!allData)
    return res.status(404).send({ success: false, messege: "No Record found" });
  return res
    .status(200)
    .send({ success: true, messege: "record found", data: allData });
});
// create data
app.post("/dataCreate", async (req, res) => {
  const createData = req.body;
  const newData = new Product(createData);
  const response = await newData.save()
  if (!response) {
    return res
      .status(404)
      .send({ success: false, messege: "Data not created" });
  } else {
    return res.status(200).send({ success: true, messege: "Data Created" });
  }
});
// delete data
app.delete("/deleteData:id", async(req,res)=>{
  const delData = req.body;
  const del = await loginData.findById({id:delData});
  const response = await loginData.findByIdAndDelete({_id:del._id});
})
// update/edit data

// server created
app.listen(Port, () => {
  console.log(`This app is runnig on Port ${Port}`);
});
