const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Age:{
        type:Number
    }

})

const dataModel = mongoose.model("collection", dataSchema);

module.exports = dataModel;