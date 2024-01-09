const express = require('express');
const app = express();
const Port = 5500;



app.get('/',(req,res)=>{
    res.status(200).send("This is running on port 5500")
})


app.listen(Port,()=>{
    console.log(`This app is runnig on Port ${Port}`);
})