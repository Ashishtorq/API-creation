const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 4001;
const dataBase = require("./Models/schema");

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

app.post("/post", async (req,res)=>{
    const credentials = new dataBase({
        name:req.body.name,
        email:req.body.email,
        // Mob_No:req.body.Mob_No
    })
    const response =  await credentials.save();
    res.json(response);
    // if(!respose) res.status(404);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
