const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");

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



app.listen(PORT, ()=>{
    console.log(`Server is running of PORT ${PORT}`);
})



