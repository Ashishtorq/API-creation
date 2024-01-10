const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 4001;
const dataBase = require("./Models/schema");
app.use(express.json());
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

// get or fetch data
app.get("/get",async(req,res)=>{
    const getData = await dataBase.find();
    res.send(getData);
})

// create data
app.post("/post", async (req, res) => {
  const data = new dataBase({
    Name: req.body.Name,
    Email: req.body.Email,
    id:req.body.id
  });
  const val = await data.save();
  res.json(val);
//   if(respose) return res.status(201).send({messege:"This is working"})
});


// update data


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
