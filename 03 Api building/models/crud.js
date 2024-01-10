const mongoose = require("mongoose");


const crudSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    id:{
        type:Number
    }
});

const data = mongoose.model("collection", crudSchema);

module.exports = data;