const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CRUD-SAT")
.then(()=>{
    console.log("Database successfull connected");
})
.catch((error)=>{
    console.log(error);
})


const dataSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    userID:{
        type:Number
    }
})

const credentials = mongoose.model(credentials, 'usersCollection');

module.exports = credentials;
