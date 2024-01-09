const express = require('express');
const app = express();
const Port = 5500;
const mongoose =  require('mongoose');
const loginSchema = require('./Model/database');

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


app.get('/',(req,res)=>{
    res.status(200).send("This is running on port 5500")
})

// get data
// create data
// delete data
// update/edit data



// server created
app.listen(Port,()=>{
    console.log(`This app is runnig on Port ${Port}`);
})