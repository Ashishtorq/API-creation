const express = require('express');
const app = express();
const Port = 5500;
const mongoose =  require('mongoose');
const loginSchema = require('./Model/database');

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


app.listen(Port,()=>{
    console.log(`This app is runnig on Port ${Port}`);
})