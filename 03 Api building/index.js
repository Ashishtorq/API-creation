const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const dataBase = require("./models/crud")

// middleware
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/api-db")
.then (()=>{
    console.log("Database connected");
})
.catch((e)=>{
    console.log(e);
})

app.get('/', (req,res)=>{
    res.status(200).send("Server is ok");
}) 

// get all data
app.get('/getAll',async(req,res)=>{
    const data = await dataBase.find();
    if(!data) return res.send("No record found");
    else return res.send(data);
})
// get one data
app.get('/getone/:id', async(req,res)=>{
    const getId = req.params.id;
    const data = await dataBase.find({id:getId});
    res.send(data);
})
// update
app.put("/put/:id", async(req,res)=>{
    let upName = req.body.Name;
    let upEmail = req.body.Email;
    let upid = req.params.id;

    const data = await dataBase.findOneAndUpdate(
        {id:upid},
        {$set:{Name:upName, Email:upEmail}},
        {new:true}
    )
    res.send(data);
})
// create
app.post("/post", async (req,res)=>{
    const data = new dataBase({
        Name: req.body.Name,
        Email: req.body.Email,
        id: req.body.id
    })
    const resp = await data.save();
    res.send(resp);
})
// delete
app.delete("/delete/:id", async(req,res)=>{
    const delID = req.params.id;
    const resp = await dataBase.findOneAndDelete({id:delID});
    res.send("Data Deleted Successfully");
})
app.listen(PORT, ()=>{
    console.log(`Server is running of PORT ${PORT}`);
})



